// backend/scraper.js
// Script de scraping (exemplo)

const axios = require('axios');

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Exemplo de uso
// fetchData('https://exemplo.com');
