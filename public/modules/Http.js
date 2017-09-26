export default class Http {

    constructor() {
        const baseUrl = '82.202.246.5:8080';
    }

    static Get(address, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', address, true);
        xhr.withCredentials = true;

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (+xhr.status >= 400) {
                return callback(xhr, null);
            }

            const response = JSON.parse(xhr.responseText);
            callback(null, response);
        };

        xhr.send();
    }

    static Post(address, body, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', address, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');
        xhr.setRequestHeader('Accept', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (+xhr.status >= 400) {
                return callback(xhr, null);
            }

            const response = JSON.parse(xhr.responseText);
            console.log("response = " + response.username);
            callback(null, response);
        };

        xhr.send(JSON.stringify(body));
    }

    static FetchGet(address) {
        const url = (Http.BaseUrl || baseUrl) + address;

        return fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                if (response.status >= 400) {
                    throw response;
                }

                return response.json();
            });
    }

    static FetchPost (address, body) {
        const url = (Http.BaseUrl || baseUrl) + address;

        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json'
            }
        })
            .then(function(response) {
                if (response.status >= 400) {
                    throw response;
                }

                return  response.json();
            });

    }

}


