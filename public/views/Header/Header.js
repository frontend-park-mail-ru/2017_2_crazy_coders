import Header from '../../components/Header/Header'

let data = {
    nameGame: 'TANKS',
};

export default function createHeader() {
    return new Header('section', {id: 'header'}, [], {data});
}
