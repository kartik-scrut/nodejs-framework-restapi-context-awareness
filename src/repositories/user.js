
const UserModel = require('../models/user')
const { context } = require('../core/async-context')

async function getAllUsers() {

    const ctx = context.getStore();
    console.log('layer: [Repositories] tenant-id :', ctx.get('tenant-id'));

    const userModel = new UserModel();
    return userModel.findAll();
}


module.exports = {
    getAllUsers
}