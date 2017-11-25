export default class Notify {
	constructor() {
		this.notifyBlock = document.createElement('section');
		this.notifyBlock.classList.add('notify-container');
		document.body.appendChild(this.notifyBlock);
	}

	notify(message = 'Текст нотификации', color = 'red', time = 3) {
		let notify = this.createNotify(message, time);
		notify.style.background = color;
		this.notifyBlock.appendChild(notify);
	}

	createNotify(msg, time) {
		let notify = document.createElement('div');
		notify.classList.add('notify');
		notify.setAttribute('style', `animation: show 1s, hide .7s ${time}s;`);

		const text = document.createElement('div');
		text.classList.add('notify__text');
		text.innerHTML = msg;

		const closeButton = document.createElement('div');
		closeButton.classList.add('notify__close');
		closeButton.innerHTML = '&times;';
		closeButton.addEventListener('click', (event) => {
			notify.classList.add('notify_delete');
		});

		notify.addEventListener('animationend', (event) => {
			if (event.animationName === 'hide') {
				notify.removeAttribute('style');
				notify.classList.add('notify_delete');
			}
		});

		notify.appendChild(text);
		notify.appendChild(closeButton);

		return notify;
	}
}