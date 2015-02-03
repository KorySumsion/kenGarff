// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('kenGarff', ['ionic','ngCookies', 'ng-token-auth', 'ngCordova'])

    .config(function($authProvider, $httpProvider) {
        $authProvider.configure({
            apiUrl: 'http://localhost:3000',
            storage: 'localStorage',
            forceHardRedirect: true
        });
        var httpMethods = ['get', 'post', 'put', 'patch', 'delete'];
      angular.forEach(httpMethods, function(method) {
        var _base;
        if ((_base = $httpProvider.defaults.headers)[method] == null) {
          _base[method] = {};
        }
        $httpProvider.defaults.headers[method]['If-Modified-Since'] = undefined;
      });
    });


app.run(function($http, $cordovaPush) {

  var iosConfig = {
    "badge": true,
    "sound": true,
    "alert": true,
  };

  document.addEventListener("deviceready", function(){
    $cordovaPush.register(config).then(function(result) {
      // Success -- send deviceToken to server, and store for future use
      console.log("result: " + result)
      // $http.post("http://server.co/", {user: "Bob", tokenID: result.deviceToken})
    }, function(err) {
      alert("Registration error: " + err)
    });


    $rootScope.$on('$cordovaPush:pushNotificationReceived', function(event, notification) {
      if (notification.alert) {
        navigator.notification.alert(notification.alert);
      }

      if (notification.sound) {
        var snd = new Media(event.sound);
        snd.play();
      }

      if (notification.badge) {
        $cordovaPush.setBadgeNumber(notification.badge).then(function(result) {
          // Success!
        }, function(err) {
          // An error occurred. Show a message to the user
        });
      }
    });

    // WARNING! dangerous to unregister (results in loss of tokenID)
    $cordovaPush.unregister(options).then(function(result) {
      // Success!
    }, function(err) {
      // Error
    });

  }, false);
});




