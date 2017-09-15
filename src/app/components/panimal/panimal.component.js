class PanimalComponentController {
	constructor(panimalService) {
		'ngInject';
		this.panimalService = panimalService;
		this.panimals = [];
		this.selectedPanimal = {};
		this.retrievePanimals();
	}

	retrievePanimals() {
		this.panimalService.getPanimals().then((response)=> {
			this.panimals = response.data;
		}, () => {
			this.message = "There was an error displaying the PANimals";
			this.messageError = true;
		});
	}

	selectPanimal(panimal) {
		this.selectedPanimal = panimal;
	}

	handleSubmit() {
		if (this.hasMatchedId()) {
			this.updatePANimal();
		} else {
			this.addPanimal();
		}
	}

	hasMatchedId() {
		let matchedId = false;
		for (let panimal of this.panimals) {
			if (this.selectedPanimal.id === panimal.id) {
				matchedId = true;
			}
		}
		return matchedId
	}

	updatePANimal() {
		this.panimalService.updatePanimal(this.selectedPanimal).then(() => {
			this.panimalChangeSuccess("Successfully updated " + this.selectedPanimal.name);
		}, () => {
			this.panimalChangeError("There was an issue updating the PANimal");
		});
	}

	addPanimal() {
		this.panimalService.addPanimal(this.selectedPanimal).then(() => {
			this.panimalChangeSuccess("Successfully added " + this.selectedPanimal.name);
		}, () => {
			this.panimalChangeError("There was an issue adding the PANimal");
		});
	}

	panimalChangeSuccess(_message) {
		this.message = _message;
		this.messageError = false;
		this.selectedPanimal = {};
		this.retrievePanimals();
	}

	panimalChangeError(_message) {
		this.message = _message;
		this.messageError = true;
	}

	clearMessage() {
		this.message = null;
	}

	clearSelected() {
		this.selectedPanimal = {};
	}
}

export const PanimalComponent = {
	controller  : PanimalComponentController,
	controllerAs: 'vm',
	templateUrl : 'app/components/panimal/panimal.html'
};
