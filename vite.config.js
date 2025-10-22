import { defineConfig } from "vite";

export default defineConfig({
  base: "/ayanda-digital-media/",
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        sobre: "src/pages/sobre.html",
        servicos: "src/pages/servicos.html",
        contactos: "src/pages/contactos.html",
        politica_privacidade: "src/pages/politica-privacidade.html",
        termos_condicoes: "src/pages/termos-condicoes.html",
      },
    },
  },
  server: {
    open: "/index.html",
  },
});
