angular.module("lumx.stepper").run(['$templateCache', function(a) { a.put('stepper.html', '<div class="lx-stepper" ng-class="lxStepper.getClasses()">\n' +
    '    <div class="lx-stepper__header" ng-if="lxStepper.layout === \'horizontal\'">\n' +
    '        <div class="lx-stepper__nav">\n' +
    '            <lx-step-nav lx-active-index="{{ lxStepper.activeIndex }}" lx-step="step" ng-repeat="step in lxStepper.steps"></lx-step-nav>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="lx-stepper__feedback" ng-if="lxStepper.steps[lxStepper.activeIndex].feedback">\n' +
    '            <span>{{ lxStepper.steps[lxStepper.activeIndex].feedback }}</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="lx-stepper__steps" ng-transclude></div>\n' +
    '</div>');
	a.put('step.html', '<div class="lx-step" ng-class="lxStep.getClasses()">\n' +
    '    <div class="lx-step__nav" ng-if="lxStep.parent.layout === \'vertical\'">\n' +
    '        <lx-step-nav lx-active-index="{{ lxStep.parent.activeIndex }}" lx-step="lxStep.step"></lx-step-nav>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="lx-step__wrapper" ng-if="lxStep.parent.activeIndex === lxStep.step.index">\n' +
    '        <div class="lx-step__content">\n' +
    '            <ng-transclude></ng-transclude>\n' +
    '\n' +
    '            <div class="lx-step__progress" ng-if="lxStep.step.isLoading">\n' +
    '                <lx-progress lx-type="circular"></lx-progress>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="lx-step__actions" ng-if="lxStep.parent.activeIndex === lxStep.step.index && lxStep.parent.controls">\n' +
    '            <div class="lx-step__action lx-step__action--continue">\n' +
    '                <lx-button ng-click="lxStep.submitStep()" ng-disabled="lxStep.isLoading">{{ lxStep.parent.labels.continue }}</lx-button>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="lx-step__action lx-step__action--cancel" ng-if="lxStep.parent.cancel">\n' +
    '                <lx-button lx-color="black" lx-type="flat" ng-click="lxStep.parent.cancel()" ng-disabled="lxStep.isLoading">{{ lxStep.parent.labels.cancel }}</lx-button>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="lx-step__action lx-step__action--back" ng-if="lxStep.parent.isLinear">\n' +
    '                <lx-button lx-color="black" lx-type="flat" ng-click="lxStep.previousStep()" ng-disabled="lxStep.isLoading || lxStep.step.index === 0">{{ lxStep.parent.labels.back }}</lx-button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
	a.put('step-nav.html', '<div class="lx-step-nav" ng-click="lxStepNav.parent.goToStep(lxStepNav.step.index)" ng-class="lxStepNav.getClasses()" lx-ripple>\n' +
    '    <div class="lx-step-nav__indicator lx-step-nav__indicator--index" ng-if="lxStepNav.step.isValid === undefined">\n' +
    '        <span>{{ lxStepNav.step.index + 1 }}</span>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="lx-step-nav__indicator lx-step-nav__indicator--icon" ng-if="lxStepNav.step.isValid === true">\n' +
    '        <lx-icon lx-id="check" ng-if="!lxStepNav.step.isEditable"></lx-icon>\n' +
    '        <lx-icon lx-id="pencil" ng-if="lxStepNav.step.isEditable"></lx-icon>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="lx-step-nav__indicator lx-step-nav__indicator--error" ng-if="lxStepNav.step.isValid === false">\n' +
    '        <lx-icon lx-id="alert"></lx-icon>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="lx-step-nav__wrapper">\n' +
    '        <div class="lx-step-nav__label">\n' +
    '            <span>{{ lxStepNav.step.label }}</span>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="lx-step-nav__state">\n' +
    '            <span ng-if="(lxStepNav.step.isValid === undefined || lxStepNav.step.isValid === true) && lxStepNav.step.isOptional">{{ lxStepNav.parent.labels.optional }}</span>\n' +
    '            <span ng-if="lxStepNav.step.isValid === false">{{ lxStepNav.step.errorMessage }}</span>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	 }]);