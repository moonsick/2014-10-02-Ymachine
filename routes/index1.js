var express = require('express');
var router1 = express.Router()
    , board = require('./controllers/boardDAO');


/* GET home page. */

router1.get('/main1', function(req, res) {
    res.render('machine/machine_jade/043-1_S_main1_machine', { title: 'machine' });
});

router1.get('/intro1', function(req, res) {
    res.render('machine/machine_jade/043-1_S_co_intro1_machine', { title: 'machine' });
});

router1.get('/product_List11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_List1_machine', { title: 'machine' });
});

router1.get('/product_List12', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_List2_machine', { title: 'machine' });
});

router1.get('/customer_Write11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_Write1_machine', { title: 'machine' });
});

router1.get('/directions11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_co_directions1_machine', { title: 'machine' });
});

router1.get('/product1_View11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product1_View1_machine', { title: 'machine' });
});

router1.get('/customer_write11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_Write1_machine', { title: 'machine' });
});


router1.get('/customer_write13', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_Write3_machine', { title: 'machine' });
});


router1.get('/notice_List11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_notice_List1_machine', { title: 'machine' });
});

router1.get('/notice_view11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_notice_view1_machine', { title: 'machine' });
});

router1.get('/notice_write11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_notice_write1_machine', { title: 'machine' });
});




router1.get('/product_Write11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_Write1_machine', { title: 'machine' });
});


router1.get('/product_View12', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_View2_machine', { title: 'machine' });
});


router1.get('/product_CategoryMod12', function(req, res) {
    res.render('machine/machine_jade/043-1_S_product_CategoryMod2_machine', { title: 'machine' });
});


router1.get('/sitemap11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_sitemap1_machine', { title: 'machine' });
});

router1.get('/customer_List11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_List1_machine', { title: 'machine' });
});
router1.get('/customer_View11', function(req, res) {
    res.render('machine/machine_jade/043-1_S_customer_View1_machine', { title: 'machine' });
});



router1.post('/getlist', board.list);

router1.post('/getboard', board.get);

router1.post('/notice_write11', board.insert);



router1.get('/test', function(req, res) {
    res.render('test', { title: 'machine' });
});
module.exports = router1;
