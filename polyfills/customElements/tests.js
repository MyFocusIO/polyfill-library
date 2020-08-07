/* eslint-env mocha, browser*/
/* global proclaim, it */

it('customElements', function () {
	it('should be defined', function () {
    	proclaim.isInstanceOf(self.customElements, Object);
    });
	it('is a function', function () {
    	proclaim.isFunction(self.customElements.define);
    });
});