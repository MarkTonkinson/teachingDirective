(function(){
    angular
        .module('practice')
        .directive('contrallah', function(){
            return {
                restrict: 'AE',
                scope: {
                    stuff: '=',
                    JessieJames: '='
                },
                controller: ['$scope', function($scope, $http){
                    $scope.whereAt = function(lat, long){
                        alert(lat+"+"+long);
                    }

                }],
                link: function (scope, elem, attr){
                    elem.on('click', function(){
                        scope.whereAt(scope.lat, scope.long)
                    })
                }
            }

        })

})();