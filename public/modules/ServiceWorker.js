export default function RegisterSW() {
	if (navigator.serviceWorker !== undefined) {
		navigator.serviceWorker.register('sw.js')
			.then(registration => {
				console.log(`good registration worker: ${registration}`);
			})
			.catch(error => {
				console.log(error);
				console.log(`bad registration worker: ${error}`);
			});
	}
}