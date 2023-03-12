import { StrictMode } from 'react';
import { DocProvider } from 'react-doc-ui';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElem = document.getElementById('root');
if (rootElem) {
  const root = createRoot(rootElem);
  root.render(
    <StrictMode>
      <DocProvider>
        <App />
      </DocProvider>
    </StrictMode>
  );
}
