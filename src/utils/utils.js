
class Utils {

    static checkPhone = (str) => {
        return !!str.match('^((\\+7|7|8)+([0-9]){10})$');
    }

    static checkNumber = (str) => {
        return !!str.match('^([1-9][0-9][0-9]?|1000)$')
    }
}

export default Utils;
