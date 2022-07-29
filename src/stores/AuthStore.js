import { makeObservable, observable, action } from "mobx"

function retrieveStoredToken() {
    const storedToken = localStorage.getItem('token')
    const storedExpiresAt = localStorage.getItem('expiresAt')

    const remainingTime = storedExpiresAt - Date.now()
    console.log(remainingTime);
    if (remainingTime <= 60000) {
        localStorage.removeItem('token')
        localStorage.removeItem('expiresAt')
        return null;
    }

    return { token: storedToken, remainingTime }
}

class AuthStoreImpl {
    tokenData = retrieveStoredToken()
    token = this.tokenData && this.tokenData.token
    isAuthenticated = !!(this.token)
    logoutTimer = null

    constructor() {
        makeObservable(this, {
            token: observable,
            isAuthenticated: observable,
            login: action,
            logout: action,
        })

        if (this.tokenData) {
            this.logoutTimer = setTimeout(this.logout, this.tokenData.remainingTime)
        }
    }

    login = (token, expiresIn) => {
        this.token = token;
        this.isAuthenticated = true;

        const remianingTimeInMilliseconds = expiresIn * 1000;

        localStorage.setItem('token', token)
        localStorage.setItem('expiresAt', Date.now() + remianingTimeInMilliseconds)

        this.logoutTimer = setTimeout(this.logout, remianingTimeInMilliseconds)
    }

    logout = () => {
        this.token = null
        this.isAuthenticated = false;

        localStorage.removeItem('token')
        localStorage.removeItem('expiresAt')

        clearTimeout(this.logoutTimer)
    }
}

export const AuthStore = new AuthStoreImpl();