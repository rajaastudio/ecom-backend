class ProductSchema {
	static addProduct() {
		return {
			type: "object",
			properties: {
				name: { type: 'string'},
				images: { type: 'string'},
				// reference: { type: 'string'},
				// category: { type: 'string'},
				price: { type: 'string'},
				// taxexcl: { type: 'string'},
				// taxincl: { type: 'string'},
				// taxrule: { type: 'string'},
				// quantity: { type: 'string'},
				status: { type: 'string'}
			},
			required: ['name',]
		};

	}
	static editProduct() {
		return {
			type: "object",
			properties: {
				_id: { type: 'string'},
				name: { type: 'string'},
				images: { type: 'string'},
				// reference: { type: 'string'},
				// category: { type: 'string'},
				price: { type: 'string'},
				// taxexcl: { type: 'string'},
				// taxincl: { type: 'string'},
				// taxrule: { type: 'string'},
				// quantity: { type: 'string'},
				status: { type: 'string'}
			},
			required: ['_id',]
		};

	}
		
}

export default ProductSchema;