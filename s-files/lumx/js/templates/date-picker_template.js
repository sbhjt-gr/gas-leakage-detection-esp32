angular.module("lumx.date-picker").run(['$templateCache', function(a) { a.put('date-picker.html', '<div class="lx-date">\n' +
    '    <!-- Date picker input -->\n' +
    '    <div class="lx-date-input" ng-click="lxDatePicker.openDatePicker()" ng-if="lxDatePicker.hasInput">\n' +
    '        <ng-transclude></ng-transclude>\n' +
    '    </div>\n' +
    '    \n' +
    '    <!-- Date picker -->\n' +
    '    <div class="lx-date-picker lx-date-picker--{{ lxDatePicker.color }}">\n' +
    '        <div ng-if="lxDatePicker.isOpen">\n' +
    '            <!-- Date picker: header -->\n' +
    '            <div class="lx-date-picker__header">\n' +
    '                <a class="lx-date-picker__current-year"\n' +
    '                   ng-class="{ \'lx-date-picker__current-year--is-active\': lxDatePicker.yearSelection }"\n' +
    '                   ng-click="lxDatePicker.displayYearSelection()">\n' +
    '                    {{ lxDatePicker.moment(lxDatePicker.ngModel).format(\'YYYY\') }}\n' +
    '                </a>\n' +
    '\n' +
    '                <a class="lx-date-picker__current-date"\n' +
    '                   ng-class="{ \'lx-date-picker__current-date--is-active\': !lxDatePicker.yearSelection }"\n' +
    '                   ng-click="lxDatePicker.hideYearSelection()">\n' +
    '                    {{ lxDatePicker.getDateFormatted() }}\n' +
    '                </a>\n' +
    '            </div>\n' +
    '            \n' +
    '            <!-- Date picker: content -->\n' +
    '            <div class="lx-date-picker__content">\n' +
    '                <!-- Calendar -->\n' +
    '                <div class="lx-date-picker__calendar" ng-if="!lxDatePicker.yearSelection">\n' +
    '                    <div class="lx-date-picker__nav">\n' +
    '                        <lx-button lx-size="l" lx-color="black" lx-type="icon" ng-click="lxDatePicker.previousMonth()">\n' +
    '                            <i class="mdi mdi-chevron-left"></i>\n' +
    '                        </lx-button>\n' +
    '\n' +
    '                        <span>{{ lxDatePicker.ngModelMoment.format(\'MMMM YYYY\') }}</span>\n' +
    '                        \n' +
    '                        <lx-button lx-size="l" lx-color="black" lx-type="icon" ng-click="lxDatePicker.nextMonth()">\n' +
    '                            <i class="mdi mdi-chevron-right"></i>\n' +
    '                        </lx-button>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="lx-date-picker__days-of-week">\n' +
    '                        <span ng-repeat="day in lxDatePicker.daysOfWeek">{{ day }}</span>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="lx-date-picker__days">\n' +
    '                        <span class="lx-date-picker__day lx-date-picker__day--is-empty"\n' +
    '                              ng-repeat="x in lxDatePicker.emptyFirstDays">&nbsp;</span>\n' +
    '\n' +
    '                        <div class="lx-date-picker__day"\n' +
    '                             ng-class="{ \'lx-date-picker__day--is-selected\': day.selected,\n' +
    '                                         \'lx-date-picker__day--is-today\': day.today && !day.selected,\n' +
    '                                         \'lx-date-picker__day--is-disabled\': day.disabled }"\n' +
    '                             ng-repeat="day in lxDatePicker.days">\n' +
    '                            <a ng-click="lxDatePicker.select(day)">{{ day ? day.format(\'D\') : \'\' }}</a>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <span class="lx-date-picker__day lx-date-picker__day--is-empty"\n' +
    '                              ng-repeat="x in lxDatePicker.emptyLastDays">&nbsp;</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- Year selection -->\n' +
    '                <div class="lx-date-picker__year-selector" ng-if="lxDatePicker.yearSelection">\n' +
    '                    <a class="lx-date-picker__year"\n' +
    '                         ng-class="{ \'lx-date-picker__year--is-active\': year == lxDatePicker.moment(lxDatePicker.ngModel).format(\'YYYY\') }"\n' +
    '                         ng-repeat="year in lxDatePicker.years"\n' +
    '                         ng-click="lxDatePicker.selectYear(year)"\n' +
    '                         ng-if="lxDatePicker.yearSelection">\n' +
    '                        {{ year }}\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <!-- Actions -->\n' +
    '            <div class="lx-date-picker__actions">\n' +
    '                <lx-button lx-color="{{ lxDatePicker.color }}" lx-type="flat" ng-click="lxDatePicker.closeDatePicker()">\n' +
    '                    Ok\n' +
    '                </lx-button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	 }]);