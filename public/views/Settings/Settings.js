import Table from '../../components/Table/Settings/Table';

let data = {
    idButton: 'settings-button-back',
    classTable: 'settings_table',
    title: 'SETTINGS',
};

/**
 * Получаем страницу о нас
 */
export default function createSettings() {
    return new Table('section', {id: 'section-settings'}, [], data);
}