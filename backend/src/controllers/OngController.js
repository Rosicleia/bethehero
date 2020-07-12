//Pacote que cria string aleatoria (estou usando no id da Ong)
const crypto = require ('crypto');
const connection = require ('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs = await connection ('ongs').select ('*');

     return response.json(ongs);
    
    },

    async create (request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        //Cria uma String com 4 caracteres aleatorios em hexadecimal
        const id = crypto.randomBytes(4).toString('HEX')

        await connection ('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
  
        //Response: Retorna uma resposta para o usuário em formato JSON
        return response.json({ id });
    }    
};