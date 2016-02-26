app.controller('LoginController',['$scope','$cookies', '$state',function($scope, $cookies, $state){
    $scope.error = {
        message: null
    }

    $scope.validaEmail = function(email){
        if(email == null || email == undefined){
            $scope.form.login.$setValidity('required',false);
            $scope.error.message = 'Email inválido';
        }
        var str = email.split('@');
        if(str.pop() == 'ciandt.com') {
            $scope.form.login.$valid = true;
            $scope.error.message = null;
        }
        else{
            $scope.form.login.$setValidity('required',false);
            $scope.error.message = 'Email inválido';
        }
    };

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