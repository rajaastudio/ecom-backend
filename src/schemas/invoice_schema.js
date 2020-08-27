class InvoiceSchema {
	static addInvoice() {
		return {
			type: "object",
			properties: {
				// enableInvoice: { type: 'string'},
				invoiceprefix: { type: 'string'},
				invoiceno: { type: 'string'},
				footerText: { type: 'string'},
			},
			required: ['footerText']
		};

	}
	static editInvoice() {
		return {
			type: "object",
			properties: {
				_id: { type: 'string'},
				// enableInvoice: { type: 'string'},
				invoiceprefix: { type: 'string'},
				invoiceno: { type: 'string'},
				footerText: { type: 'string'},
			},
			required: ['_id']
		};

	}
		
}

export default InvoiceSchema;