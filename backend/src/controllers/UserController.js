const { create } = require('../../../../PermutEi-Backend/src/controllers/UsersController.js');
const connection = require('../database/connection.js');

module.exports = {
    async create(request, response){
        try {
            const {} = request.body;
            await connection('users').insert({

            });
            return response.json('Sucess!');
        } catch (error) {
            return response.json(error);
        }
    }
}