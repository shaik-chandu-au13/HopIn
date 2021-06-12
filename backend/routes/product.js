const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

const { getProducts, newProduct } = require('../controllers/productController')

router.route('/products').get(isAuthenticatedUser,getProducts);
router.route('/product/new').post(newProduct);


module.exports = router;
