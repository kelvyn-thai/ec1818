const isEmail = require('validator/lib/isEmail');
const isLength = require('validator/lib/isLength')

module.exports = {
    validateAccount: function(req, res, next) {
        try {
            const {account, password} = req.body;
            if(!isEmail(account)){
                return res.json({
                    data: null,
                    error: true,
                    msg: 'Validate email fail!'
                })
            }
            else if(!isLength(password, 8, 64)){ 
                return res.json({
                    data: null,
                    error: true,
                    msg: 'Validate password fail!'
                })
            }else{ 
                next();
            }
        } catch (error) {
            return res.json({
                data: null,
                error: true,
                msg: 'Error validate!'
            })
        }
    }
}