import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LayoutGeral from "./components/layout/LayoutGeral";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Portfolio from "./pages/Portfolio";
import Contactos from "./pages/Contactos";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import Termo from "./pages/Termo";

import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Configuração para GitHub Pages
const isGitHubPages = import.meta.env.MODE === "production";
const basename = isGitHubPages ? "/ayanda-digital-media" : "/";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LayoutGeral />,
      children: [
        { index: true, element: <Home /> },
        { path: "sobre", element: <Sobre /> },
        { path: "servicos", element: <Servicos /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contactos", element: <Contactos /> },
        { path: "politica-privacidade", element: <PoliticaPrivacidade /> },
        { path: "termo", element: <Termo /> },
        // Rota de fallback para 404 - importante para GitHub Pages
        { path: "*", element: <Home /> }
      ],
    },
  ],
  {
    basename: basename,
  }
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
