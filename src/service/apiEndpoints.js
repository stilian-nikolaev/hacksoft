const API_KEY = 'AIzaSyDtQEiPRQr7b4THoPZWSvRNaPbVSKq0x_U'

export const endpoints = {
    posts: {
        all: () => ({ url: '/posts.json' }),
        one: slug => ({ url: `/posts/${slug}.json` })
    },
    auth: {
        login: () => ({ url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`})
    }
}