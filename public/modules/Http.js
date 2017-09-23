export default class Http {

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
}


