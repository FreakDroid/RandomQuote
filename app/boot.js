System.register(['angular2/platform/browser', './component', 'angular2/http'], function(exports_1) {
    var browser_1, component_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (component_1_1) {
                component_1 = component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(component_1.App, [http_1.HTTP_PROVIDERS]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map