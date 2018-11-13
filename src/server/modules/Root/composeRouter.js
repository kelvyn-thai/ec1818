const router = require('express').Router();
const universalRouter = require('../Universal/router');
const userRouter = require('../User/router');
const categoryRouter = require('../Category/router');


router.use(userRouter);
router.use(categoryRouter);
router.use(universalRouter);

module.exports = router;
