// React Route Imports
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// CSS Import
import './app.css'

// React Page Imports
import App from "./App.tsx";
import MainPage from "./pages/Main Page Folder/MainPage.tsx";
import ErrorPage from "./pages/Error Page Folder/ErrorPage.tsx";
import StockPage from "./pages/Stock Page Folder/StockPage.tsx";
import LandingPage from "./pages/Landing Page Folder/LandingPage.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      }, 
      {
        path: '/StockPage',
        element: <StockPage />
      }, 
      {
        path: '/LandingPage',
        element: <LandingPage />
      }, 
    ]
  }
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}