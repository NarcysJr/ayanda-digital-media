import { defineConfig } from "vite";

export default defineConfig({
  base: "/ayanda-digital-media/",
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        sobre: "sobre.html",
        servicos: "servicos.html",
        contactos: "contactos.html",
        politica_privacidade: "politica-privacidade.html",
        termos_condicoes: "termos-condicoes.html",
      },
    },
  },
  server: {
    open: "/index.html",
  },
});
