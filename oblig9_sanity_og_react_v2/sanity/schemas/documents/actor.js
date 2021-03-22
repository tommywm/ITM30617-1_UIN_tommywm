import { FaUser as icon } from 'react-icons/fa';

const actor = {
	name: 'actor',
	type: 'document',
	title: 'Actor',
	icon,
	fields: [
		{
			name: 'actor',
			type: 'string',
			title: 'Actor',
			description: 'This is the actor',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'character',
			type: 'string',
			title: 'Character',
			description: 'The character in the movie'
		},
	]
}

export default actor;