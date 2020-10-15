const connection = require('../database/connection.js');

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
            if (
                validaCriador(criador) && 
                validaLocal(local) && 
                validaHorario(local, dia, mes, inicio, fim)) {
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
            } else {
                throw new Error("Campos inválidos!");
            }
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

    async validaCriador(criador){
        let resposta = false;
        const users = await connection('users').select('*');
        eventos.map((user) => {
            if (user.nick === criador) {
                resposta = true;
            }
        });
        return resposta;
    },

    async validaLocal(local){
        let resposta = false;
        const locais = await connection('locais').select('*');
        eventos.map((local) => {
            if (local.nome === local) {
                resposta = true;
            }
        });
        return resposta;
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