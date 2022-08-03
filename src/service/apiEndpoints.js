//usually in a .env file, not stored here
const API_KEY = 'AIzaSyDtQEiPRQr7b4THoPZWSvRNaPbVSKq0x_U'

export const endpoints = {
    posts: {
        all: () => ({ url: '/posts.json' }),
        one: slug => ({ url: `/posts/${slug}.json` })
    },
    profiles: {
        all: () => ({ url: '/profiles.json' }),
        one: slug => ({ url: `/profiles/${slug}.json` }),
        image: slug => ({ url: `/profiles/${slug}/imageURL.json` })
    },
    auth: {
        login: () => ({ url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}` }),
        register: () => ({ url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`}),
    }
}