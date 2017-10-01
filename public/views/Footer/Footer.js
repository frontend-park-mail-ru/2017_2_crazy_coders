import Footer from '../../components/Footer/Footer'

let data = {
    imgListData: [
        {
            class: "sound_img",
            src: "./static/img/sound.png",
            id: "menu-button-music",
        },
        {
            class: "score_img",
            src: "./static/img/score.png",
            id: "menu-button-score",
        },
        {
            class: "info_img",
            src: "./static/img/info.png",
            id: "menu-button-about",
        },
    ]
};

/**
 * Получаем страницу footer-а
 */
export default function CreateFooter() {
    return new Footer('section', {id: 'section-footer'}, [], {data});
}
