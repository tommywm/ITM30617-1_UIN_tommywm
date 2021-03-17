const actor = {
	title: 'Actor',
	name: 'actor',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Actor',
			description: 'Dette er skuespilleren',
			validation: (Rule) => Rule.required(),
		},
	]
}

export default actor;