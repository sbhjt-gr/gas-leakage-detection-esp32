angular.module("lumx.switch").run(['$templateCache', function(a) { a.put('switch.html', '<div class="switch switch--{{ lxSwitch.lxColor }} switch--{{ lxSwitch.lxPosition }}"\n' +
    '     ng-class="{ \'switch--theme-light\': !lxSwitch.lxTheme || lxSwitch.lxTheme === \'light\',\n' +
    '                 \'switch--theme-dark\': lxSwitch.lxTheme === \'dark\' }">\n' +
    '    <input id="{{ lxSwitch.getSwitchId() }}"\n' +
    '           type="checkbox"\n' +
    '           class="switch__input"\n' +
    '           name="{{ lxSwitch.name }}"\n' +
    '           ng-model="lxSwitch.ngModel"\n' +
    '           ng-true-value="{{ lxSwitch.ngTrueValue }}"\n' +
    '           ng-false-value="{{ lxSwitch.ngFalseValue }}"\n' +
    '           ng-change="lxSwitch.triggerNgChange()"\n' +
    '           ng-disabled="lxSwitch.ngDisabled">\n' +
    '\n' +
    '    <label for="{{ lxSwitch.getSwitchId() }}" class="switch__label" ng-transclude ng-if="!lxSwitch.getSwitchHasChildren()"></label>\n' +
    '    <ng-transclude-replace ng-if="lxSwitch.getSwitchHasChildren()"></ng-transclude-replace>\n' +
    '</div>\n' +
    '');
	a.put('switch-label.html', '<label for="{{ lxSwitchLabel.getSwitchId() }}" class="switch__label" ng-transclude></label>\n' +
    '');
	a.put('switch-help.html', '<span class="switch__help" ng-transclude></span>\n' +
    '');
	 }]);