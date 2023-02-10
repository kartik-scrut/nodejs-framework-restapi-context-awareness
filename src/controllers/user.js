const userService = require('../services/user')
const { context } = require('../core/async-context')


async function getUsers(req, res) {

    const ctx = context.getStore();
    console.log('layer: [Controller] tenant-id :', ctx.get('tenant-id'));

    const data = await userService.getUsers();
    res.send(data);
}


module.exports = {
    getUsers
}