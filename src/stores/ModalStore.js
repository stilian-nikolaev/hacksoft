import { makeObservable, observable, action } from "mobx"

class ModalStoreImpl {
    open = false

    constructor() {
        makeObservable(this, {
            open: observable,
            openModal: action,
            closeModal: action,
        })
    }

    openModal = () => {
        this.open = true;
    }

    closeModal = () => {
        this.open = false;
    }

}

export const ModalStore = new ModalStoreImpl();