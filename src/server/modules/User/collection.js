const RootCollection = require('../Root/collection');
const schema = require('./schema');

class UserCollection extends RootCollection {

    constructor(){
        super();
        this.setModel('User', schema);
    }

    static getUserCollection() {
        return new UserCollection();
    }
}

module.exports = UserCollection.getUserCollection();