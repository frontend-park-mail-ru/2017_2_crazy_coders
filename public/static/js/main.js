"use strict";

function isAuthUser(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/isauth', true);
    xhr.withCredentials = true;

    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;
        if (+xhr.status !== 200) return;
        const response = JSON.parse(xhr.responseText);
        callback(null, response);
    };

    xhr.send();
}

function exit() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/exit', true);
    xhr.withCredentials = true;
    xhr.send();
}

function register(login, email, password, callback) {
    const user = { login, email, password };
    const body = JSON.stringify(user);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.withCredentials = true;
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
            return;
        }
        if (+xhr.status !== 200) {
            return callback(xhr);
        }
        const response = JSON.parse(xhr.responseText);
        callback(null, response);
    };
    xhr.send(body);
}

function login(login, password, callback) {
    const user = { login, password };
    const body = JSON.stringify(user);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.withCredentials = true;
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
            return;
        }
        if (+xhr.status !== 200) {
            return callback(xhr);
        }
        const response = JSON.parse(xhr.responseText);
        callback(null, response);
    };
    xhr.send(body);
}

//элементы страницы, для навигации
const allSectionCollection = document.getElementsByTagName('section');
const allSectionArray = Array.from(allSectionCollection);

const helloPage = allSectionArray[0],
    loginPage = allSectionArray[1],
    registryPage = allSectionArray[2],
    mainPage = allSectionArray[3],
    musicSection = allSectionArray[4],
    scorePage = allSectionArray[5],
    aboutPage = allSectionArray[6],
    buttomsPanel = allSectionArray[7];

function hideAll(arr) {
    arr.forEach(elem => {
        if (elem.id !== 'buttons-panel') {
            elem.hidden = true;
        }
    })
}

function isUnregisteredUser() { // если пользователь зарегестрирован
    buttomsPanel.hidden = false; // всегда можно посмотреть счет, о нас, выключить звук
    helloPage.hidden = false;
    mainPage.hidden = true;

    allSectionArray.forEach(section => { // удаляем события, если они есть
        section.removeEventListener("click", {}, false);
    });

    allSectionArray.forEach(section => {
        section.addEventListener('click', (event) => {
            const elemId = event.target.getAttribute('id');
            switch (elemId) {
                case 'button-log':
                    helloPage.hidden = true;
                    loginPage.hidden = false;
                    break;

                case 'button-register':
                    helloPage.hidden = true;
                    registryPage.hidden = false;
                    break;

                case 'back-login':
                    loginPage.hidden = true;
                    registryPage.hidden = true;
                    helloPage.hidden = false;
                    break;

                case 'back-signup':
                    loginPage.hidden = true;
                    registryPage.hidden = true;
                    helloPage.hidden = false;
                    break;

                case 'score-logo':
                    hideAll(allSectionArray);
                    scorePage.hidden = false;
                    break;

                case 'about-logo':
                    hideAll(allSectionArray);
                    aboutPage.hidden = false;
                    break;

                case 'back-about':
                    section.hidden = true;
                    helloPage.hidden = false;
                    mainPage.hidden = true;
                    break;

                case 'back-score':
                    section.hidden = true;
                    helloPage.hidden = false;
                    mainPage.hidden = true;
                    break;
            }
        }, false);
    });
}

function isRegisteredUser() { // если пользователь зарегестрирован
    buttomsPanel.hidden = false;
    helloPage.hidden = true;
    mainPage.hidden = false;

    allSectionArray.forEach(section => { // удаляем события, если они есть
        section.removeEventListener("click", {}, false);
    });

    allSectionArray.forEach(section => {
        section.addEventListener('click', (event) => {
            const elemId = event.target.getAttribute('id');
            switch (elemId) {
                case 'logout':
                    console.log('i am logout');
                    exit();
                    isUnregisteredUser();
                    break;
                case 'start-game':
                    console.log('i am start');
                    break;
                case 'score-logo':
                    hideAll(allSectionArray);
                    scorePage.hidden = false;
                    break;
                case 'about-logo':
                    hideAll(allSectionArray);
                    aboutPage.hidden = false;
                    break;
                case 'back-score':
                    section.hidden = true;
                    mainPage.hidden = false;
                    helloPage.hidden = true;
                    break;
                case 'back-about':
                    section.hidden = true;
                    mainPage.hidden = false;
                    helloPage.hidden = true;
                    break;
            }
        })
    });
}

window.onload = () => {
    isAuthUser((error, resp) => {
        if (resp.success === 'yes') {
            helloPage.hidden = true;
            isRegisteredUser();
            console.log('lasudv');
        } else {
            mainPage.hidden = true;
            isUnregisteredUser();
            console.log('aasdalksdn');
        }
    });

    let registryForm = document.getElementById('registry-form');
    let loginForm = document.getElementById('login-form');

    registryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let userLogin = registryForm.elements['login'].value;
        let userEmail = registryForm.elements['email'].value;
        let userPassword = registryForm.elements['password'].value;
        let userRepeatPassword = registryForm.elements['repeat-password'].value;

        const isValid = validRegisterForm(userLogin, userEmail, userPassword, userRepeatPassword, registryForm);

        if (isValid) {
            register(userLogin, userEmail, userPassword, (err, resp) => {
                if (err) {
                    return alert(`AUTH Error: ${err.status}`);
                }
                if (resp.response === 200) {
                    registryPage.hidden = true;
                    helloPage.hidden = true;
                    isRegisteredUser();
                }
                registryForm.reset();
            });
        }
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let userLogin = loginForm.elements['login'].value;
        let userPassword = loginForm.elements['password'].value;

        const isValid = validLoginForm(userLogin, userPassword, loginForm);

        if (isValid) {
            login(userLogin, userPassword, (err, resp) => {
                if (err) {
                    return alert(`AUTH Error: ${err.status}`);
                }

                if (resp.success === 'yes') {
                    loginPage.hidden = true;
                    helloPage.hidden = true;
                    isRegisteredUser();
                }
                loginForm.reset();
            });
        }
    });
}