const connection = require('../database/connection.js');

module.exports = {
    async create(request, response){
        try {
            const {nome, endereco, cidade, uf, valor, login, senha} = request.body;
            await connection('locais').insert({
                nome,
                endereco,
                cidade,
                uf,
                valor,
                login,
                senha
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
    },

    async getLocal(request, response) {
        try {
            const { login } = request.body;
            const local = await connection('locais').select('*').where('login', login).first();
            return response.json(local);
        } catch (error) {
            return response.json(error);
        }
    },

    async login(request, response) {
        try {
            const {login, senha} = request.body;
            const locais = await connection('locais').select('*');
            let resp = false;
            for (let index = 0; index < locais.length; index++) {
                if (locais[index].login === login && locais[index].senha === senha) {
                    resp = true;
                }
            }
            return response.json(resp);
        } catch (error) {
            return response.json(error);
        }
    }
}
