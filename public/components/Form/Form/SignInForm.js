import Form from './Form'

export default class SignInForm extends Form {
    /**
     * @param {string} [tagName='div'] - tagName блока
     * @param {*} [attrs={}] - объект с атрибутами блока
     * @param {string[]} [classes=[]] - список имён классов
     * @param {*} [data={}] - объект с данными блока
     * @param {class} ValidSignInForm - кдасс валидации данных
     * @constructor
     */
    constructor(tagName = 'div', attrs = {}, classes = [], data, ValidSignInForm) {
        super(tagName, attrs, classes, data);
        this.validator = ValidSignInForm;
    }

    /**
     * Позволяет подписаться на событие формы входа
     * @return {object}
     */
    onSubmitSignInForm(callback) {
        let signInForm = document.getElementsByClassName('form__login')[0];

        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formdata = {};
            const elements = signInForm.elements;

            for (let name in elements) {
                formdata[name] = elements[name].value;
                console.log(elements[name].value);
            }

            const isValid = new this.validator(formdata[0], formdata[1]);

            if(isValid.validForm()) {
                callback(formdata);
            }
        });
    }
}