describe('service PanimalService', () => {
	beforeEach(angular.mock.module('pan-front-end'));

	it('should be registered', inject(panimalService => {
		expect(panimalService).toEqual(jasmine.anything());
	}));

});
