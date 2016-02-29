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


    return events;
}
]);