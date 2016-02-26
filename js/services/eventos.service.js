app.service('EventoService', ['$q', '$http', function($q, $http) {
    'use strict';

    var events = {};

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

    return events;
}
]);