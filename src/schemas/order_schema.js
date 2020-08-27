class OrderSchema {
	static addOrder() {
		return {
			type: "object",
			properties: {
				customer: { type: 'string'},
				total: { type: 'string'},
			},
			required: ['customer']
		};

	}
	static editOrder() {
		return {
			type: "object",
			properties: {
				_id: { type: 'string'},
				customer: { type: 'string'},
				total: { type: 'string'},
			},
			required: ['_id']
		};

	}
		
}

export default OrderSchema;