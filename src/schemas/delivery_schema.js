class DeliverySchema {
	static addDelivery() {
		return {
			type: "object",
			properties: {
				deliveryprefix: { type: 'string'},
				deliveryno: { type: 'string'},
			},
		};

	}
	static editDelivery() {
		return {
			type: "object",
			properties: {
				_id: { type: 'string' },
				deliveryprefix: { type: 'string'},
				deliveryno: { type: 'string'},
			},
			required: ['_id']
		};

	}
		
}

export default DeliverySchema;