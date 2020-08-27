import UserController from '../controllers/user_controller';
import RoleController from '../controllers/role_controller';
import CategoryController from '../controllers/category_controller';
import ProductController from '../controllers/product_controller';
import DeliveryController from '../controllers/delivery_controller';
import InvoiceController from '../controllers/invoice_controller';
import OrderController from '../controllers/order_controller';
import ShoppingController from '../controllers/shopping_controller';

import express from 'express';
import multer from 'multer';
import path from 'path';
const router =express.Router();

var UserStorage = multer.diskStorage(
    {    	
    	destination : path.join(__dirname, '../../public/Photo'),
        filename: function ( req, file, cb ) {
        	// cb( null, path.basename(file.originalname) + '-' + Date.now() + path.extname(file.originalname));
        	cb( null, path.basename(file.originalname) );
        }
    }
);
const UserUpload = multer({storage: UserStorage, fileFilter: function (req, file, cb) {
	// var filetypes = /jpeg|jpg|png/;
	// var mimetype = filetypes.test(file.mimetype);
	var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
       if(file.mimetype === 'image/jpeg') {
        filetype = 'jpeg';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      // var mimetype = filetype.test(file.mimetype);
	// var extname = filetype.test(path.extname(file.originalname).toLowerCase());
	if (file.mimetype) {
	  return cb(null, true);
	}
	cb("Error: File upload only supports the following filetypes - " + filetypes);
}});

var productStorage = multer.diskStorage(
    {       
        destination : path.join(__dirname, '../../public/image'),
        filename: function ( req, file, cb ) {
          
            cb( null, path.basename(file.originalname) + '-' + Date.now() + path.extname(file.originalname));
        }
    }
);
const productUpload = multer({storage: productStorage, fileFilter: function (req, file, cb) {
    // var filetypes = /jpeg|jpg|png/;
    // var mimetype = filetypes.test(file.mimetype);
    var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
       if(file.mimetype === 'image/jpeg') {
        filetype = 'jpeg';
      }
      if(file.mimetype === 'image/jpg') {
        filetype = 'jpg';
      }
      // var mimetype = filetype.test(file.mimetype);
    // var extname = filetype.test(path.extname(file.originalname).toLowerCase());
    if (file.mimetype) {
      return cb(null, true);
    }
    cb("Error: File upload only supports the following filetypes - " + filetypes);
}});

//User Controller
router.route('/user')
	.get(UserController.listUser)
	.post(UserUpload.single('photo'),UserController.createUser)
	.put(UserUpload.single('photo'),UserController.updateUser)

router.route('/user/:id')
	.delete(UserController.deleteUser)

//Role Controller

router.route('/role')
  .get(RoleController.listRole)
  .post(RoleController.createRole)
  .put(RoleController.updateRole)

router.route('/role/:id')
  .delete(RoleController.deleteRole)

//Category Controller

router.route('/category')
  .get(CategoryController.listCategory)
  .post(CategoryController.createCategory)
  .put(CategoryController.updateCategory)

router.route('/category/:id')
  .delete(CategoryController.deleteCategory)

//Product Controller

router.route('/product')
  .get(ProductController.listProduct)
  .post(productUpload.single('image'),ProductController.createProduct)
  .put(productUpload.single('image'),ProductController.updateProduct)

router.route('/product/:id')
  .delete(ProductController.deleteProduct)

//Delivery Controller

router.route('/delivery')
  .get(DeliveryController.listDelivery)
  .post(DeliveryController.createDelivery)
  .put(DeliveryController.updateDelivery)

router.route('/delivery/:id')
  .delete(DeliveryController.deleteDelivery)


//Invoice Controller

router.route('/invoice')
  .get(InvoiceController.listInvoice)
  .post(InvoiceController.createInvoice)
  .put(InvoiceController.updateInvoice)

router.route('/invoice/:id')
  .delete(InvoiceController.deleteInvoice)


//Order Controller

router.route('/order')
  .get(OrderController.listOrder)
  .post(OrderController.createOrder)
  .put(OrderController.updateOrder)

router.route('/order/:id')
  .delete(OrderController.deleteOrder)

//Shopping Controller

router.route('/shopping')
  .get(ShoppingController.listShopping)
  .post(ShoppingController.createShopping)
  .put(ShoppingController.updateShopping)

router.route('/shopping/:id')
  .delete(ShoppingController.deleteShopping)

export default router;