

class Strategy  {
	
	constructor() {
		if (Strategy.__instance) {
			return Strategy.__instance;
		}

		this.strategy = 'single-offline';
		Strategy.__instance = this;
	}

	setMultiStrategy() {
		this.strategy = 'multiplayer';
	}

	setOfflineStrategy() {
		console.log('strategy offline mode');
		this.strategy = 'single-offline';
	}

	setSingleStrategy() {
		this.strategy = 'single-offline';
	}

	getStrategy() {
		return this.strategy;
	}

}

let strategy = new Strategy();

export default strategy;