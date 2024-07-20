angular.module("lumx.data-table").run(['$templateCache', function(a) { a.put('data-table.html', '<div class="data-table-container">\n' +
    '    <table class="data-table"\n' +
    '           ng-class="{ \'data-table--bulk\': lxDataTable.bulk,\n' +
    '                       \'data-table--border\': lxDataTable.border,\n' +
    '                       \'data-table--thumbnail\': lxDataTable.thumbnail }">\n' +
    '        <thead>\n' +
    '            <tr ng-class="{ \'data-table__selectable-row\': lxDataTable.selectable,\n' +
    '                            \'data-table__selectable-row--is-selected\': lxDataTable.selectable && lxDataTable.allRowsSelected, }">\n' +
    '                <th align="center" ng-if="lxDataTable.thumbnail">\n' +
    '                    <lx-button class="data-table__checkbox"\n' +
    '                               lx-type="icon" lx-color="{{ lxDataTable.allRowsSelected ? \'accent\' : \'grey\' }}"\n' +
    '                               ng-click="lxDataTable.toggleAllSelected()"\n' +
    '                               ng-if="lxDataTable.selectable">\n' +
    '                        <lx-icon lx-id="checkbox-blank-outline" ng-if="!lxDataTable.allRowsSelected"></lx-icon>\n' +
    '                        <lx-icon lx-id="checkbox-marked" ng-if="lxDataTable.allRowsSelected"></lx-icon>\n' +
    '                    </lx-button>\n' +
    '                </th>\n' +
    '                <th align="center" ng-if="lxDataTable.selectable && !lxDataTable.thumbnail">\n' +
    '                    <lx-button class="data-table__checkbox"\n' +
    '                               lx-type="icon" lx-color="{{ lxDataTable.allRowsSelected ? \'accent\' : \'grey\' }}"\n' +
    '                               ng-click="lxDataTable.toggleAllSelected()">\n' +
    '                        <lx-icon lx-id="checkbox-blank-outline" ng-if="!lxDataTable.allRowsSelected"></lx-icon>\n' +
    '                        <lx-icon lx-id="checkbox-marked" ng-if="lxDataTable.allRowsSelected"></lx-icon>\n' +
    '                    </lx-button>\n' +
    '                </th>\n' +
    '                <th align="left"\n' +
    '                    ng-class=" { \'data-table__sortable-cell\': th.sortable,\n' +
    '                                 \'data-table__sortable-cell--asc\': th.sortable && th.sort === \'asc\',\n' +
    '                                 \'data-table__sortable-cell--desc\': th.sortable && th.sort === \'desc\' }"\n' +
    '                    ng-click="lxDataTable.sort(th)"\n' +
    '                    ng-repeat="th in lxDataTable.thead track by $index"\n' +
    '                    ng-if="!lxDataTable.thumbnail || (lxDataTable.thumbnail && $index != 0)">\n' +
    '                    <lx-icon lx-id="{{ th.icon }}" ng-if="th.icon"></lx-icon>\n' +
    '                    <span>{{ th.label }}</span>\n' +
    '                </th>\n' +
    '            </tr>\n' +
    '        </thead>\n' +
    '\n' +
    '        <tbody>\n' +
    '            <tr ng-class="{ \'data-table__selectable-row\': lxDataTable.selectable,\n' +
    '                            \'data-table__selectable-row--is-disabled\': lxDataTable.selectable && tr.lxDataTableDisabled,\n' +
    '                            \'data-table__selectable-row--is-selected\': lxDataTable.selectable && tr.lxDataTableSelected,\n' +
    '                            \'data-table__activable-row\': lxDataTable.activable,\n' +
    '                            \'data-table__activable-row--is-activated\': lxDataTable.activable && tr.lxDataTableActivated }"\n' +
    '                ng-repeat="tr in lxDataTable.tbody"\n' +
    '                ng-click="lxDataTable.toggleActivation(tr)">\n' +
    '                <td align="center" ng-if="lxDataTable.thumbnail">\n' +
    '                    <div class="data-table__thumbnail" ng-if="lxDataTable.thead[0].format" ng-bind-html="lxDataTable.$sce.trustAsHtml(lxDataTable.thead[0].format(tr))"></div>\n' +
    '\n' +
    '                    <lx-button class="data-table__checkbox"\n' +
    '                               lx-type="icon" lx-color="{{ tr.lxDataTableSelected ? \'accent\' : \'black\' }}"\n' +
    '                               ng-click="lxDataTable.toggleSelection(tr, undefined, $event)"\n' +
    '                               ng-if="lxDataTable.selectable && !tr.lxDataTableDisabled">\n' +
    '                        <lx-icon lx-id="checkbox-blank-outline" ng-if="!tr.lxDataTableSelected"></lx-icon>\n' +
    '                        <lx-icon lx-id="checkbox-marked" ng-if="tr.lxDataTableSelected"></lx-icon>\n' +
    '                    </lx-button>\n' +
    '                </td>\n' +
    '                <td align="center" ng-if="lxDataTable.selectable && !lxDataTable.thumbnail">\n' +
    '                    <lx-button class="data-table__checkbox"\n' +
    '                               lx-type="icon" lx-color="{{ tr.lxDataTableSelected ? \'accent\' : \'black\' }}"\n' +
    '                               ng-click="lxDataTable.toggleSelection(tr, undefined, $event)"\n' +
    '                               ng-disabled="tr.lxDataTableDisabled">\n' +
    '                        <lx-icon lx-id="checkbox-blank-outline" ng-if="!tr.lxDataTableSelected"></lx-icon>\n' +
    '                        <lx-icon lx-id="checkbox-marked" ng-if="tr.lxDataTableSelected"></lx-icon>\n' +
    '                    </lx-button>\n' +
    '                </td>\n' +
    '                <td align="left"\n' +
    '                    ng-repeat="th in lxDataTable.thead track by $index"\n' +
    '                    ng-if="!lxDataTable.thumbnail || (lxDataTable.thumbnail && $index != 0)">\n' +
    '                    <span ng-if="!th.format">{{ tr[th.name] }}</span>\n' +
    '                    <div ng-if="th.format" ng-bind-html="lxDataTable.$sce.trustAsHtml(th.format(tr))"></div>\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '</div>');
	 }]);