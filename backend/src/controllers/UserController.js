const connection = require('../database/connection.js');

module.exports = {
    async create(request, response){
        try {
            const {nome, email, nick, senha} = request.body;
            await connection('users').insert({
                nick,
                senha,
                nome,
                email
            });
            return response.json('Sucess!');
        } catch (error) {
            return response.json(error);
        }
    },

    async list(request, response) {
        try {
            const users = await connection('users').select('*');
            return response.json(users);
        } catch (error) {
            return response.json(error);
        }
    },

    async login(request, response){
        try {
            const {nick, senha} = request.body;
            const users = await connection('users').select('*');
            let resp = false;
            for (let index = 0; index < users.length; index++) {
                if (users[index].nick === nick && users[index].senha === senha) {
                    resp = true;
                }
            }
            return response.json(resp);
        } catch (error) {
            return response.json(error);
        }
    }
}
