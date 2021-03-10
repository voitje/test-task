const keys = {
    token: 'token'
}

class LocaleStorage {

    static getItem() {
        return 'TOKEN'
    }

    static setItem(token) {
        localStorage.setItem(keys.token, token)
    }
}

export default LocaleStorage;