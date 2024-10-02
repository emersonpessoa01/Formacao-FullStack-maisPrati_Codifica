const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rota para servir o index.html
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "public", "index.html"); // Caminho do arquivo HTML
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Erro ao carregar a página.");
      return;
    }
    res.send(data); // Envia o conteúdo do arquivo HTML
  });
});

// Rota para obter todos os produtos
app.get("/api/data", (req, res) => {
  const filePath = path.join(__dirname, "data.json"); // Caminho do arquivo JSON
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler o arquivo" });
    }
    const produtos = JSON.parse(data);
    res.json(produtos); // Retorna os dados em formato JSON
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
