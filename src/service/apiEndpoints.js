export const endpoints = {
    posts: {
        all: () => ({ url: '/posts.json' }),
        one: slug => ({ url: `/posts/${slug}.json` })
    },
}