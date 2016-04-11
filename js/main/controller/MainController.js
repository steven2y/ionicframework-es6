import mod from '../module';


function MainController($scope, $ionicModal, $timeout) {

  var vm = this;
  vm.login = login;
  vm.closeLogin = closeLogin;
  vm.modal = {};


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('js/main/views/login.html', {
    scope: $scope
  }).then((modal) => {
    vm.modal = modal;
  });


  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //// Form data for the login modal
  //$scope.loginData = {};
  //

  //
  //// Perform the login action when the user submits the login form
  //$scope.doLogin = function() {
  //  console.log('Doing login', $scope.loginData);
  //
  //  // Simulate a login delay. Remove this and replace with your login
  //  // code if using a login system
  //  $timeout(function() {
  //    $scope.closeLogin();
  //  }, 1000);
  //};

  function login() {
    vm.modal.show();
  }

  // Triggered in the login modal to close it
  function closeLogin() {
    vm.modal.hide();
  };

}

MainController.$inject = ['$scope', '$ionicModal', '$timeout'];
mod.controller('MainController', MainController);

