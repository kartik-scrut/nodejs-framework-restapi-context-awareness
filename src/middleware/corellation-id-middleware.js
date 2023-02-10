
const { v4: uuidv4 } = require('uuid');


const { context } = require('../core/async-context')


module.exports.corellationMiddleware = async (req, res, next) => {

    const ctx = context.getStore();
    ctx.set('x-org-requestid', uuidv4());
    ctx.set('tenant-id', uuidv4());

    next();
};
