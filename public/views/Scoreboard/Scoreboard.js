import Table from '../../components/Table/Table'
let data = {
    idButton: 'score-button-back',
    classTable: 'score_table',
    title: 'SCOREBOARD',
    users: [
        {
            name: 'Name',
            position: 'Rating',

        },
        {
            name: 'Peter',
            position: '100',

        },
        {
            name: 'Lois',
            position: '150',

        },
        {
            name: 'Joe',
            position: '300',

        },
        {
            name: 'Cleveland',
            position: '250'
        }
    ],
};

/**
 * Получаем страницу счета
 */
export default function Scoreboard() {
    return new Table('section', {id: 'section-scoreList'}, [], data);
}
