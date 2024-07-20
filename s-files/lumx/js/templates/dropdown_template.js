angular.module("lumx.dropdown").run(['$templateCache', function(a) { a.put('dropdown.html', '<div class="dropdown"\n' +
    '     ng-class="{ \'dropdown--has-toggle\': lxDropdown.hasToggle,\n' +
    '                 \'dropdown--is-open\': lxDropdown.isOpen }"\n' +
    '     ng-transclude></div>\n' +
    '');
	a.put('dropdown-toggle.html', '<div class="dropdown-toggle" ng-transclude></div>\n' +
    '');
	a.put('dropdown-menu.html', '<div class="dropdown-menu">\n' +
    '    <div class="dropdown-menu__content" ng-transclude ng-if="lxDropdownMenu.parentCtrl.isOpen"></div>\n' +
    '</div>\n' +
    '');
	 }]);