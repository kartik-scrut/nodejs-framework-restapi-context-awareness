
class UserModel {

    constructor() {
        this.data = [
            {
                id: 1,
                name: 'foo'
            },
            {
                id: 2,
                name: 'boo'
            }
        ]
    }



    async findAll() {
        return Promise.resolve(this.data);
    }


    async findById(id) {
        return Promise.resolve(this.data.filter(x => x === id));
    }

}

module.exports = UserModel;