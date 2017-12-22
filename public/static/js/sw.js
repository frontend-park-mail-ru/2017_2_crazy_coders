const CACHE_NAME = 'app_serviceworker_v1';
const cacheUrls = [
	'/',



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
