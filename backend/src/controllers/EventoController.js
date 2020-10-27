const connection = require('../database/connection.js');

async function validaLocal(localId){
    const locais = await connection('locais').select('*');
    locais.map((local) => {
        if (local.id === localId) {
            return true;
        }
    });
    return false;
}

async function validaCriador(criador){
    const users = await connection('users').select('*');
    users.map((user) => {
        if (user.nick === criador) {
            return true;
        }
    });
    return false;
}

async function validaHorario(dia, mes, inicio, fim){
    const eventos = await connection('eventos').select('*');
    eventos.map((evento) => {
        if (evento.dia === dia && evento.mes === mes) {
            if (evento.inicio === inicio && evento.fim === fim) {
                console.log(evento.dia + ' ' + evento.mes);
                return false;
            }
        }
    });
    return true;
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

            if (validaCriador(criador)
            
             && validaLocal(local)
            && validaHorario(dia, mes, inicio, fim)
            
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
            throw new Error("Campos inválidos");     
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
            return response.json("Sucess!")
        } catch (error) {
            return response.json(error);
        }
    },

    async validaCriador(criador){
        
    },

    

    async validaHorario(local, dia, mes, inicio, fim){
        let resposta = true;
        const horarios = await connection('horarios').select('*');
        horarios.map((horario) => {
            if (horario.local===local) {
                if (horario.dia === dia) {
                    if (parseInt(horario.inicio)>=inicio || parseInt(horario.fim)<fim) {
                        resposta = false;
                    }
                }
            }
        });
        return resposta;
    }
}