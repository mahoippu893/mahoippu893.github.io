import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import TopPage from './pages/top/TopPage.tsx'

function Root() {

    // TODO
    return <TopPage/>; 
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
