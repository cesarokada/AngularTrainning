app.service('EventoService', ['$q', '$http', function($q, $http) {
    'use strict';

    var events = {};
    var editEvent = null;

    events.getEvents = function() {
        var deffered = $q.defer();

        $http.get('http://endpoint.amoremcartas.com.br/list/')
            .success(function(data, config, headers, status) {
                deffered.resolve(data);
            })
            .error(function(data, config, headers, status) {
                deffered.reject(data);
            });

        return deffered.promise;
    };

    events.deleteEvento = function(id){
        var deffered = $q.defer();

        $http.post('http://endpoint.amoremcartas.com.br/delete/', JSON.stringify(id))
        .success(function(data, config, headers, status) {
            deffered.resolve(data);
        }).error(function(data, config, headers, status) {
                deffered.reject(data);
            });
        return deffered.promise;
    };

    events.cadastraEvento = function(evento){
        var deffered = $q.defer();

        $http.post('http://endpoint.amoremcartas.com.br/insert/', JSON.stringify(evento))
            .success(function(data, config, headers, status) {
                deffered.resolve(data);
            }).error(function(data, config, headers, status) {
            deffered.reject(data);
        });
        return deffered.promise;
    };

    events.setEventEdit = function (evento) {
        editEvent = evento;
    };

    events.getEventEdit = function () {
        return editEvent;
    };

    events.clear = function () {
        editEvent = null;
        return editEvent;
    };


    events.editarEvento = function(evento){
            var deffered = $q.defer();

            $http.post('    http://endpoint.amoremcartas.com.br/update/', JSON.stringify(evento))
                .success(function(data, config, headers, status) {
                    deffered.resolve(data);
                }).error(function(data, config, headers, status) {
                deffered.reject(data);
            });
            return deffered.promise;
        };

    events.validaEmail = function(email){
        if(email == null || email == undefined){
            return false;
        }
        var str = email.split('@');
        if(str.pop() == 'ciandt.com') {
            return true;
        } else {
            return false;
        }
    };

    return events;
}
]);