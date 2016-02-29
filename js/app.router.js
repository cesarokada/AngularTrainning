app.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){

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
                url: '/cadastrar',
                controller: 'EventoCadastrarController',
                templateUrl: 'views/eventos/cadastrar.view.html'
            })
    }]);