const CACHE_NAME = 'app_serviceworker_v1';
const cacheUrls = [
	'/',

	'./static/img/info.png',
	'./img/logo.png',
	'./img/keyboard.png',
	'./img/keyboard_with_mouse.png',
	'./static/img/score.png',
	'./static/img/settings.png',
	'./static/img/home.png',
	'./img/1ec878abc02f59ab966e9d4f4bbbff65.png',
	'./js/phaser.min.js',

	'../../img/5ddcf208bfb5ee103c39ea71c64a107f.png',
	'../../img/6f7c29bcd42fe6d20b75c1853ca7e6d3.png',
	'../../img/4119334de3c71843520250c6c9f0594d.jpg',

	'./static/staticsGame/images/bullet.png',
	'./static/staticsGame/images/continue_button.png',
	'./static/staticsGame/images/enemy-tanks.png',
	'./static/staticsGame/images/exit_button.png',
	'./static/staticsGame/images/explosion.png',
	'./static/staticsGame/images/gameover_logo.png',
	'./static/staticsGame/images/ground.jpg',
	'./static/staticsGame/images/loader.png',
	'./static/staticsGame/images/logo.png',
	'./static/staticsGame/images/shadow.png',
	'./static/staticsGame/images/tank.png',
	'./static/staticsGame/images/tank1.png',
	'./static/staticsGame/images/tanks.json',
	'./static/staticsGame/images/tanks.png',
	'./static/staticsGame/images/titlepage.jpg',
	'./static/staticsGame/images/try_again_button.png',
	'./static/staticsGame/images/turret.png',
	'./static/staticsGame/images/white_background.jpg',

	'./static/staticsGame/music/boom.mp3',


	'./js/styles.css',
	'./js/styles.js',
	'./js/bundle.js',
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
