angular.module("lumx.tabs").run(['$templateCache', function(a) { a.put('tabs.html', '<div class="tabs tabs--layout-{{ lxTabs.layout }} tabs--theme-{{ lxTabs.theme }} tabs--color-{{ lxTabs.color }} tabs--indicator-{{ lxTabs.indicator }}">\n' +
    '    <div class="tabs__panes" ng-if="lxTabs.viewMode === \'gather\' && lxTabs.bottomPosition" ng-transclude></div>\n' +
    '    <div class="tabs__links">\n' +
    '        <a class="tabs__link"\n' +
    '           ng-class="{ \'tabs__link--is-active\': lxTabs.tabIsActive(tab.index),\n' +
    '                       \'tabs__link--is-disabled\': tab.disabled }"\n' +
    '           ng-repeat="tab in lxTabs.tabs"\n' +
    '           ng-click="lxTabs.setActiveTab(tab)"\n' +
    '           lx-ripple>\n' +
    '           <i class="mdi mdi-{{ tab.icon }}" ng-if="tab.icon"></i>\n' +
    '           <span ng-if="tab.label">{{ tab.label }}</span>\n' +
    '        </a>\n' +
    '    </div>\n' +
    '    \n' +
    '    <div class="tabs__panes" ng-if="lxTabs.viewMode === \'gather\' && !lxTabs.bottomPosition" ng-transclude></div>\n' +
    '    <div class="tabs__indicator" ng-class="{\'tabs__indicator--top\': !lxTabs.bottomPosition, \'tabs__indicator--bottom\': lxTabs.bottomPosition}"></div>\n' +
    '</div>\n' +
    '');
	a.put('tabs-panes.html', '<div class="tabs tabs--separate">\n' +
    '    <div class="tabs__panes" ng-transclude></div>\n' +
    '</div>');
	a.put('tab.html', '<div class="tabs__pane" ng-class="{ \'tabs__pane--is-disabled\': lxTab.ngDisabled }">\n' +
    '    <div ng-if="lxTab.tabIsActive()" ng-transclude></div>\n' +
    '</div>\n' +
    '');
	a.put('tab-pane.html', '<div class="tabs__pane" ng-transclude></div>\n' +
    '');
	 }]);