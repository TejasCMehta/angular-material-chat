(function() {
  'use strict';

  angular
    .module('tube2srt')
    .directive('byMain', byMain);

  /** @ngInject */
  function byMain(){
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/main/main.html',
      controller: MainController,
      controllerAs: 'main'
    };

    return directive;

  /** @ngInject */
  function MainController($scope, $mdMedia, $mdSidenav, mobileDetector) {
    var main = this;
    $scope.$mdMedia = $mdMedia;
    main.toggleSidebar = toggleSidebar;
    main.isMobile = mobileDetector.detect();

    function toggleSidebar(){
      $mdSidenav('sidebar').toggle();
    }

    main.user = {
      name: faker.name.findName(),
      avatar: faker.image.avatar()
    };
  }
  }

})();
