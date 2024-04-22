module.exports = (router) => {
    var {
        get_list,
        get_detail,
        add_ordercar,
        remove_ordercar,
        update_ordercar,
    } = require('../controllers/OrderCarController');

    router.get('/api/ordercar', get_list);

    router.get('/api/ordercar/:id', get_detail);

    router.post('/api/ordercar', add_ordercar);

    router.delete('/api/ordercar/:id', remove_ordercar);

    router.put('/api/ordercar/:id', update_ordercar);
};
