const RootRouter = require('../Root/router');


class CategoryRouter extends RootRouter {
    constructor(){
        super();
        this.router.get('/category/api/find', this.handleFindCategories.bind(this));
        return this.router;
    }

    handleFindCategories(req, res, next) {
        return res.json({
            data: [],
            error: false,
            msg: 'Get list category success'
        })
    }

    static getCategoryRouter() {
        return new CategoryRouter();
    }
}

module.exports = CategoryRouter.getCategoryRouter();