import Footer from '../../components/Footer/Footer'

let data = {
    imgListData: [
        {
            class: "sound_img",
            src: "./static/img/sound.png",
            id: "sound-logo",
        },
        {
            class: "score_img",
            src: "./static/img/score.png",
            id: "score-logo",
        },
        {
            class: "info_img",
            src: "./static/img/info.png",
            id: "about-logo",
        },
    ]
};


export default function CreateFooter() {
    return new Footer('section', {id: 'buttons-panel'}, [], {data});
}
