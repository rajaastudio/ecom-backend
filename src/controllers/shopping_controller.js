import CreateError from "http-errors"
import Shopping from "../models/shopping_model";
import ShoppingSchema from "../schemas/shopping_schema";
import JsonSchemaValidator from '../utils/jsonSchemaValidator';

class ShoppingController {
	static async listShopping(req, res, next) {
		 try{
            const options = {
                page: 1,
                limit: 10,
                
            };
            const Shoppings = await  Shopping.paginate({}, options, function(err, result) {
                if(err){
                    console.log("Error ", err)
                }
                if(result) {
                    const response = {
                      "statusCode": 200,
                      "message":  "Data Found",
                      "data": result.docs,
                      "totalDocs": result.totalDocs || '',
                      "limit": result.limit || '',
                      "totalPages": result.totalPages || '',
                      "page": result.page || '',
                      "pagingCounter": result.pagingCounter || '',
                      "hasPrevPage": result.hasPrevPage || '',
                      "hasNextPage": result.hasNextPage || '',
                      "prevPage": result.prevPage || '',
                      "nextPage": result.nextPage || ''
                   };
                   res.json(response);
                }
                
            }); 
        }catch(err){
            res.json({message:err});
        }
	}

	static async createShopping(req, res, next)  {   
        const { body } = req;
        try {
            const validator = JsonSchemaValidator.validate(body, ShoppingSchema.addShopping())
            if(!validator.valid){
                throw CreateError(400, JsonSchemaValidator.notValidate(validator.errors))
            }
            if(req.file != undefined && (req.file.filename != undefined && req.file.filename != '')){
	          body.photo = req.file.filename;
	        }
            const data = await Shopping.create(body, function(err, result) {
                const response = {
                    "statuscode": 200,
                    "message": "Create Successfull",
                    "data": result
                }
                if(!err)
                    res.status(200).json(response)
                 else{
                    next(err,response)
                }
            });   
        }catch(err){
            next(err);
        }
    };

    static async updateShopping(req, res, next)  {   
        const { body } = req;
        try {
            const validator = JsonSchemaValidator.validate(body, ShoppingSchema.editShopping())
            if(!validator.valid){
                throw CreateError(400, JsonSchemaValidator.notValidate(validator.errors))
            }
            if(req.file != undefined && (req.file.filename != undefined && req.file.filename != '')){
	          body.photo = req.file.filename;
	        }
	        const id = body._id;
            const data = await Shopping.findByIdAndUpdate(id, body, function(err, result) {
                const response = {
                    "statuscode": 200,
                    "message": "Update Successfull",
                    "data": result
                }
                if(!err)
                    res.status(200).json(response)
                 else{
                    next(err,response)
                }
            });   
        }catch(err){
            next(err);
        }
    };

    static async deleteShopping(req, res, next)  {  
        const _id = req.params.id;
        const { body } = req;
        const data = await Shopping.deleteOne({_id}, body, function(err, result) {
            const response = {
                "statuscode": 200,
                "message": "Delete Successfull",
            }
            if(!err){
                res.status(200).json(response)
            }else {
                console.log("error",err)
                res.json({message:err})
            }
        })
    }
}

export default ShoppingController;
