const CACHE_NAME = 'app_serviceworker';
const cacheUrls = [
	'/',

	'/static/img/info.png',
	'/static/img/logo.png',
	'/static/img/score.png',
	'/static/img/sound.png',

	'/static/game/phaser.min.js',
	'/static/staticsGame/images/bullet.png',
	'/static/staticsGame/images/continue_button.png',
	'/static/staticsGame/images/enemy-tanks.png',
	'/static/staticsGame/images/exit_button.png',
	'/static/staticsGame/images/explosion.png',
	'/static/staticsGame/images/gameover_logo.png',
	'/static/staticsGame/images/ground.png',
	'/static/staticsGame/images/loader.png',
	'/static/staticsGame/images/logo.png',
	'/static/staticsGame/images/pause_button.png',
	'/static/staticsGame/images/pause_logo.png',
	'/static/staticsGame/images/shadow.png',
	'/static/staticsGame/images/tank.png',
	'/static/staticsGame/images/tank1.png',
	'/static/staticsGame/images/tanks.json',
	'/static/staticsGame/images/tanks.png',
	'/static/staticsGame/images/titlepage.png',
	'/static/staticsGame/images/try_again_button.png',
	'/static/staticsGame/images/turret.png',
	'/static/staticsGame/images/white_background.png',

	'/static/staticsGame/music/boom.mp3',

	'/components/Footer/Footer.css',
	'/components/From/Form/Form.css',
	'/components/Footer/Footer.css',
	'/components/Header/Header.css',
	'/components/Menu/Menu.css',
	'/components/Table/Table.css',

	'/bundle.js',
];

this.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function (cache) {
				return cache.addAll(cacheUrls);
			})
	);
});

this.addEventListener('fetch', event => {

	console.log(event);

	event.respondWith(caches.match(event.request)
		.then((cachedResponse) => {

			if (cachedResponse) {
				return cachedResponse;
			}

			return fetch(event.request);
		})
	);
});

