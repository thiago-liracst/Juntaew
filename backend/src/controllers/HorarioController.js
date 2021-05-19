const connection = require('../database/connection.js');

async function validaLocal(localLogin){
    let response = false;
    const locais = await connection('locais').select('*');
    locais.map((local) => {
        if (local.login === localLogin) {
            response = true;
        }
    });
    return response;
}

module.exports = {
    async create(request, response){
        try {
            const {local, dia, inicio, fim} = request.body;
            if (await validaLocal(local)) {
                await connection('horarios').insert({
                    local,
                    dia,
                    inicio,
                    fim
                });
                return response.json('Sucess!');
            }else{
                throw Error("Local inválido")
            }
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
            const { local } = request.body;
            const horarios = await connection('horarios').select('*').where('local', local);
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
