const axios = require('axios');


const getAi = async (message, API_KEY)=> {
    const apiUrl = 'https://api.openai.com/v1';
    const chatGpt35Endpoint = '/chat/completions';
    
    const data = {
        model: 'gpt-3.5-turbo',
        // max_tokens: 75,
        messages: [{
            role: 'user',
            content: message, 
        }]
    };
    
    const headers =  {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    };
    
    try {
        const res = await axios.post(apiUrl + chatGpt35Endpoint, data, {headers});
        return res.data;
    }
    catch(err) {
        console.error('error', err.message);
    }; 
};

module.exports = getAi;