const connection = require('../database/connection.js');

module.exports = {
    async create(request, response){
        try {
            const {local, dia, inicio, fim} = request.body;
            await connection('horarios').insert({
                local,
                dia,
                inicio,
                fim
            });
            return response.json('Sucess!');
        } catch (error) {
            return response.json(error);
        }
    },

    async list(request, response) {
        try {
            const horarios = await connection('horarios').select('*');
            return response.json(horarios);
        } catch (error) {
            return response.json(error);
        }
    }
}
