angular.module('ez.zeroClipboard', [])

.constant('ezZeroClipboardConfig', {
  swfPath:  '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/1.3.1/ZeroClipboard.swf'
})

.directive('zeroClipboard', ['ezZeroClipboardConfig', function(ezZeroClipboardConfig) {
  return {
    restrict: 'EA',
    link: function(scope, element) {
      var clip = new ZeroClipboard(element, {
        moviePath: ezZeroClipboardConfig.swfPath
      });

      clip.on('load', function(client) {
        client.on('complete', function() {
          scope.$emit('ez_zeroclipboard_copy');
        });
      });
    }
  };
}])
;
