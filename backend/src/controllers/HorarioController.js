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
    },

    async horariosLocal(request, response){
        try {
            const { id_local } = request.body;
            const horarios = await connection('horarios').select('*').where('local', id_local);
            return response.json(horarios);
        } catch (error) {
            return response.json(error);
        }
    },

    async delete(request, response){
        try {
            const {id} = request.body;
            await connection('horarios').select('*').where('id', id).del();
            return response.json("Sucess!");
        } catch (error) {
            return response.json(error);
        }
    }
}
