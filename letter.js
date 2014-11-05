(function(){
    angular
        .module('practice')
        .directive('letters', function(){
            return {
                restrict: 'A',
                scope: {
                    steve: '@',
                    text: '='
                },
                link: function(scope, elem, attr){
                    elem.on('click', function(){
                        alert(scope.steve);
                        console.log(scope.text);
                    });

                }
            }

    })

})();