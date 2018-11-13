const RootRouter = require('../Root/router');
const middleware = require('./middleware');
const User = require('./collection');
const isEmpty = require('lodash/isEmpty');

class UserRouter extends RootRouter {
    constructor() {
        super();
        this.router.post('/user/api/login', middleware.validateAccount, this.handleApiLogin.bind(this));
        this.router.post('/user/api/register', this.handleApiRegister.bind(this));
        this.router.post('/user/api/find', this.hanldeApiGetAllUsers.bind(this));
        return this.router;
    }

    async hanldeApiGetAllUsers(req, res, next) {

        try {
            const conditions = req.body.conditions || {};
            const projection = req.body.projection || '';
            const options = req.body.options || {};
            const docs = await User.find(conditions, projection, options);
            return res.json({
                payload: docs,
                msg: 'Fetch api users success',
                error: false
            })
        } catch (error) {
            return res.json({
                payload: null,
                msg: 'Fetch api users fail',
                error: true
            })
        }
    }


    async handleApiRegister(req, res, next) {

        try {

            const data = {
                email: req.body.email,
                password: req.body.password
            }

            const doc = await User.save(data);

            return res.json({
                payload: doc,
                error: false,
                msg: 'Add user success!'
            });
        } catch (error) {
            return res.json({
                payload: null,
                error: true,
                msg: 'Add user fail'
            })
        }
    }
    
    handleApiLogin(req, res, next) {
        return res.json({
            data: [],
            error: false,
            msg: 'Fetch api success'
        })
    }
    static getUserRouter() {
        return new UserRouter();
    }
}

module.exports = UserRouter.getUserRouter();