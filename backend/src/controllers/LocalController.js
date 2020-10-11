const connection = require('../database/connection.js');

module.exports = {
    async create(request, response){
        try {
            const {nome, endereco, cidade, uf, valor} = request.body;
            await connection('locais').insert({
                nome,
                endereco,
                cidade,
                uf,
                valor
            });
            return response.json('Sucess!');
        } catch (error) {
            return response.json(error);
        }
    },

    async list(request, response) {
        try {
            const locais = await connection('locais').select('*');
            return response.json(locais);
        } catch (error) {
            return response.json(error);
        }
    }
}
