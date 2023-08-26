// Importar o módulo ReactDom
import { createRoot } from 'react-dom/client';

// Importar Componente Principal
import Principal from './Principal';

// Render
const elemento = document.getElementById('root');
const root= createRoot(elemento);
root.render(<Principal/>);

