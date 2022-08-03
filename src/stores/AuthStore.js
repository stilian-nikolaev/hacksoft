import { makeObservable, observable, action } from "mobx"

const TOKEN_ITEM_NAME = 'token';
const EXPIRESAT_ITEM_NAME = 'expiresAt';
const PROFILEID_ITEM_NAME = 'profileId';

function retrieveStoredToken() {
    const storedToken = localStorage.getItem(TOKEN_ITEM_NAME)
    const storedExpiresAt = localStorage.getItem(EXPIRESAT_ITEM_NAME)

    const remainingTime = storedExpiresAt - Date.now()
    console.log(remainingTime);
    if (remainingTime <= 60000) {
        localStorage.removeItem(TOKEN_ITEM_NAME)
        localStorage.removeItem(EXPIRESAT_ITEM_NAME)
        return null;
    }

    return { token: storedToken, remainingTime }
}

class AuthStoreImpl {
    tokenData = retrieveStoredToken()
    token = this.tokenData && this.tokenData.token
    isAuthenticated = !!(this.token)
    logoutTimer = null
    profileId = localStorage.getItem(PROFILEID_ITEM_NAME)

    constructor() {
        makeObservable(this, {
            token: observable,
            isAuthenticated: observable,
            login: action,
            logout: action,
            setprofileId: action,

        })

        if (this.tokenData) {
            this.logoutTimer = setTimeout(this.logout, this.tokenData.remainingTime)
        }
    }

    setprofileId = (id) => {
        this.profileId = id;
        localStorage.setItem(PROFILEID_ITEM_NAME, id)
    }

    login = (token, expiresIn = 3600) => {
        this.token = token;
        this.isAuthenticated = true;

        const remianingTimeInMilliseconds = expiresIn * 1000;

        localStorage.setItem(TOKEN_ITEM_NAME, token)
        localStorage.setItem(EXPIRESAT_ITEM_NAME, Date.now() + remianingTimeInMilliseconds)
        console.log(remianingTimeInMilliseconds);
        this.logoutTimer = setTimeout(this.logout, remianingTimeInMilliseconds)
    }

    logout = () => {
        this.token = null
        this.isAuthenticated = false;
        this.profileId = null

        localStorage.removeItem(TOKEN_ITEM_NAME)
        localStorage.removeItem(EXPIRESAT_ITEM_NAME)
        localStorage.removeItem(PROFILEID_ITEM_NAME)

        clearTimeout(this.logoutTimer)
    }
}

export const AuthStore = new AuthStoreImpl();