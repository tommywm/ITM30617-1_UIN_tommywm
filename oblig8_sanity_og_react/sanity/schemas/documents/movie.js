const movie = {
	title: 'Movie',
	name: 'movie',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Tittel',
			description: 'Dette er tittelen',
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			description: 'Dette er den unike url-en',
			validation: (Rule) => Rule.required(),
			options: {
				source: 'title',
				maxLength: 96,
			}
		},
		{
			name: 'actor',
			type: 'reference',
			to: [{type: 'actor'}],
			title: 'Actor',
			description: 'Dette er skuespilleren',
		},
		{
			name: 'description',
			type: 'string',
			title: 'Description',
			description: 'Dette er handlingen',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
			description: 'Filmplakaten',
		},
	],
	preview: {
		select: {
			title: 'title',
			actor: 'actor.title',
		},
		prepare(selection) {
			const {title, actor} = selection;
			return {
				title,
				subtitle: `Actor: ${actor}`,
			}
		}
	}
}

export default movie; 