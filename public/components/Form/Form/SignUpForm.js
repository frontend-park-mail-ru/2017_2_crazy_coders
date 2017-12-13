import Form from './Form'

export default class SignUpForm extends Form {
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
     * Позволяет подписаться на событие формы регистрации
     * @return {Promise}
     */
    onSubmitSignUpForm(callback) {
        let signUpForm = document.getElementsByClassName('form__signup')[0];

        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formdata = {};
            const elements = signUpForm.elements;

            for (let name of elements) {
                formdata[name.name] = name.value;
            }

            const isValid = new this.validator(formdata.username, formdata.email,
                formdata.password, formdata.repeatPassword);

            if(isValid.validForm()) {
                callback(formdata);
            }
        });
    }
}