angular.module("lumx.checkbox").run(['$templateCache', function(a) { a.put('checkbox.html', '<div class="checkbox checkbox--{{ lxCheckbox.lxColor }}"\n' +
    '     ng-class="{ \'checkbox--theme-light\': !lxCheckbox.lxTheme || lxCheckbox.lxTheme === \'light\',\n' +
    '                 \'checkbox--theme-dark\': lxCheckbox.lxTheme === \'dark\' }">\n' +
    '    <input id="{{ lxCheckbox.getCheckboxId() }}"\n' +
    '           type="checkbox"\n' +
    '           class="checkbox__input"\n' +
    '           name="{{ lxCheckbox.name }}"\n' +
    '           ng-model="lxCheckbox.ngModel"\n' +
    '           ng-true-value="{{ lxCheckbox.ngTrueValue }}"\n' +
    '           ng-false-value="{{ lxCheckbox.ngFalseValue }}"\n' +
    '           ng-change="lxCheckbox.triggerNgChange()"\n' +
    '           ng-disabled="lxCheckbox.ngDisabled">\n' +
    '    <label for="{{ lxCheckbox.getCheckboxId() }}" class="checkbox__label" ng-transclude ng-if="!lxCheckbox.getCheckboxHasChildren()"></label>\n' +
    '    <ng-transclude-replace ng-if="lxCheckbox.getCheckboxHasChildren()"></ng-transclude-replace>\n' +
    '</div>\n' +
    '');
	a.put('checkbox-label.html', '<label for="{{ lxCheckboxLabel.getCheckboxId() }}" class="checkbox__label" ng-transclude></label>\n' +
    '');
	a.put('checkbox-help.html', '<span class="checkbox__help" ng-transclude></span>\n' +
    '');
	 }]);