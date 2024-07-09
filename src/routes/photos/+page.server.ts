export const load = async () => {
    const images = import.meta.glob('../../../static/images/original/*', {
        query: {
            enhanced: true
        }
    });

    return {
        images: Object.keys(images).map((path) => {
            return {
                name: path.split('/').pop()
            }
        })
    }
}

export const prerender = true;