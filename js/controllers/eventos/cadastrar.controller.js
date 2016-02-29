app.controller('EventoCadastrarController', ['$scope', 'EventoService', 'toastr', '$state',
    function ($scope, EventoService, toastr, $state) {

        'use strict';

        var editEventObj = EventoService.getEventEdit();

        if (editEventObj === undefined || editEventObj === null) {
            $scope.evento = {};
            $scope.edit = false;
        } else {
            $scope.evento = editEventObj;
            $scope.edit = true;
        }

        $scope.cadastraEvento = function (evento) {
            EventoService.cadastraEvento(evento)
                .then(function (response) {
                    toastr.success('Evento criado com sucesso!', 'Eventos', {
                        closeButton: true,
                        onShown: function () {
                            $state.go('eventos.listar');
                        }
                    });
                })
                .catch(function (error) {
                    toastr.error('Erro ao criar evento', 'Eventos', {
                        closeButton: true
                    });
                });
        };

    }]);