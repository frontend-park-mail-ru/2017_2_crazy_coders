const CACHE_NAME = 'app_serviceworker_v1';
const cacheUrls = [
	'/',

	'./img/logo.png',
	'./img/keyboard.png',
	'./img/keyboard_with_mouse.png',
	'./static/img/settings.png',
	'./static/img/score.png',
	'./static/img/info.png',

	'./static/staticsGame/images/logo.png',
	'./static/staticsGame/images/bullet.png',
	'./static/staticsGame/images/ground.jpg',
	'./static/staticsGame/images/explosion.png',
	'./static/img/home.png',
	'./static/staticsGame/images/box_tree.png',
	'./static/staticsGame/images/white_background.jpg',
	'./static/staticsGame/images/try_again_button.png',
	'./static/staticsGame/images/gameover_logo.png',
	'./static/staticsGame/images/exit_button.png',

	'../../img/9ce0229b28fcbc56adfde2f723b8380c.jpg',
	'../../img/b1eba607ba9f77273f5f14463a976dcf.png',
	'../../img/312198cd9719c419d4b9238760f342ca.png',
	'../../img/3eb5ea6bf11115e71fd3f507f016d366.png',
	'../../img/a63fb46e0b29ad38cc061b9a7ea6f527.png',
	'../../img/ed6d0158c1c8442c8eb40bea39ee8c41.png',
	'./static/staticsGame/images/tanks.png',
	'./static/staticsGame/images/enemy-tanks.png',
	'../../img/8adf39cf4c39a2da1787a3711cae58d2.png',
	'../../img/6f24be9db222a9bdb0f415e6205ddc57.png',
	'./static/staticsGame/images/tanks.json',

	'./js/phaser.min.js',

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
