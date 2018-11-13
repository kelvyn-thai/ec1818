const RootRouter = require('../Root/router');
const helper = require('./helper');

class UniversalRouter extends RootRouter {
    constructor() {
        super();

        this.router.get('/', this.handleServerSideRender.bind(this));
        return this.router;
    }

    handleServerSideRender(req, res, next) { 
        const title = "EC1818";
        const script = `<script type="text/javascript" src="bundle.js"></script>`
        return res.send(helper.renderTemplate(title, script));
    }

    static getUniversalRouter() {
        return new UniversalRouter();
    }
}

module.exports = UniversalRouter.getUniversalRouter();