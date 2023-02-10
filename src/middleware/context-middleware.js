
const { context } = require('../core/async-context')


module.exports.contextMiddleware = (req, res, next) => {
    const store = new Map();
    return context.run(store, next);
};
