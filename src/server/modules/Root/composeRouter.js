const router = require('express').Router();
const universal = require('../Universal/controller');
const todos = require('../Todos/controller');


router.use(todos);
router.use(universal);

module.exports = router;
