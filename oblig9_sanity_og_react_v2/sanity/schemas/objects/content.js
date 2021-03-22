const content = {
	name: 'content',
	title: 'Description',
	type: 'array',
	of: [
		{
			type: 'block',
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "H1", value: "h1" },
				{ title: "H2", value: "h2" },
				{ title: "H3", value: "h3" },
				{ title: "H4", value: "h4" },
				{ title: "Quote", value: "blockquote" },
			],
			marks: {
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Code", value: "code" },
				]
			}
		},
	],
}

export default content;