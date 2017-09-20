(function () {
    'use strict';
    angular.module('app')
        .controller('testController', [TestController]);

    function TestController() {
        var self = this;
        self.testVar = 'test';
        self.testNum = 1;
        self.inc = function () {
            self.testNum++;
        }
    }

})();