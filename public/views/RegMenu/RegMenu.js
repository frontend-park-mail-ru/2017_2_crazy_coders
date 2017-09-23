import Menu from '../../components/Menu/Menu';

export default function createRegMenu(user) {
    console.log(user);
    let data = {
        user: user, // не выводится в шаблоне (
        buttons: [
            {
                text: 'START',
                id: 'start-game',
                class: 'button a-button',
            },
            {
                text: 'LOG OUT',
                id: 'logout',
                class: 'button a-button',
            }
        ]
    };

    return new Menu('section', {id: 'main-page'}, [], {data});
}
