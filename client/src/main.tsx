// React Route Imports
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// CSS Import
import './main.css'

// React Page Imports
import App from "./App.tsx";
import MainPage from "./pages/MainPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import StockPage from "./pages/StockPage.tsx";
import LandingPage from "./pages/LandingPage.tsx";

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