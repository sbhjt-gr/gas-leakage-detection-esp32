angular.module("lumx.file-input").run(['$templateCache', function(a) { a.put('file-input.html', '<div class="input-file">\n' +
    '    <span class="input-file__label">{{ lxFileInput.label }}</span>\n' +
    '    <span class="input-file__filename">{{ lxFileInput.fileName }}</span>\n' +
    '    <input type="file" class="input-file__input" accept="{{ lxFileInput.accept }}">\n' +
    '</div>\n' +
    '');
	 }]);