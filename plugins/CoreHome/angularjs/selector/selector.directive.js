/*!
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

/**
 *
 */
(function () {
    angular.module('piwikApp').directive('piwikSelector', piwikSelector);

    function piwikSelector($window){

        return {
            transclude: true,
            replace: true,
            restrict: 'A',
            scope: {
                menuTitle: '@',
                tooltip: '@',
                icon: '@',
                loading: '=',
                expandOnHover: '='
            },
            templateUrl: 'plugins/CoreHome/angularjs/selector/selector.directive.html?cb=' + piwik.cacheBuster,
            link: function(scope, element, attrs) {

                scope.toggleVisibility = function ()
                {
                    scope.$eval('view.showDropdown = !view.showDropdown');
                };
            }
        };
    }
})();
