import Footer from '../../components/Footer/Footer'

let data = {
    imgListData: [
        {
            class: "footer__sound",
            src: "./static/img/sound.png",
            id: "menu-button-music",
        },
        {
            class: "footer__score",
            src: "./static/img/score.png",
            id: "menu-button-score",
        },
        {
            class: "footer__info",
            src: "./static/img/info.png",
            id: "menu-button-about",
        },
    ]
};

/**
 * Получаем страницу footer-а
 */
export default function CreateFooter() {
    return new Footer('section', {id: 'section-footer'}, [], data);
}
