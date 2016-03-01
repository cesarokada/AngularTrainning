app.config(['$stateProvider','$urlRouterProvider', 'momentPickerProvider',
    function($stateProvider, $urlRouterProvider, momentPickerProvider){

        momentPickerProvider.options({
           //Picker properties
            locale: 'pt-br',
            format: 'L LT',

            //Extra: views properties
            leftArrow:      '&larr;',
            rightArrow:     '&rarr;',
            monthsFormat:   'MMM',
            daysFormat:     'D',
            hoursFormat:    'HH:[00]',
            minutesFormat:  moment.localeData().longDateFormat('LT').replace(/[aA]/,''),
            secondFormat:   'ss',
            minuteStep:     30,
            secondStep:     1
        });

        $urlRouterProvider.otherwise(function ($injector, $location, $rootScope){
            var $state = $injector.get('$state');
            $state.go('login');
        });

        $stateProvider
            .state('login',{
                url: '/login',
                controller: 'LoginController',
                templateUrl: 'views/login.view.html'
            })
            .state('eventos',{
                url: '/eventos',
                templateUrl: 'views/eventos/index.view.html'
            })
            .state('eventos.listar', {
                url: '/listar',
                controller: 'EventoListarController',
                templateUrl: 'views/eventos/listar.view.html',
                resolve: {
                    eventoList: function(EventoService){
                        return EventoService.getEvents();
                    }
                }
            })

            .state('eventos.cadastrar', {
                url: '/cadastrar',
                controller: 'EventoCadastrarController',
                templateUrl: 'views/eventos/cadastrar.view.html'
            })

            .state('eventos.editar', {
                url: '/editar',
                controller: 'EventoCadastrarController',
                templateUrl: 'views/eventos/cadastrar.view.html'
            })
    }
])
    .run(['$state','$cookies','$rootScope','EventoService', function($state,$cookies,$rootScope,EventoService){

    $rootScope.$on('$stateChangeStart',
        function (evento, toState, toParams, fromState, fromParam) {
            var email = $cookies.get('emailCit');
            var flag = EventoService.validaEmail(email);
            if(fromState.name !== 'login') {
                if (toState.name !== 'login' && !flag) {
                    evento.preventDefault();
                    $state.go('login');
                }
            } else if(fromState.name === 'login' && !flag){
                evento.preventDefault();
                $state.go('login');
            }
        });
}]);