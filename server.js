const express = require('express');
const app = express();

app.use(express.json());

const { v4: uuidv4 } = require('uuid');
let pets = [];


app.get('/', (req, res) => {
    res.json({ message: "Central Pet API funcionando!" });
});

const calcularDiarias = (dataEntrada) => {
    const today = new Date();
    const entrada = new Date(dataEntrada);
    const diffTime = today - entrada;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
};

const calcularDiariasTotais = (dataEntrada, dataSaida) => {
    const entrada = new Date(dataEntrada);
    const saida = new Date(dataSaida);
    const diffTime = saida - entrada;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

app.post('/adicionar-pet', (req, res) => {
    const { tutor, contato, especie, raca, dataEntrada, dataSaida } = req.body;
    if (!tutor || !contato || !especie || !raca || !dataEntrada || !dataSaida) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
    }

    const diariasAtuais = calcularDiarias(dataEntrada);
    const diariasTotais = calcularDiariasTotais(dataEntrada, dataSaida);

    console.log({ tutor, contato, especie, raca, dataEntrada, dataSaida });
    res.json({ 
        message: "Pet adicionado com sucesso!", 
        data: {
            id: uuidv4(),
            tutor,
            contato,
            especie,
            raca,
            dataEntrada,
            dataSaida,
            diariasAtuais,
            diariasTotais
        } 
    });
    
    pets.push(novoPet);
});

app.put('/editar-pet/:id', (req, res) => {
    const { id } = req.params;
    const { tutor, contato, especie, raca, dataEntrada, dataSaida } = req.body;
  
    const petIndex = pets.findIndex(pet => pet.id === id);
    if (petIndex !== -1) {
      pets[petIndex] = {
        ...pets[petIndex],
        tutor,
        contato,
        especie,
        raca,
        dataEntrada,
        dataSaida,
        diariasAtuais: calcularDiarias(dataEntrada),
        diariasTotais: calcularDiariasTotais(dataEntrada, dataSaida),
      };
      return res.json({ message: "Pet editado com sucesso", data: pets[petIndex] });
    } else {
      return res.status(404).json({ error: "Pet não encontrado" });
    }
  });
  
  app.delete('/excluir-pet/:id', (req, res) => {
    const { id } = req.params;
    pets = pets.filter(pet => pet.id !== id);

    return res.json({ message: `Pet com ID ${id} excluído com sucesso!` });
});

  

const port = 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
