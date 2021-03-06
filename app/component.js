System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var App, quotes;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            App = (function () {
                function App(http) {
                    this.http = http;
                }
                App.prototype.myAlert = function () {
                    var _this = this;
                    this.http.get("http://quotes.rest/qod.json").map(function (res) { return res.json(); })
                        .subscribe(function (data) { _this.quote = data.contents.quotes[0].quote; _this.author = data.contents.quotes[0].author; }, function (err) { return _this.logError(err); }, function () { return console.log('Random Quote Complete'); });
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "<ul>\n                <li (click)='myAlert()'> Helow World</li>\n             </ul>\n             <div>\n              <spam>{{quote}}</spam>\n              <br>\n              <spam>{{author}}</spam>\n             </div>",
                        providers: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], App);
                return App;
            })();
            exports_1("App", App);
            quotes = (function () {
                function quotes(quote, author) {
                    this.quote = quote;
                    this.author = author;
                }
                return quotes;
            })();
        }
    }
});
//# sourceMappingURL=component.js.map