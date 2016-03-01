app.controller('LoginController',['$scope','$cookies', '$state','EventoService',function($scope, $cookies, $state,EventoService){
    $scope.error = {
        message: null
    }

    $scope.callValidaEmail = function(email){
        if(EventoService.validaEmail(email)){
            $scope.form.login.$valid = true;
            $scope.error.message = null;
        } else {
            $scope.form.login.$setValidity('required',false);
            $scope.error.message = 'Email invalido';
        }
    }

    $scope.saveCookies = function(login){

        if(login.password.length < 6){
            $scope.error.message = 'senha precisa de 6 caracteres!';
        } else {
            $scope.loading = false;
            $cookies.put('emailCit', login.email);
            $state.go('eventos.listar');
        }
    };
}]);
