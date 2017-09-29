import Header from '../../components/Header/Header'

let data = {
    nameGame: 'TANKS',
};

/**
 * Получаем страницу header
 */
export default function createHeader() {
    return new Header('section', {id: 'header'}, [], {data});
}
