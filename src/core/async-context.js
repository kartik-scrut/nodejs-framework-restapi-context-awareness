const { AsyncLocalStorage } = require("async_hooks");


const context = new AsyncLocalStorage();


function get(key) {
    if (!key) {
        throw new Error('argument key is required');
    }

    const ctx = context.getStore();
    if (ctx instanceof Map && ctx.size > 0) {
        return ctx.get(key);
    }
    else
        null;

}

function set(key, value) {
    if (!key) {
        throw new Error('argument key is required');
    }
    const ctx = context.getStore();
    if (ctx instanceof Map) {
        return ctx.set(key, value);
    }
    else
        null;

}


module.exports = {
    context,
    get, set
};