'use strict';

import '../../../css/style.css';
import PageConstruct from '../../constructs/PageConstruct/PageConstruct';
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

const AboutUs = function () {
    const parentElem = document.body;

    let table = document.createElement('table');

    table.innerHTML = pugAboutUs({
        members: MEMBERS,
        headText: HEADER_TEXT
    })
/*    parentElem.appendChild(table);

    MEMBERS.forEach(function(member) {
        let tr = document.createElement('TR');
        let name = document.createElement('TH');
        let link = document.createElement('A');
        let role = document.createElement('TH');

        link.appendChild(name);
        link.setAttribute('href', member.link);
        name.textContent =  member.name;
        role.textContent = member.role;
        table.appendChild(tr);
        tr.appendChild(link);
        tr.appendChild(role);
    });*/

    return PageConstruct({
        el: table
    })

};

export default AboutUs;