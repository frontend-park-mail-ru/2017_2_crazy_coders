
/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Http
 */
export default class Http {
    /**
     * @constructor
     */
    constructor() {
        this.baseUrl = 'http://82.202.246.5:8080';
    }

    /**
     * Выполняет GET-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @return {Promise}
     */
    static FetchGet(address) {
        // const url = this.baseUrl + address;
        const url = 'http://82.202.246.5:8080' + address;
        // const url = 'https://tanks-backend.xyz' + address;

        console.log("[FetchGet] try get from " + url);

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
                console.log("[FetchGet] now get from " + url);
                return response;
            });
    }

    /**
     * Выполняет POST-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @param {*} body - тело запроса (объект)
     * @return {Promise}
     */
    static FetchPost (address, body) {

        const url = 'http://82.202.246.5:8080' + address;
        // const url = 'https://tanks-backend.xyz' + address;

        console.log("[FetchPost] try post to " + url);

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
                return  response;
            });

    }
}


