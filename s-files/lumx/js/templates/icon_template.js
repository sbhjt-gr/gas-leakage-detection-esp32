angular.module("lumx.icon").run(['$templateCache', function(a) { a.put('icon.html', '<i class="icon mdi" ng-class="lxIcon.getClass()"></i>');
	 }]);