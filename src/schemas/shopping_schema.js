class ShoppingSchema {
	static addShopping() {
		return {
			type: "object",
			properties: {
				order: { type: 'string'},
				customer: { type: 'string'},
				total: { type: 'string'},
				carrier: { type: 'string'},
				status: { type: 'string'},
			},
			required: ['order','customer']
		};

	}
	static editShopping() {
		return {
			type: "object",
			properties: {
				_id: { type: 'string'},
				order: { type: 'string'},
				customer: { type: 'string'},
				total: { type: 'string'},
				carrier: { type: 'string'},
				status: { type: 'string'},
			},
			required: ['_id']
		};

	}
		
}

export default ShoppingSchema;