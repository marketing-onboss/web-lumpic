<?php
header('Content-Type: application/json');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method Not Allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data) || empty($data['email']) || empty($data['type'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid payload']);
    exit;
}

$BREVO_API_KEY = getenv('BREVO_API_KEY') ?: getenv('VITE_BREVO_API_KEY');
$BREVO_API_URL = getenv('BREVO_API_URL') ?: 'https://api.brevo.com/v3';

if (empty($BREVO_API_KEY)) {
    http_response_code(500);
    echo json_encode(['message' => 'Brevo API key not configured on server']);
    exit;
}

$isFreelancer = ($data['type'] === 'freelancer');

if ($isFreelancer) {
    $attributes = [
        'FIRSTNAME' => $data['nome'] ?? '',
        'IDADE' => $data['idade'] ?? null,
        'GENERO' => $data['genero'] ?? null,
        'CIDADE' => $data['cidade'] ?? null,
        'AREA_ATUACAO' => $data['areaAtuacao'] ?? null,
        'PORTFOLIO' => $data['portfolio'] ?? '',
        'CONVITE_ANTECIPADO' => $data['conviteAntecipado'] ?? null,
        'USER_TYPE' => 'freelancer',
    ];
    $listEnv = getenv('BREVO_LIST_FREELANCERS') ?: getenv('VITE_BREVO_LIST_FREELANCERS');
} else {
    $attributes = [
        'FIRSTNAME' => $data['nomeEmpresa'] ?? ($data['nome'] ?? ''),
        'EMPRESA' => $data['nomeEmpresa'] ?? null,
        'CNPJ' => $data['cnpj'] ?? null,
        'TELEFONE' => $data['telefoneEmpresa'] ?? null,
        'SEGMENTO' => $data['segmentoEmpresa'] ?? null,
        'TAMANHO' => $data['tamanhoEmpresa'] ?? null,
        'CIDADE' => $data['cidadeEmpresa'] ?? null,
        'SITE' => $data['siteEmpresa'] ?? null,
        'INSTAGRAM' => $data['instagramEmpresa'] ?? null,
        'USER_TYPE' => 'empresa',
    ];
    $listEnv = getenv('BREVO_LIST_EMPRESAS') ?: getenv('VITE_BREVO_LIST_EMPRESAS');
}

$listId = (int) ($listEnv ?: ($isFreelancer ? 2 : 3));

$contact = [
    'email' => $data['email'],
    'attributes' => $attributes,
    'listIds' => [$listId],
    'updateEnabled' => true,
];

$payload = json_encode($contact);

$ch = curl_init("{$BREVO_API_URL}/contacts");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Accept: application/json',
    'Content-Type: application/json',
    'api-key: ' . $BREVO_API_KEY,
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

$response = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($status >= 200 && $status < 300) {
    echo json_encode(['success' => true, 'action' => 'created']);
    curl_close($ch);
    exit;
}

// If 400, try to update existing contact
if ($status === 400) {
    $emailEncoded = rawurlencode($data['email']);
    curl_setopt($ch, CURLOPT_URL, "{$BREVO_API_URL}/contacts/{$emailEncoded}");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['attributes' => $attributes, 'listIds' => [$listId]]));
    $updateResp = curl_exec($ch);
    $updateStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($updateStatus >= 200 && $updateStatus < 300) {
        echo json_encode(['success' => true, 'action' => 'updated']);
        exit;
    }

    http_response_code(500);
    echo json_encode(['success' => false, 'status' => $updateStatus, 'response' => $updateResp]);
    exit;
}

// Other errors
curl_close($ch);
http_response_code(500);
echo json_encode(['success' => false, 'status' => $status, 'response' => $response]);
exit;

?>
