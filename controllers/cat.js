

const getAi = require('../utils/getAi');
const API_KEY = process.env.API_KEY


const sendCat = async (request, response)=> {
    const {message} = request.body;
    const answer = await getAi(message, API_KEY);
    if(!answer) return response.status(404);

    response.status(200).json({success: true, answer: answer.choices[0].message});
};


module.exports = sendCat;