//проверка формы при отправке
// на незаполненые поля - отдельно для входа и регистрации

function validFormOnEmptyCells(id_form, section) {
    document.getElementById(id_form).addEventListener('click', () => {
        const dataForm = section.getElementsByClassName("input");
        let flag = true;

        Object.keys(dataForm).forEach(data => {
            if (dataForm[data].value === '') {
                dataForm[data].classList.add("data-error");
                valid = false;
            } else {
                dataForm[data].classList.remove("data-error");
            }
        });
    });
}

function showError(mess, form) {
    let errorElement = document.createElement('div');
    errorElement.textContent = mess;
    errorElement.classList.add('error-mess');
    console.log(errorElement);
    form.insertBefore(errorElement,form.children[0]);
}

function isCorrectPassword(pass, form) {
    let mess = 'password length >= 6 symbol';
    if (pass.length < 6) {
        showError(mess, form);
        return false;
    }
    return true; // добавить валидацию
}

function isSamePasswords(pass, passRepeat, form) {
    let mess = 'password !== repeat password';
    if (pass !== passRepeat) {
        showError(mess, form);
        return false;
    }
    return true; // добавить валидацию
}

function isCorrectLogin(login, form) {
    let mess = 'login length >= 4 symbol';
    if (login.length < 4) {
        showError(mess, form);
        return false;
    }
    return true; // добавить валидацию
}

function isCorrectEmail(email, form) {
    let r = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    let mess = 'invalid email';
    if (!r) {
        showError(mess, form);
        return false;
    }
    return true; // добавить валидацию
}

validFormOnEmptyCells('login-button', document.getElementById('login'));
validFormOnEmptyCells('signup-button', document.getElementById('registry'));

let registryForm = document.getElementById('registry-form');
let loginForm = document.getElementById('login-form');

function register(login, email, password, callback) {
    const user = {login, email, password};
    const body = JSON.stringify(user);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
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

function loginn(login, password, callback) {
    const user = {login, password};
    const body = JSON.stringify(user);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
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


registryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let login = registryForm.elements['login'].value;
    let email = registryForm.elements['email'].value;
    let password = registryForm.elements['password'].value;
    let repeatPassword = registryForm.elements['repeat-password'].value;

    console.log(email);
    console.log(password);
    console.log(repeatPassword);
    console.log(login);

    if (isCorrectPassword(password, registryForm) && isSamePasswords(password, repeatPassword, registryForm) &&
        isCorrectLogin(login, registryForm) && isCorrectEmail(email, registryForm)) {
        register(login, email, password, function (err, resp) {
            if (err) {
                return alert(`AUTH Error: ${err.status}`);
            }
            if (resp.response === 200) { // в случае успеха входим
                registryPage.hidden = true;
                helloPage.hidden = true;
                isRegisteredUser();
            }
            registryForm.reset();
        });
    }
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let login = loginForm.elements['login'].value;
    let password = loginForm.elements['password'].value;

    isCorrectLogin(login, loginForm);
    isCorrectPassword(password, loginForm);

    loginn(login, password, function (err, resp) {
        if (err) {
            return alert(`AUTH Error: ${err.status}`);
        }

        if (resp.success === 'yes') { // в случае успеха - входим
            loginPage.hidden = true;
            helloPage.hidden = true;
            isRegisteredUser();
        }
        loginForm.reset();
    });
});

// навигация по странице

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
    buttomsPanel.hidden = false;// всегда можно посмотреть счет, о нас, выключить звук
    helloPage.hidden = false;
    mainPage.hidden = true;
    allSectionArray.forEach(section => {

        section.addEventListener('click', (event) => {
            const elemId = event.target.getAttribute('id');
            console.log(elemId);

            if (elemId === 'button-log') {
                helloPage.hidden = true;
                loginPage.hidden = false;
            }
            if (elemId === 'button-register') {
                helloPage.hidden = true;
                registryPage.hidden = false;
            }
            if (elemId === 'back-login' || elemId === 'back-signup') {
                loginPage.hidden = true;
                registryPage.hidden = true;
                helloPage.hidden = false;
            }
            if (elemId === 'login-button') {
                let buttonLogIn = document.getElementById('login-button');
            }
            if (elemId === 'score-logo') {
                loginPage.hidden = true;
                registryPage.hidden = true;
                helloPage.hidden = true;
                scorePage.hidden = false;
            }
            if (elemId === 'about-logo') {
                loginPage.hidden = true;
                registryPage.hidden = true;
                helloPage.hidden = true;
                aboutPage.hidden = false;
            }
            if (elemId === 'back-score' || elemId === 'back-about') {
                section.hidden = true;
                helloPage.hidden = false;
                mainPage.hidden = true;
            }

        }, false);
    });
}

function isRegisteredUser() { // если пользователь незарегестрирован
    buttomsPanel.hidden = false;
    helloPage.hidden = true;
    mainPage.hidden = false;
    allSectionArray.forEach(section => {

        section.addEventListener('click', (event) => {
            const elemId = event.target.getAttribute('id');
            console.log(elemId);
            if (elemId === 'logout') {
                console.log('logouttttt');
            }

            if (elemId === 'score-logo') {
                hideAll(allSectionArray);
                scorePage.hidden = false;
            }
            if (elemId === 'about-logo') {
                hideAll(allSectionArray);
                aboutPage.hidden = false;
            }

            if (elemId === 'back-score' || elemId === 'back-about') {
                section.hidden = true;
                mainPage.hidden = false;
                helloPage.hidden = true;
            }
        })
    });
}

isUnregisteredUser();
