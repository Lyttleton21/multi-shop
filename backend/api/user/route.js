const $userController = require('./controller');

exports.userRoutes = (app) => {
    app.post('/api/signup', $userController.userController.signUp);
    app.post('/api/sign-in', $userController.userController.loginUser)
    app.get('/api/refeashToken/:id', $userController.userController.REFEASH_TOKEN);
    app.get('/api/delete', $userController.userController.deleteAccount);
}
