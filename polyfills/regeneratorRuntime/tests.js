/* eslint-env mocha, browser*/
/* globals proclaim, it, regeneratorRuntime */

describe('regeneratorRuntime', function () {
	it('should be defined', function () {
		proclaim.isInstanceOf(self.regeneratorRuntime, Object);
	});
	it('is a function', function () {
		proclaim.isFunction(self.regeneratorRuntime.wrap);
	});
});