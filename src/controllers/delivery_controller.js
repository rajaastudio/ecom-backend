import CreateError from "http-errors"
import Delivery from "../models/delivery_model";
import DeliverySchema from "../schemas/delivery_schema";
import JsonSchemaValidator from '../utils/jsonSchemaValidator';

class DeliveryController {
	static async listDelivery(req, res, next) {
		 try{
            const options = {
                page: 1,
                limit: 10,
                
            };
            const Deliverys = await  Delivery.paginate({}, options, function(err, result) {
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

	static async createDelivery(req, res, next)  {   
        const { body } = req;
        try {
            const validator = JsonSchemaValidator.validate(body, DeliverySchema.addDelivery())
            if(!validator.valid){
                throw CreateError(400, JsonSchemaValidator.notValidate(validator.errors))
            }
            if(req.file != undefined && (req.file.filename != undefined && req.file.filename != '')){
	          body.photo = req.file.filename;
	        }
            const data = await Delivery.create(body, function(err, result) {
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

    static async updateDelivery(req, res, next)  {   
        const { body } = req;
        try {
            const validator = JsonSchemaValidator.validate(body, DeliverySchema.editDelivery())
            if(!validator.valid){
                throw CreateError(400, JsonSchemaValidator.notValidate(validator.errors))
            }
            if(req.file != undefined && (req.file.filename != undefined && req.file.filename != '')){
	          body.photo = req.file.filename;
	        }
	        const id = body._id;
            const data = await Delivery.findByIdAndUpdate(id, body, function(err, result) {
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

    static async deleteDelivery(req, res, next)  {  
        const _id = req.params.id;
        const { body } = req;
        const data = await Delivery.deleteOne({_id}, body, function(err, result) {
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

export default DeliveryController;
