const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Importa o CORS

const app = express();
const PORT = process.env.PORT || 3000;
// Carregar variáveis de ambiente
// require("dotenv").config();

// app.get("/api/emailjs-credentials", (req, res) => {
//   res.json({
//     serviceId: process.env.EMAILJS_SERVICE_ID,
//     templateId: process.env.EMAILJS_TEMPLATE_ID,
//     userId: process.env.EMAILJS_USER_ID,
//   });
// });

// Middleware para habilitar CORS
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE");
  res.header("Access-Control-Allow-Headers", "x-PINOTHER", "Content-Type", "Authorization");
  app.use(cors());
  next();
});

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
