import { FaTheaterMasks as icon } from 'react-icons/fa';

const category = {
	name: 'category',
	type: 'document',
	title: 'Category',
	icon,
	fields: [
		{
			name: 'category',
			type: 'string',
			title: 'Category',
			validation: (Rule) => Rule.required(),
		},
	]
}

export default category;