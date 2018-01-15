webpackJsonp([0],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article(url, description, tags) {
        this.description = description;
        this.tags = tags;
        this.url = url;
    }
    Object.defineProperty(Article.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    Article.prototype.toJson = function () {
        return {
            description: this.description,
            tags: this.tags,
            url: this.url
        };
    };
    return Article;
}());

//# sourceMappingURL=Article.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_article_add_article__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articles_articles__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.addArticleRoot = __WEBPACK_IMPORTED_MODULE_1__add_article_add_article__["a" /* AddArticlePage */];
        this.articlesRoot = __WEBPACK_IMPORTED_MODULE_2__articles_articles__["a" /* ArticlesPage */];
        this.searchRoot = __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="searchRoot" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="addArticleRoot" tabTitle="Add" tabIcon="add"></ion-tab>\n  <ion-tab [root]="articlesRoot" tabTitle="Articles" tabIcon="document"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Article__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddArticlePage = (function () {
    function AddArticlePage(navCtrl, articlesService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.articlesService = articlesService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.article = {};
    }
    AddArticlePage.prototype.formSubmit = function () {
        var tags = this.article['tags'];
        var tagsList = tags.split(',');
        var tag;
        for (var i = 0; i < tagsList.length; i++) {
            tag = tagsList[i].trim();
            if (tag.length === 0) {
                tagsList.splice(i, 1);
            }
            else {
                tagsList[i] = tag;
            }
        }
        var _article = new __WEBPACK_IMPORTED_MODULE_3__classes_Article__["a" /* Article */](this.article['url'], this.article['description'], tagsList);
        this.addArticle(_article);
    };
    AddArticlePage.prototype.addArticle = function (article) {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'Adding article...'
        });
        this.loader.present();
        this.articlesService.addArticle(article)
            .subscribe(function (data) { return _this.addArticleNext(data); }, function (err) { return _this.addArticleError(err); }, function () { return _this.loader.dismiss(); });
    };
    AddArticlePage.prototype.addArticleNext = function (data) {
        var alert = this.alertCtrl.create({
            title: 'Article Added!',
            buttons: ['OK']
        });
        alert.present();
        this.article = {};
    };
    AddArticlePage.prototype.addArticleError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'There was a problem adding the article :(',
            buttons: ['OK']
        });
        alert.present();
    };
    AddArticlePage.prototype.tagsKeyUp = function (event) {
        if (event) {
            if (event.key === ',') {
                console.log('comma');
            }
        }
    };
    AddArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-article',template:/*ion-inline-start:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/pages/add-article/add-article.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add an Article</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form (ngSubmit)="formSubmit()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>URL</ion-label>\n\n        <ion-input\n          [(ngModel)]="article.url"\n          name="url"\n          title="URL"\n          type="url"\n        ></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Description/Summary</ion-label>\n\n        <ion-textarea\n          [(ngModel)]="article.description"\n          name="subject"\n          title="Description/Summary"\n          type="text"\n        ></ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Tags (comma separated)</ion-label>\n\n        <ion-input\n          [(ngModel)]="article.tags"\n          (keyup)="tagsKeyUp($event)"\n          name="tags"\n          title="Tags (comma separated)"\n          type="text">\n        </ion-input>\n\n      </ion-item>\n\n      <button ion-button type="submit" block>Add Article</button>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/pages/add-article/add-article.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticlesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
    ], AddArticlePage);
    return AddArticlePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=add-article.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticlesPage = (function () {
    function ArticlesPage(navCtrl, articlesService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.articlesService = articlesService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.articleList = [];
    }
    ArticlesPage.prototype.ngOnInit = function () {
        this.getAllArticles();
    };
    ArticlesPage.prototype.getAllArticles = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'Getting articles...'
        });
        this.loader.present();
        this.articlesService.getAllArticles()
            .subscribe(function (data) { return _this.getAllArticlesNext(data); }, function (err) { return _this.getAllArticlesError(err); }, function () { return _this.loader.dismiss(); });
    };
    ArticlesPage.prototype.getAllArticlesNext = function (data) {
        this.articleList = data;
    };
    ArticlesPage.prototype.getAllArticlesError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'There was a problem getting the articles :(',
            buttons: ['OK']
        });
        alert.present();
    };
    ArticlesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-articles',template:/*ion-inline-start:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/pages/articles/articles.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Articles</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Browse Articles</h2>\n  <ul>\n\n    <li *ngFor="let article of articleList">\n\n      <article\n        [article]="article"\n      ></article>\n\n    </li>\n\n  </ul>\n</ion-content>\n'/*ion-inline-end:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/pages/articles/articles.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticlesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
    ], ArticlesPage);
    return ArticlesPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=articles.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Article__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(navCtrl, articlesService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.articlesService = articlesService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tagList = [];
        this.articleList = [];
    }
    SearchPage.prototype.addTag = function (tag) {
        if (tag) {
            this.tagList.push(tag);
        }
        this.getArticlesByTags(this.tagList);
        this.searchTag = null;
    };
    SearchPage.prototype.getArticlesByTags = function (tags) {
        var _this = this;
        if (tags.length === 0) {
            this.populateArticles([]);
            return;
        }
        this.loader = this.loadingCtrl.create({
            content: 'Getting articles...'
        });
        this.loader.present();
        this.articlesService.getByTags(tags)
            .subscribe(function (data) { return _this.getArticlesByTagsNext(data); }, function (err) { return _this.getArticlesByTagsError(err); }, function () { return _this.loader.dismiss(); });
    };
    SearchPage.prototype.getArticlesByTagsNext = function (data) {
        this.populateArticles(data);
    };
    SearchPage.prototype.getArticlesByTagsError = function (err) {
        var alert = this.alertCtrl.create({
            title: 'There was a problem getting the articles :(',
            buttons: ['OK']
        });
        alert.present();
    };
    SearchPage.prototype.populateArticles = function (articles) {
        var _articles = [];
        var _article;
        for (var _i = 0, articles_1 = articles; _i < articles_1.length; _i++) {
            var article = articles_1[_i];
            _article = new __WEBPACK_IMPORTED_MODULE_3__classes_Article__["a" /* Article */](article.url, article.description, article.tags);
            _articles.push(_article);
        }
        this.articleList = _articles;
    };
    SearchPage.prototype.removeTagFromList = function (tag) {
        var index = this.tagList.indexOf(tag);
        if (index === -1) {
            console.log('how!');
        }
        else {
            this.tagList.splice(index, 1);
        }
        this.getArticlesByTags(this.tagList);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/pages/search/search.html"*/'<ion-header>\n  <ion-toolbar>\n\n    <ion-searchbar\n      [(ngModel)]="searchTag"\n      (search)="addTag(searchTag)"\n      placeholder="Add a Tag"\n      [showCancelButton]="false"\n    ></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button\n        (click)="addTag(searchTag)"\n        color="royal"\n        icon-only\n        ion-button\n      >\n        <ion-icon name="add"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <search-tags-container\n    [searchTags]="tagList"\n    (removeTagEmitter)="removeTagFromList($event)"\n  ></search-tags-container>\n\n  <ul>\n\n    <li *ngFor="let article of articleList">\n\n      <article\n        [article]="article"\n      ></article>\n\n    </li>\n\n  </ul>\n\n  <div *ngIf="debug">\n    <h2>Debug</h2>\n    <pre>{{debug | json}}</pre>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticlesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
    ], SearchPage);
    return SearchPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_article_add_article__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_articles_articles__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_SearchTagsContainer_search_tags_container_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Article_article_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ArticleTagsContainer_article_tags_container_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_articles_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var declareAndEntry = [
    __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_6__pages_add_article_add_article__["a" /* AddArticlePage */],
    __WEBPACK_IMPORTED_MODULE_7__pages_articles_articles__["a" /* ArticlesPage */],
    __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */],
    __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: declareAndEntry.concat([
                __WEBPACK_IMPORTED_MODULE_11__components_Article_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_ArticleTagsContainer_article_tags_container_component__["a" /* ArticleTagsContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_SearchTagsContainer_search_tags_container_component__["a" /* SearchTagsContainerComponent */]
            ]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: declareAndEntry.slice(),
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__services_articles_service__["a" /* ArticlesService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {
    function Config() {
    }
    Config.HOST = 'http://192.241.226.75';
    Config.PORT = 80;
    Config.APIPATH = '/api';
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTagsContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchTagsContainerComponent = (function () {
    function SearchTagsContainerComponent() {
        this.removeTagEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SearchTagsContainerComponent.prototype.removeTagClicked = function (tag) {
        this.removeTagEmitter.next(tag);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], SearchTagsContainerComponent.prototype, "searchTags", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SearchTagsContainerComponent.prototype, "removeTagEmitter", void 0);
    SearchTagsContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'search-tags-container',template:/*ion-inline-start:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/components/SearchTagsContainer/search-tags-container.component.html"*/'<h1 *ngIf="searchTags.length === 0">\n\n  You haven\'t added any tags yet\n\n</h1>\n\n<ng-container *ngIf="searchTags.length > 0">\n\n  <ul>\n\n    <li\n      *ngFor="let tag of searchTags"\n    >\n\n      <button\n        (click)="removeTagClicked( tag )"\n        icon-right\n        ion-button\n        round\n      >\n        {{tag}}\n        <ion-icon name="close"></ion-icon>\n      </button>\n\n    </li>\n\n  </ul>\n\n</ng-container>\n\n'/*ion-inline-end:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/components/SearchTagsContainer/search-tags-container.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchTagsContainerComponent);
    return SearchTagsContainerComponent;
}());

//# sourceMappingURL=search-tags-container.component.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Article__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleComponent = (function () {
    function ArticleComponent(iab) {
        this.iab = iab;
    }
    ArticleComponent.prototype.linkClicked = function (event) {
        event.preventDefault();
        var browser = this.iab.create(this.article.url);
        browser.show();
        // browser.executeScript(...);
        // browser.insertCSS(...);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_Article__["a" /* Article */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_Article__["a" /* Article */]) === "function" && _a || Object)
    ], ArticleComponent.prototype, "article", void 0);
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'article',template:/*ion-inline-start:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/components/Article/article.component.html"*/'<ion-card>\n\n  <ion-card-header>\n\n    <a\n      href="{{article.url}}"\n      (click)="linkClicked($event)"\n    >{{article.url}}</a>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    <h2>{{article.description}}</h2>\n\n    <article-tags-container\n      [articleTags]="article.tags"\n    ></article-tags-container>\n\n  </ion-card-content>\n\n</ion-card>\n'/*ion-inline-end:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/components/Article/article.component.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _b || Object])
    ], ArticleComponent);
    return ArticleComponent;
    var _a, _b;
}());

//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleTagsContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleTagsContainerComponent = (function () {
    function ArticleTagsContainerComponent() {
        this.tagEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ArticleTagsContainerComponent.prototype.tagClicked = function (tag) {
        this.tagEmitter.next(tag);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ArticleTagsContainerComponent.prototype, "articleTags", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ArticleTagsContainerComponent.prototype, "tagEmitter", void 0);
    ArticleTagsContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'article-tags-container',template:/*ion-inline-start:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/components/ArticleTagsContainer/article-tags-container.component.html"*/'<ul>\n\n  <li\n    *ngFor="let tag of articleTags"\n  >\n\n    <button\n      (click)="tagClicked(tag)"\n      ion-button\n      color="secondary"\n      round\n    >\n      {{tag}}\n    </button>\n\n  </li>\n\n</ul>\n\n'/*ion-inline-end:"/Users/heyitsjeoff/IonicProjects/vegan_repo_app/src/components/ArticleTagsContainer/article-tags-container.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ArticleTagsContainerComponent);
    return ArticleTagsContainerComponent;
}());

//# sourceMappingURL=article-tags-container.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlesService = (function () {
    function ArticlesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        this.url = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].HOST + ':' + __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].PORT + __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].APIPATH + '/article';
    }
    ArticlesService.prototype.getByTags = function (tags) {
        return this.http.get(this.url, {
            headers: this.headers,
            params: { tag: tags }
        });
    };
    ArticlesService.prototype.getAllArticles = function () {
        return this.http.get(this.url);
    };
    ArticlesService.prototype.addArticle = function (article) {
        return this.http.post(this.url, article.toJson(), { headers: this.headers });
    };
    ArticlesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArticlesService);
    return ArticlesService;
}());

//# sourceMappingURL=articles.service.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map