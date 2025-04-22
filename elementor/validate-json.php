<?php
/**
 * ClipUp Elementor JSON Validator
 * 
 * Este script valida o arquivo JSON para garantir que está no formato correto
 * para importação no Elementor.
 * 
 * Como usar:
 * 1. Coloque este arquivo na pasta onde está o JSON do Elementor
 * 2. Execute através da linha de comando: php validate-json.php clipup-home.json
 * 3. Ou acesse através do navegador (se em um servidor web)
 */

// Determinar se está sendo executado em linha de comando ou navegador
$isCLI = (php_sapi_name() === 'cli');

// Definir o arquivo JSON para validar
$jsonFile = $isCLI && isset($argv[1]) ? $argv[1] : 'clipup-home.json';
$jsonPath = __DIR__ . '/' . $jsonFile;

// Verificar se o arquivo existe
if (!file_exists($jsonPath)) {
    outputMessage("Erro: Arquivo {$jsonFile} não encontrado.");
    exit(1);
}

// Ler o conteúdo do arquivo
$jsonContent = file_get_contents($jsonPath);

// Tentar decodificar o JSON
$jsonData = json_decode($jsonContent);

// Verificar se há erros de JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    outputMessage("Erro: JSON inválido - " . json_last_error_msg());
    exit(1);
}

// Verificar estrutura básica do Elementor
$isValidElementor = validateElementorStructure($jsonData);

if ($isValidElementor) {
    outputMessage("✅ O arquivo JSON está válido para importação no Elementor.");
    outputMessage("Estrutura do template: {$jsonData->title}");
    outputMessage("Número de seções: " . count($jsonData->content));
    exit(0);
} else {
    outputMessage("❌ O arquivo JSON parece não estar no formato esperado pelo Elementor.");
    exit(1);
}

/**
 * Valida a estrutura básica necessária para um template do Elementor
 */
function validateElementorStructure($json) {
    // Verificar campos obrigatórios
    if (!isset($json->version) || !isset($json->title) || !isset($json->content)) {
        return false;
    }
    
    // Verificar se o conteúdo é um array
    if (!is_array($json->content)) {
        return false;
    }
    
    // Verificar se cada item do conteúdo tem a estrutura básica de uma seção
    foreach ($json->content as $section) {
        if (!isset($section->id) || !isset($section->settings) || !isset($section->elements)) {
            return false;
        }
    }
    
    return true;
}

/**
 * Apresenta mensagens em CLI ou HTML
 */
function outputMessage($message) {
    $isCLI = (php_sapi_name() === 'cli');
    
    if ($isCLI) {
        echo $message . PHP_EOL;
    } else {
        echo $message . "<br>";
    }
}

// Se estiver rodando no navegador e o JSON for válido, oferecer download
if (!$isCLI && $isValidElementor) {
    echo "<hr>";
    echo "<p>Você pode baixar o arquivo JSON validado:</p>";
    echo "<p><a href=\"{$jsonFile}\" download>Baixar {$jsonFile}</a></p>";
}
?>