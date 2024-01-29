// Importe os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');

// Crie uma instância do express
const app = express();

// Use o body-parser para facilitar o processamento de dados JSON
app.use(bodyParser.json());

// Endpoint para receber dados simulados de um sensor
app.post('/api/sensor-data', (req, res) => {
  // Simule a recepção dos dados do sensor
  const sensorData = req.body;

  // Aqui você pode processar os dados conforme necessário
  // Por exemplo, salvar em um banco de dados ou tomar decisões com base neles

  // Responda com uma mensagem indicando sucesso
  res.json({ message: 'Dados do sensor recebidos com sucesso!' });
});

// Endpoint para obter dados simulados para o frontend
app.get('/api/simulated-data', (req, res) => {
  // Simule dados de sensores para enviar ao frontend
  const simulatedData = {
    luminosity: Math.random() * 100,
    temperature: Math.random() * 30,
    // Adicione outros dados simulados conforme necessário
  };

  // Responda com os dados simulados
  res.json(simulatedData);
});

// Defina a porta em que o servidor irá escutar
const PORT = 3000;

// Inicie o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
