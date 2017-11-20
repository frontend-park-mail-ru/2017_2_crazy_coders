import Menu from '../../components/Menu/Menu';

let data = {
    user: undefined,
    buttons: [
        {
            text: 'SIGN IN',
            id: 'menu-button-signIn',
            class: 'menu__button',
        },
        {
            text: 'SIGN UP',
            id: 'menu-button-signUp',
            class: 'menu__button',
        }
    ]
};

/**
 * Получаем страницу незарегистрированного пользователя
 */
export default function createUnRegMenu() {
    return new Menu('section', {id: 'section-unRegMenu'}, [], data);
}
