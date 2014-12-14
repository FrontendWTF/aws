angular.module('aws', [
]).provider('AWS', function (
) {
  var options = {};
  var provider = {
    config: function configureAWS (extra) {
      if (extra) {
        options = angular.extend(options, extra);
        AWS.config.update(options);

        return provider;
      } else {
        return options;
      }
    },
    $get: function (
      $window
    ) {
      return $window.AWS;
    }
  };

  return provider;
});
