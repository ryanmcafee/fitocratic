 var Fitocratic = angular.module('Fitocratic', ['ionic', 'Fitocratic.controllers'])

 .run(function($ionicPlatform) {
     $ionicPlatform.ready(function() {
         // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
         // for form inputs)
         if (window.cordova && window.cordova.plugins.Keyboard) {
             cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
         }
         if (window.StatusBar) {
             // org.apache.cordova.statusbar required
             StatusBar.styleDefault();
         }
     });
 })

 Fitocratic.config(function($stateProvider, $urlRouterProvider) {

     $stateProvider
         //Route for the main page
         .state('app', {
             url: "/app",
             abstract: true,
             templateUrl: "templates/menu.html"
         })

         .state('app.home', {
             url: "/home",
             views: {
                 'menuContent': {
                     templateUrl: "templates/home.html"
                 }
             }
         })

         .state('app.login', {
             url: "/login",
             views: {
                 'menuContent': {
                     templateUrl: "templates/login.html"
                 }
             }
         })

         //Route for the user registration page
         .state('app.process_login', {
             url: '/login/processing',
             views: {
                 'menuContent': {
                     templateUrl: "templates/process_login.html"
                 }
             }
         })

         //Route for the user registration page
         .state('app.register', {
             url: '/register',
             views: {
                 'menuContent': {
                     templateUrl: "templates/register.html"
                 }
             }
         })

         .state('app.registration_complete', {
             url: '/registration_complete',
             views: {
                 'menuContent': {
                     templateUrl: "templates/registration_complete.html"
                 }
             }
         })

         .state('app.select_goal', {
             url: '/setup/select_goal',
             views: {
                 'menuContent': {
                     templateUrl: "/templates/setup/select_goal.html"
                 }
             }
         })

         .state('app.complete_goal_by', {
             url: '/setup/complete_goal_by',
             views: {
                 'menuContent': {
                     templateUrl: "/templates/setup/complete_goal_by.html"
                 }
             }
         })

         .state('app.review_plan', {
             url: '/setup/review_plan',
             views: {
                 'menuContent': {
                     templateUrl: "/templates/setup/review_plan.html"
                 }
             }
         })

         .state('app.dashboard', {
             url: '/dashboard',
             views: {
                 'menuContent': {
                     templateUrl: "/templates/dashboard.html"
                 }
             }
         })

         .state('app.log_data', {
             url: '/dashboard/log_data',
             views: {
                 'menuContent': {
                     templateUrl: "/templates/dashboard/log_data.html"
                 }
             }
         })

         .state('app.track_performance', {
             url: '/dashboard/track_performance',
             views: {
                 'menuContent': {
                     templateUrl: "/templates/dashboard/track_performance.html"
                 }
             }
         })

         .state('app.fitness_plan', {
             url: '/dashboard/fitness_plan',
             views: {
                 'menuContent': {
                     templateUrl: "/templates/dashboard/fitness_plan.html"
                 }
             }
         })

         .state('app.health_plan', {
             url: '/dashboard/health_plan',
             views: {
                 'menuContent': {
                     templateUrl: "/templates/dashboard/health_plan.html"
                 }
             }
         })

     $urlRouterProvider.otherwise('/app/home');
     });

 Fitocratic.controller('FitocraticCtrl', function ($scope) {

     console.log($scope);

     $scope.login = function () {
         $state.go('login');
     }

     $scope.register = function () {
         $state.go('register');
     }

 });












