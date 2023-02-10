const userRepository = require('../repositories/user')
const { context, get } = require('../core/async-context')


async function getUsers() {
    const ctx = context.getStore();
    console.log('layer: [Service] tenant-id :', ctx.get('tenant-id'));

    return userRepository.getAllUsers();
}

module.exports = { getUsers }
