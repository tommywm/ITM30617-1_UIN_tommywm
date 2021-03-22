import { MdLocalMovies as icon } from 'react-icons/Md';

const movie = {
	title: 'Movie',
	name: 'movie',
	type: 'document',
	icon,
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			description: 'This is the title',
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			description: 'This is the unique url',
			validation: (Rule) => Rule.required(),
			options: {
				source: 'title',
				maxLength: 96,
			}
		},
		{
			name: 'category',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{type: 'category'}],
				}
			],
			title: 'Category',
		},
		{
			name: 'actor',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{ type: 'actor' },
					]
				}
			],
			title: 'Actor',
			description: 'This is the actor(s)',
		},
		{
			name: 'description',
			type: 'content',
			title: 'Description',
			description: 'This is the plot',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Poster',
			description: 'Movie poster',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'seen',
			type: 'boolean',
			title: 'Seen',
			description: 'Have you seen this movie?'
		},
		{
			name: 'favorite',
			type: 'boolean',
			title: 'Favorite',
			description: 'Add this movie to your favorites',
			options: {
				layout: 'checkbox',
			},
		},	
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
			favorite: 'favorite',
			category0: 'category.0.category',
			category1: 'category.1.category',
			category2: 'category.2.category',
			category3: 'category.3.category',
		},
		prepare: ({title, media, favorite, ...category}) => {
		const categories = Object.values(category).filter(Boolean);
		
		return {
				title: `${title} ${favorite ? '⭐' : ''}`,
				media,
				subtitle: categories.join(', '),
		};
	}
	}
}

export default movie; 