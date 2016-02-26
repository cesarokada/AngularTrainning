app.controller('EventoListarController',['eventoList','$scope',
    function(eventoList,$scope) {

        $scope.listEvents = function(){
            return eventoList.eventos;
        };
}]);
