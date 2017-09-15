export class PanimalService {
	constructor ($http, ENDPOINT) {
		'ngInject';
		this.$http = $http;
		this.ENDPOINT = ENDPOINT;
	}

	getPanimals() {
		return this.$http.get(this.ENDPOINT)
	}

	getPanimal(id) {
		return this.$http.get(this.ENDPOINT + id)
	}

	addPanimal(Panimal) {
		return this.$http.post(this.ENDPOINT, Panimal)
	}

	updatePanimal(Panimal) {
		return this.$http.put(this.ENDPOINT + Panimal.id, Panimal)
	}
}
