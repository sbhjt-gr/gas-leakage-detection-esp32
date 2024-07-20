angular.module("lumx.fab").run(['$templateCache', function(a) { a.put('fab.html', '<div class="fab"\n' +
    '     ng-class="{ \'lx-fab--trigger-on-hover\': !lxFab.lxTriggerOnClick,\n' +
    '                 \'lx-fab--trigger-on-click\': lxFab.lxTriggerOnClick,\n' +
    '                 \'lx-fab--is-open\': lxFab.lxTriggerOnClick && lxFab.isOpen,\n' +
    '                 \'lx-fab--is-close\': lxFab.lxTriggerOnClick && !lxFab.isOpen }"\n' +
    '     ng-click="lxFab.toggleState()">\n' +
    '    <ng-transclude-replace></ng-transclude-replace>\n' +
    '</div>\n' +
    '');
	a.put('fab-trigger.html', '<div class="fab__primary" ng-transclude></div>\n' +
    '');
	a.put('fab-actions.html', '<div class="fab__actions fab__actions--{{ parentCtrl.lxDirection }}" ng-transclude></div>\n' +
    '');
	 }]);