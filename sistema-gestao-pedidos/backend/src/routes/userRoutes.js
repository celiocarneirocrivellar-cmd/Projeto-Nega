const authMiddleware = require('../middlewares/authMiddleware');

router.get('/profile', authMiddleware, (req, res) => {
    res.json({
        message: 'Rota protegida acessada!',
        user: req.user
    });
});