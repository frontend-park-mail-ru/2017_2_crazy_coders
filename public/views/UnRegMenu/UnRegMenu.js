import Menu from '../../components/Menu/Menu';

let data = {
    user: null,
    buttons: [
        {
            text: 'SIGN IN',
            id: 'menu-button-signIn',
            class: 'button',
        },
        {
            text: 'SIGN UP',
            id: 'menu-button-signUp',
            class: 'button',
        }
    ]
};

/**
 * Получаем страницу незарегистрированного пользователя
 */
export default function createUnRegMenu() {
    return new Menu('section', {id: 'section-unRegMenu'}, [], {data});
}
