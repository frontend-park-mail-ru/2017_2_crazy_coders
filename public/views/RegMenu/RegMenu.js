import Menu from '../../components/Menu/Menu';

/**
 * Получаем страницу зарегестрированного пользователя
 */
export default function createRegMenu() { //(user)
    // console.log(user);
    let data = {
        user: 'name', // не выводится в шаблоне
        buttons: [
            {
                text: 'START',
                id: 'menu-button-playGame',
                class: 'button a-button',
            },
            {
                text: 'LOG OUT',
                id: 'menu-button-logout',
                class: 'button a-button',
            }
        ]
    };

    return new Menu('section', {id: 'section-regMenu'}, [], {data});
}
