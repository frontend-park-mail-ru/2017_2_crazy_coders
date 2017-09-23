import Menu from '../../components/Menu/Menu';

let data = {
    user: null,
    buttons: [
        {
            text: 'LOG IN',
            id: 'button-log',
            class: 'button',
        },
        {
            text: 'REGISTER',
            id: 'button-register',
            class: 'button',
        }
    ]
};

export default function createUnRegMenu() {
    return new Menu('section', {id: 'input-page'}, [], {data});
}
