const fs = require('fs');
const axios = require('axios');
const path = require('path');

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => {
    const jsonData = response.data;

    const jsonString = JSON.stringify(jsonData, null, 2);

    const docsDir = 'docs';
    const filePath = path.join(docsDir, 'ditto.json');

    fs.writeFile(filePath, jsonString, err => {
      if (err) {
        console.error('Error al escribir el archivo JSON:', err);
        return;
      }
      console.log('El archivo JSON se ha creado correctamente.');
    });
  }).catch(error => {
    console.log('Error del servicio: ', error);
  });