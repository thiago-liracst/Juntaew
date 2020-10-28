const connection = require('../database/connection.js');

async function validaLocal(localId){
    let response = false;
    const locais = await connection('locais').select('*');
    locais.map((local) => {
        if (local.id === localId) {
            response = true;
        }
    });
    return response;
}

async function validaCriador(criador){
    let response = false
    const users = await connection('users').select('*');
    users.map((user) => {
        if (user.nick === criador) {
            response = true;
        }
    });
    return response;
}

async function validaHorario(dia, mes, inicio, fim){
    let response = true;
    const eventos = await connection('eventos').select('*');
    eventos.map((evento) => {
        if (evento.dia === dia && evento.mes === mes) {
            if (evento.inicio === inicio && evento.fim === fim) {
                response = false;
            }
        }
    });
    return response;
}

module.exports = {
    async create(request, response){
        try {
            const {
                criador,
                local,
                nome,
                dia,
                mes,
                inicio,
                fim,
                esporte,
                totalVagas
            } = request.body;
            const disponiveis = totalVagas-1;
            
            //console.log(validaCriador(criador))
            if (
                await validaCriador(criador) &&
                await validaLocal(local) &&
                await validaHorario(dia, mes, inicio, fim)
            ){
                await connection('eventos').insert({
                    criador,
                    local,
                    nome,
                    dia,
                    mes,
                    inicio,
                    fim,
                    esporte,
                    totalVagas,
                    disponiveis
                });

                return response.json("Sucesso!");
            }
            throw "Evento não disponível!";  
        } catch (error) {
            return response.json(error);
        }
    },

    async list(request, response){
        try {
            const eventos = await connection('eventos').select('*');
            return response.json(eventos);
        } catch (error) {
            return response.json(error);
        }
    },

    async delete(request, response){
        try {
            const {id} = request.body;
            await connection('eventos').where('id', id).del();
            return response.json("Sucess!");
        } catch (error) {
            return response.json(error);
        }
    },

    async preencherVaga(request, response){
        try {
            const {idEvento, disponiveis} = request.body;
            await connection('eventos').where('id', idEvento).update('disponiveis', disponiveis-1);
            return response.json("Sucess!");
        } catch (error) {
            return response.json(error);
        }
    }
}