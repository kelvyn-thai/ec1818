const RootController = require('../Root/controller');
const middleware = require('./middleware');
const Todos = require('./model');



class TodosController extends RootController {
    constructor() {
        super();
        this.router.post('/api/todos/find', this.hanldeFindTodos.bind(this));
        this.router.post('/api/todos/add-todo', this.hanldeAddTodo.bind(this));
        this.router.post('/api/todos/remove-todo', this.handleRemoveTodo.bind(this));
        return this.router;
    }

    async handleRemoveTodo(req, res, next) {
        
    }

    async hanldeAddTodo(req, res, next) { 

    }

    async hanldeFindTodos(req, res, next) {

        try {
            const conditions = req.body.conditions || {};
            const projection = req.body.projection || '';
            const options = req.body.options || {};

            const docs = await Todos.find(conditions, projection, options);

            return res.json({
                payload: docs,
                msg: 'Get list todos success',
                error: false
            })
        } catch (error) {
            return res.json({
                payload: null,
                msg: 'Get list todos fail',
                error: true
            })            
        }
    }


    static getTodosController() {
        return new TodosController();
    }


}


module.exports = TodosController.getTodosController();