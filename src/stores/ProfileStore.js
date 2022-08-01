import { makeObservable, observable, action } from "mobx"

class ProfileStoreImpl {
    profileId = null

    constructor() {
        makeObservable(this, {
            profileId: observable,
            setprofileId: action
        })
    }

    setprofileId = (id) => {
        this.profileId = id;
    }
}

export const ProfileStore = new ProfileStoreImpl();