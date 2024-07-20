angular.module("lumx.search-filter").run(['$templateCache', function(a) { a.put('search-filter.html', '<div class="search-filter" ng-class="lxSearchFilter.getClass()">\n' +
    '    <div class="search-filter__container">\n' +
    '        <div class="search-filter__button">\n' +
    '            <lx-button type="submit" lx-size="l" lx-color="{{ lxSearchFilter.color }}" lx-type="icon" ng-click="lxSearchFilter.openInput()">\n' +
    '                <i class="mdi mdi-magnify"></i>\n' +
    '            </lx-button>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="search-filter__input" ng-transclude></div>\n' +
    '\n' +
    '        <div class="search-filter__clear">\n' +
    '            <lx-button type="button" lx-size="l" lx-color="{{ lxSearchFilter.color }}" lx-type="icon" ng-click="lxSearchFilter.clearInput()">\n' +
    '                <i class="mdi mdi-close"></i>\n' +
    '            </lx-button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="search-filter__loader" ng-if="lxSearchFilter.isLoading">\n' +
    '        <lx-progress lx-type="linear"></lx-progress>\n' +
    '    </div>\n' +
    '\n' +
    '    <lx-dropdown id="{{ lxSearchFilter.dropdownId }}" lx-effect="none" lx-width="100%" ng-if="lxSearchFilter.autocomplete">\n' +
    '        <lx-dropdown-menu class="search-filter__autocomplete-list">\n' +
    '            <ul>\n' +
    '                <li ng-repeat="item in lxSearchFilter.autocompleteList track by $index">\n' +
    '                    <a class="search-filter__autocomplete-item"\n' +
    '                       ng-class="{ \'search-filter__autocomplete-item--is-active\': lxSearchFilter.activeChoiceIndex === $index }"\n' +
    '                       ng-click="lxSearchFilter.selectItem(item)"\n' +
    '                       ng-bind-html="item | lxSearchHighlight:lxSearchFilter.modelController.$viewValue:lxSearchFilter.icon"></a>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </lx-dropdown-menu>\n' +
    '    </lx-dropdown>\n' +
    '</div>');
	 }]);