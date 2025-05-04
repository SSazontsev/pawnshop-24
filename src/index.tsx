import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import router from './routes';
// import '@styles';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
	</StrictMode>
);
