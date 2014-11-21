angular.module('aws', [
]).provider('AWS', function (
) {
  var provider = {
    config: function configureAWS (config) {
      AWS.config.update(config);
    },
    $get: function (
      $window
    ) {
      return $window.AWS;
    }
  };

  return provider;
});
