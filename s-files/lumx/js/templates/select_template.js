angular.module("lumx.select").run(['$templateCache', function(a) { a.put('select.html', '<div class="lx-select"\n' +
    '     ng-class="{ \'lx-select--error\': lxSelect.error,\n' +
    '                 \'lx-select--fixed-label\': lxSelect.fixedLabel && lxSelect.viewMode === \'field\',\n' +
    '                 \'lx-select--is-active\': (!lxSelect.multiple && lxSelect.getSelectedModel()) || (lxSelect.multiple && lxSelect.getSelectedModel().length) || (lxSelect.choicesViewMode === \'panes\' && lxSelect.areChoicesOpened()),\n' +
    '                 \'lx-select--is-disabled\': lxSelect.ngDisabled,\n' +
    '                 \'lx-select--is-multiple\': lxSelect.multiple,\n' +
    '                 \'lx-select--is-unique\': !lxSelect.multiple,\n' +
    '                 \'lx-select--theme-light\': !lxSelect.theme || lxSelect.theme === \'light\',\n' +
    '                 \'lx-select--theme-dark\': lxSelect.theme === \'dark\',\n' +
    '                 \'lx-select--valid\': lxSelect.valid,\n' +
    '                 \'lx-select--custom-style\': lxSelect.customStyle,\n' +
    '                 \'lx-select--default-style\': !lxSelect.customStyle,\n' +
    '                 \'lx-select--view-mode-field\': !lxSelect.multiple || (lxSelect.multiple && lxSelect.viewMode === \'field\'),\n' +
    '                 \'lx-select--view-mode-chips\': lxSelect.multiple && lxSelect.viewMode === \'chips\',\n' +
    '                 \'lx-select--panes\': lxSelect.choicesViewMode === \'panes\',\n' +
    '                 \'lx-select--with-filter\': lxSelect.displayFilter,\n' +
    '                 \'lx-select--autocomplete\': lxSelect.autocomplete }">\n' +
    '    <span class="lx-select-label" ng-if="!lxSelect.autocomplete">\n' +
    '        {{ lxSelect.label }}\n' +
    '    </span>\n' +
    '\n' +
    '    <lx-dropdown id="dropdown-{{ lxSelect.uuid }}" lx-width="{{ (lxSelect.choicesViewMode === \'panes\') ? \'\' : \'100%\' }}"\n' +
    '                 lx-effect="{{ lxSelect.autocomplete ? \'none\' : \'expand\' }}">\n' +
    '        <ng-transclude></ng-transclude>\n' +
    '    </lx-dropdown>\n' +
    '</div>\n' +
    '');
	a.put('select-selected.html', '<div>\n' +
    '    <lx-dropdown-toggle ng-if="::!lxSelectSelected.parentCtrl.autocomplete">\n' +
    '        <ng-include src="\'select-selected-content.html\'"></ng-include>\n' +
    '    </lx-dropdown-toggle>\n' +
    '\n' +
    '    <ng-include src="\'select-selected-content.html\'" ng-if="::lxSelectSelected.parentCtrl.autocomplete"></ng-include>\n' +
    '</div>\n' +
    '');
	a.put('select-selected-content.html', '<div class="lx-select-selected-wrapper"\n' +
    '     ng-class="{ \'lx-select-selected-wrapper--with-filter\': !lxSelectSelected.parentCtrl.ngDisabled && lxSelectSelected.parentCtrl.areChoicesOpened() && (lxSelectSelected.parentCtrl.multiple || !lxSelectSelected.parentCtrl.getSelectedModel()) }"\n' +
    '     id="lx-select-selected-wrapper-{{ lxSelectSelected.parentCtrl.uuid }}">\n' +
    '    <div class="lx-select-selected"\n' +
    '         ng-if="!lxSelectSelected.parentCtrl.multiple">\n' +
    '        <span class="lx-select-selected__value"\n' +
    '              ng-bind-html="lxSelectSelected.parentCtrl.displaySelected()"\n' +
    '              ng-if="lxSelectSelected.parentCtrl.getSelectedModel()"></span>\n' +
    '\n' +
    '        <a class="lx-select-selected__clear"\n' +
    '           ng-click="lxSelectSelected.clearModel($event)"\n' +
    '           ng-if="lxSelectSelected.parentCtrl.allowClear && lxSelectSelected.parentCtrl.getSelectedModel()">\n' +
    '            <i class="mdi mdi-close-circle"></i>\n' +
    '        </a>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="lx-select-selected" ng-if="lxSelectSelected.parentCtrl.multiple">\n' +
    '        <span class="lx-select-selected__tag"\n' +
    '              ng-class="{ \'lx-select-selected__tag--is-active\': lxSelectSelected.parentCtrl.activeSelectedIndex === $index }"\n' +
    '              ng-click="lxSelectSelected.removeSelected(selected, $event)"\n' +
    '              ng-repeat="selected in lxSelectSelected.parentCtrl.getSelectedModel()"\n' +
    '              ng-bind-html="lxSelectSelected.parentCtrl.displaySelected(selected)"></span>\n' +
    '\n' +
    '        <input type="text"\n' +
    '               placeholder="{{ ::lxSelectSelected.parentCtrl.label }}"\n' +
    '               class="lx-select-selected__filter"\n' +
    '               ng-model="lxSelectSelected.parentCtrl.filterModel"\n' +
    '               ng-change="lxSelectSelected.parentCtrl.updateFilter()"\n' +
    '               ng-keydown="lxSelectSelected.parentCtrl.keyEvent($event)"\n' +
    '               ng-if="lxSelectSelected.parentCtrl.autocomplete && !lxSelectSelected.parentCtrl.ngDisabled">\n' +
    '    </div>\n' +
    '\n' +
    '    <lx-search-filter lx-dropdown-filter class="lx-select-selected__filter" ng-if="lxSelectSelected.parentCtrl.choicesViewMode === \'panes\' && !lxSelectSelected.parentCtrl.ngDisabled && lxSelectSelected.parentCtrl.areChoicesOpened() && (lxSelectSelected.parentCtrl.multiple || !lxSelectSelected.parentCtrl.getSelectedModel())">\n' +
    '        <input type="text"\n' +
    '               ng-model="lxSelectSelected.parentCtrl.filterModel"\n' +
    '               ng-change="lxSelectSelected.parentCtrl.updateFilter()"\n' +
    '               lx-stop-propagation="click">\n' +
    '    </lx-search-filter>\n' +
    '</div>\n' +
    '');
	a.put('select-choices.html', '<lx-dropdown-menu class="lx-select-choices"\n' +
    '                  ng-class="{ \'lx-select-choices--custom-style\': lxSelectChoices.parentCtrl.choicesCustomStyle,\n' +
    '                              \'lx-select-choices--default-style\': !lxSelectChoices.parentCtrl.choicesCustomStyle,\n' +
    '                              \'lx-select-choices--is-multiple\': lxSelectChoices.parentCtrl.multiple,\n' +
    '                              \'lx-select-choices--is-unique\': !lxSelectChoices.parentCtrl.multiple,\n' +
    '                              \'lx-select-choices--list\': lxSelectChoices.parentCtrl.choicesViewMode === \'list\',\n' +
    '                              \'lx-select-choices--multi-panes\': lxSelectChoices.parentCtrl.choicesViewMode === \'panes\' }">\n' +
    '    <ul ng-if="::lxSelectChoices.parentCtrl.choicesViewMode === \'list\'">\n' +
    '        <li class="lx-select-choices__filter" ng-if="::lxSelectChoices.parentCtrl.displayFilter && !lxSelectChoices.parentCtrl.autocomplete">\n' +
    '            <lx-search-filter lx-dropdown-filter>\n' +
    '                <input type="text" ng-model="lxSelectChoices.parentCtrl.filterModel" ng-change="lxSelectChoices.parentCtrl.updateFilter()">\n' +
    '            </lx-search-filter>\n' +
    '        </li>\n' +
    '        \n' +
    '        <div ng-if="::lxSelectChoices.isArray()">\n' +
    '            <li class="lx-select-choices__choice"\n' +
    '                ng-class="{ \'lx-select-choices__choice--is-selected\': lxSelectChoices.parentCtrl.isSelected(choice),\n' +
    '                            \'lx-select-choices__choice--is-disabled\': !lxSelectChoices.parentCtrl.isSelected(choice) && lxSelectChoices.parentCtrl.isMaxSelected(),\n' +
    '                            \'lx-select-choices__choice--is-focus\': lxSelectChoices.parentCtrl.activeChoiceIndex === $index }"\n' +
    '                ng-repeat="choice in lxSelectChoices.parentCtrl.choices | filterChoices:lxSelectChoices.parentCtrl.filter:lxSelectChoices.parentCtrl.filterModel"\n' +
    '                ng-bind-html="::lxSelectChoices.parentCtrl.displayChoice(choice)"\n' +
    '                ng-click="lxSelectChoices.parentCtrl.toggleChoice(choice, $event)"></li>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-if="::!lxSelectChoices.isArray()">\n' +
    '            <li class="lx-select-choices__subheader"\n' +
    '                ng-repeat-start="(subheader, children) in lxSelectChoices.parentCtrl.choices"\n' +
    '                ng-bind-html="::lxSelectChoices.parentCtrl.displaySubheader(subheader)"></li>\n' +
    '\n' +
    '            <li class="lx-select-choices__choice"\n' +
    '                ng-class="{ \'lx-select-choices__choice--is-selected\': lxSelectChoices.parentCtrl.isSelected(choice),\n' +
    '                            \'lx-select-choices__choice--is-focus\': lxSelectChoices.parentCtrl.activeChoiceIndex === $index }"\n' +
    '                ng-repeat-end\n' +
    '                ng-repeat="choice in children | filterChoices:lxSelectChoices.parentCtrl.filter:lxSelectChoices.parentCtrl.filterModel"\n' +
    '                ng-bind-html="::lxSelectChoices.parentCtrl.displayChoice(choice)"\n' +
    '                ng-click="lxSelectChoices.parentCtrl.toggleChoice(choice, $event)"></li>\n' +
    '        </div>\n' +
    '\n' +
    '        <li class="lx-select-choices__subheader" ng-if="lxSelectChoices.parentCtrl.helperDisplayable()">\n' +
    '            {{ lxSelectChoices.parentCtrl.helperMessage }}\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <div class="lx-select-choices__panes-wrapper" ng-if="lxSelectChoices.parentCtrl.choicesViewMode === \'panes\' && lxSelectChoices.parentCtrl.choicesViewSize === \'large\'" lx-stop-propagation="click touchstart touchend">\n' +
    '        <div class="lx-select-choices__loader" ng-if="lxSelectChoices.parentCtrl.loading">\n' +
    '            <lx-progress lx-type="circular" lx-color="white" lx-diameter="60"></lx-progress>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="lx-select-choices__panes-container" ng-if="!lxSelectChoices.parentCtrl.loading">\n' +
    '            <div class="lx-select-choices__pane lx-select-choices__pane-{{ $index }}"\n' +
    '                 ng-class="{ \'lx-select-choices__pane--is-filtering\': lxSelectChoices.parentCtrl.matchingPaths !== undefined,\n' +
    '                             \'lx-select-choices__pane--first\': $first,\n' +
    '                             \'lx-select-choices__pane--last\': $last }"\n' +
    '                 ng-repeat="pane in lxSelectChoices.parentCtrl.panes">\n' +
    '                <div ng-repeat="(label, items) in pane"\n' +
    '                   class="lx-select-choices__pane-choice"\n' +
    '                   ng-class="{ \'lx-select-choices__pane-choice--is-selected\': lxSelectChoices.parentCtrl.isPaneToggled($parent.$index, label) || lxSelectChoices.parentCtrl.isSelected(items) || ($parent.$last && lxSelectChoices.parentCtrl.activeChoiceIndex === $index),\n' +
    '                               \'lx-select-choices__pane-choice--is-matching\': lxSelectChoices.parentCtrl.isMatchingPath($parent.$index, label),\n' +
    '                               \'lx-select-choices__pane-choice--is-leaf\': lxSelectChoices.isArray(pane) }"\n' +
    '                   ng-bind-html="(lxSelectChoices.isArray(pane)) ? lxSelectChoices.parentCtrl.displayChoice(items) : lxSelectChoices.parentCtrl.displaySubheader(label)"\n' +
    '                   ng-click="lxSelectChoices.parentCtrl.togglePane($event, $parent.$index, label, true)">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="lx-select-choices__panes-wrapper" ng-if="lxSelectChoices.parentCtrl.choicesViewMode === \'panes\' && lxSelectChoices.parentCtrl.choicesViewSize === \'small\'" lx-stop-propagation="click touchstart touchend">\n' +
    '        <div class="lx-select-choices__loader" ng-if="lxSelectChoices.parentCtrl.loading">\n' +
    '            <lx-progress lx-type="circular" lx-color="white" lx-diameter="60"></lx-progress>\n' +
    '        </div>\n' +
    '        <div class="lx-select-choices__panes-container" ng-if="!lxSelectChoices.parentCtrl.loading">\n' +
    '            <div class="lx-select-choices__pane lx-select-choices__pane"\n' +
    '                ng-class="{ \'lx-select-choices__pane--is-filtering\': lxSelectChoices.parentCtrl.matchingPaths !== undefined,\n' +
    '                            \'lx-select-choices__pane--first\': $first,\n' +
    '                            \'lx-select-choices__pane--last\': $last }"\n' +
    '                ng-repeat="pane in lxSelectChoices.parentCtrl.panes">\n' +
    '                <div ng-include="\'select-choices-accordion.html\'" ng-init="level = 0"></div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <lx-progress lx-type="linear" lx-color="primary" ng-if="lxSelectChoices.parentCtrl.loading"></lx-progress>\n' +
    '</lx-dropdown-menu>\n' +
    '');
	a.put('select-choices-accordion.html', '<div ng-repeat="(label, items) in pane">\n' +
    '    <div class="lx-select-choices__pane-choice lx-select-choices__pane-{{ level }}"\n' +
    '         ng-class="{ \'lx-select-choices__pane-choice--is-selected\': lxSelectChoices.parentCtrl.isPaneToggled(level, label) || lxSelectChoices.parentCtrl.isSelected(items),\n' +
    '                \'lx-select-choices__pane-choice--is-matching\': lxSelectChoices.parentCtrl.isMatchingPath(level, label),\n' +
    '                \'lx-select-choices__pane-choice--is-leaf\': lxSelectChoices.isArray(pane) }"\n' +
    '         ng-bind-html="(lxSelectChoices.isArray(pane)) ? lxSelectChoices.parentCtrl.displayChoice(items) : lxSelectChoices.parentCtrl.displaySubheader(label)"\n' +
    '         ng-click="lxSelectChoices.parentCtrl.togglePane($event, level, label, true)"></div>\n' +
    '\n' +
    '    <div ng-include="\'select-choices-accordion.html\'"\n' +
    '         ng-if="!lxSelectChoices.isArray(pane) && lxSelectChoices.parentCtrl.isPaneToggled(level,label)"\n' +
    '         ng-init="pane = items; level = level + 1"></div>\n' +
    '</div>\n' +
    '');
	 }]);