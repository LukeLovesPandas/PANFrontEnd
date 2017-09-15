describe('service PanimalService', () => {
	beforeEach(angular.mock.module('pan-front-end'));

	it('should be registered', inject(PanimalService => {
		expect(PanimalService).toEqual(jasmine.anything());
	}));

});
