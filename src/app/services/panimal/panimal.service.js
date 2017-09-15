export class PanimalService {
	constructor ($http) {
		'ngInject';

		this.$http = $http;
	}

	getPanimals() {
		return this.$http.get("http://localhost:5000/api/panimal")
	}

	getPanimal(id) {
		return this.$http.get("http://localhost:5000/api/panimal/" + id)
	}

	addPanimal(Panimal) {
		return this.$http.post("http://localhost:5000/api/panimal", Panimal)
	}

	updatePanimal(Panimal) {
		return this.$http.put("http://localhost:5000/api/panimal/" + Panimal.id, Panimal)
	}
}
