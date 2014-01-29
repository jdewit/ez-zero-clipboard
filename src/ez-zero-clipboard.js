angular.module('ez.zeroClipboard', [])

.constant('ezZeroClipboardConfig', {
  swfPath:  '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.3.1/ZeroClipboard.swf'
})

.directive('zeroClipboard', ['ezZeroClipboardConfig', function(ezZeroClipboardConfig) {
  return {
    restrict: 'EA',
    compile: function() {

      ZeroClipboard.config({moviePath: ezZeroClipboardConfig.swfPath});

      return function(scope, element) {
        var clip = new ZeroClipboard(element);

        clip.on('load', function(client) {
          client.on('complete', function() {
            scope.$emit('ez_zeroclipboard_copy');
          });
        });
      };
    }
  };
}])
;
