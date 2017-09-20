'use strict';

// import '../../../css/style.css';
import PageConstruct from '../../constructs/PageConstruct/PageConstruct';
import Block from '../../constructs/BlockConstruct/BlockConstruct';
import pugAboutUs from './AboutUs.pug';

const HEADER_TEXT = 'DEVELOPERS';
const MEMBERS = [
    {
        name: 'Grigorev Pavel',
        role: 'Frontend',
        link: 'https://github.com/grigorevpv',
    },
    {
        name: 'Samokhin Maxim',
        role: 'Frontend',
        link: 'https://github.com/MaxSamokhin',
    },
    {
        name: 'Zubarev Anton',
        role: 'Backend',
        link: 'https://github.com/ZubAnt',
    },
    {
        name: 'Pitik Dima',
        role: 'Backend',
        link: 'https://github.com/pitikdmitry',
    }

];

class AboutUs {

    constructor() {
        this.block = Block.Create('div', {}, ['logo', 'table_form']);
        this.init();
    }

    init() {
        let table = Block.Create('table', {}, ['about_table']);

        table.setHTML(pugAboutUs({
                members: MEMBERS,
                headText: HEADER_TEXT
            })
        );

        this.block.append(table);
    }
}

export default AboutUs;