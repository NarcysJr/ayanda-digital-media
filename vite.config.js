import { defineConfig } from "vite";

export default defineConfig({
  base: "/ayanda-digital-media/",
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        sobre: "src/sobre.html",
        servicos: "src/servicos.html",
        contactos: "src/contactos.html",
        politica_privacidade: "src/politica-privacidade.html",
        termos_condicoes: "src/termos-condicoes.html",
      },
    },
  },
  server: {
    open: "/index.html",
  },
});
