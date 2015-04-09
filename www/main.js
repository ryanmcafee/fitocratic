angular.module('app', [])

    .controller('FirstCtrl', function FirstCtrl() {
        var first = this;

        first.message = this + " test";
        first.message2 = this + " test2";
    })
