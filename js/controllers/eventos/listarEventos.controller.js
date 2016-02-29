app.controller('EventoListarController',['eventoList','$scope','$state','EventoService','toastr',
    function(eventoList, $scope, $state, EventoService, toastr) {

        //$scope.listEvents = function(){
        //    return eventoList.eventos;
        //};

        $scope.listaEventos = eventoList.eventos;

        $scope.deleteEvento = function(id){
            EventoService.deleteEvento(id)
                .then(function (response) {
                    toastr.success('Evento excluído com sucesso!','Eventos',{
                        closeButton: true,
                        onShown: function () {
                            EventoService.getEvents().then(function(response){
                                $scope.listaEventos = response.eventos;
                            }).catch(function(error){
                                toastr.error('Erro ao listar evento','Eventos',{closeButton: true})
                            });
                        }
                    });
                }).catch(function(error){
                toastr.error('Erro ao deletar evento','Eventos',{closeButton: true});
            });
        };

        $scope.editEvento = function(evento){
            EventoService.setEventEdit(evento);

            $state.go('eventos.editar');
        };
}]);
