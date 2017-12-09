const CACHE_NAME = 'app_serviceworker_v1';
const cacheUrls = [
	'/',

	'/../img/info.png',
	'/../img/logo.png',
	'/../img/score.png',
	'/../img/sound.png',

	'/game/phaser.js',

	'/../staticsGame/images/bullet.png',
	'/../staticsGame/images/continue_button.png',
	'/../staticsGame/images/enemy-tanks.png',
	'/../staticsGame/images/exit_button.png',
	'/../staticsGame/images/explosion.png',
	'/../staticsGame/images/gameover_logo.png',
	'/../staticsGame/images/ground.jpg',
	'/../staticsGame/images/loader.png',
	'/../staticsGame/images/logo.png',
	'/../staticsGame/images/pause_button.png',
	'/../staticsGame/images/pause_logo.png',
	'/../staticsGame/images/shadow.png',
	'/../staticsGame/images/tank.png',
	'/../staticsGame/images/tank1.png',
	'/../staticsGame/images/tanks.json',
	'/../staticsGame/images/tanks.png',
	'/../staticsGame/images/titlepage.jpg',
	'/../staticsGame/images/try_again_button.png',
	'/../staticsGame/images/turret.png',
	'/../staticsGame/images/white_background.jpg',
    '/../staticsGame/images/HelicopterLandingArea.png',

	'/../staticsGame/music/boom.mp3',


	'/styles.css',
	'/styles.js',
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
