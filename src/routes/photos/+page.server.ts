export const load = async () => {
	const images = import.meta.glob('../../lib/photography/*', {
		query: {
			as: 'run'
		},
		import: 'default',
		eager: true
	});

	return {
		images
	};
};

export const prerender = true;
