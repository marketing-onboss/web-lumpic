import React from 'react';

export default function EnvDebug() {
  // show a minimal view of import.meta.env for debugging in development
  const env = (import.meta.env as Record<string, unknown>);

  return (
    <div style={{position: 'fixed', right: 12, top: 12, zIndex: 9999, background: 'rgba(0,0,0,0.7)', color: '#fff', padding: 8, borderRadius: 6, fontSize: 12, maxWidth: 360}}>
      <strong style={{display: 'block', marginBottom: 6}}>DEV ENV (import.meta.env)</strong>
      <div style={{maxHeight: 220, overflow: 'auto'}}>
        <pre style={{whiteSpace: 'pre-wrap', margin: 0}}>{JSON.stringify(env, null, 2)}</pre>
      </div>
    </div>
  );
}
