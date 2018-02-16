webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_new_component_1 = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
var item_component_1 = __webpack_require__("../../../../../src/app/item/item.component.ts");
var user_show_component_1 = __webpack_require__("../../../../../src/app/user/user-show/user-show.component.ts");
var routes = [
    { path: '', pathMatch: 'full', component: user_component_1.UserComponent, children: [
            { path: '', pathMatch: 'full', component: user_new_component_1.UserNewComponent }
        ] },
    { path: 'user', component: user_component_1.UserComponent, children: [
            { path: 'new', component: user_new_component_1.UserNewComponent },
            { path: ':id', component: user_show_component_1.UserShowComponent }
        ] },
    { path: 'status', component: user_component_1.UserComponent, children: [
            { path: ':id', redirectTo: 'dashboard' }
        ] },
    { path: 'dashboard', pathMatch: 'full', component: item_component_1.ItemComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser(function (user) {
            if (!user) {
                return _this._router.navigate(['/']);
            }
            return _this._router.navigate(['/dashboard']);
        }, function (err) { console.log(err); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_new_component_1 = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var user_logout_component_1 = __webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.ts");
var item_component_1 = __webpack_require__("../../../../../src/app/item/item.component.ts");
var item_list_component_1 = __webpack_require__("../../../../../src/app/item/item-list/item-list.component.ts");
var item_new_component_1 = __webpack_require__("../../../../../src/app/item/item-new/item-new.component.ts");
var item_service_1 = __webpack_require__("../../../../../src/app/item/item.service.ts");
var user_list_component_1 = __webpack_require__("../../../../../src/app/user/user-list/user-list.component.ts");
var user_show_component_1 = __webpack_require__("../../../../../src/app/user/user-show/user-show.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                user_new_component_1.UserNewComponent,
                user_logout_component_1.UserLogoutComponent,
                item_component_1.ItemComponent,
                item_list_component_1.ItemListComponent,
                item_new_component_1.ItemNewComponent,
                user_list_component_1.UserListComponent,
                user_show_component_1.UserShowComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [user_service_1.UserService, item_service_1.ItemService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/item/item-list/item-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item/item-list/item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let item of items\">\n    <span *ngIf=\"item.completed\">[Done]</span>\n    <span *ngIf=\"!item.completed\">[Pending]</span>\n    {{ item._owner.name }} | {{ item.title }} | {{ item.description }} - {{ item.createdAt | date:'mediumDate':'-0600' }}\n    <button (click)=\"updateStatus(item._id)\">Toggle Status</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/item/item-list/item-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var item_service_1 = __webpack_require__("../../../../../src/app/item/item.service.ts");
var ItemListComponent = /** @class */ (function () {
    function ItemListComponent(_itemService) {
        this._itemService = _itemService;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._itemService.getItems(function (items) {
            _this.items = items;
        }, function (err) { console.log(err); });
    };
    ItemListComponent.prototype.updateStatus = function (itemid) {
        var _this = this;
        this._itemService.update(itemid, function (items) {
            _this.items = items;
        }, function (err) {
            console.log(err);
        });
    };
    ItemListComponent = __decorate([
        core_1.Component({
            selector: 'app-item-list',
            template: __webpack_require__("../../../../../src/app/item/item-list/item-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item/item-list/item-list.component.css")]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;


/***/ }),

/***/ "../../../../../src/app/item/item-new/item-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item/item-new/item-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form\n  (submit)=\"onSubmit(); createItem.resetForm()\"\n  #createItem=\"ngForm\"\n>\n  <input\n    placeholder=\"Title\"\n    name=\"title\"\n    type=\"text\"\n    required\n    minlength=\"5\"\n    [(ngModel)]=\"item.title\"\n    #title=\"ngModel\"\n  />\n  <input\n    placeholder=\"Description\"\n    name=\"description\"\n    type=\"text\"\n    required\n    minlength=\"10\"\n    [(ngModel)]=\"item.description\"\n    #description=\"ngModel\"\n  />\n  <select\n    name=\"tagged\"\n    type=\"text\"\n    [(ngModel)]=\"item.tagged\"\n    #tagged=\"ngModel\"\n  >\n    <option \n      *ngFor=\"let user of users; let i of index\"\n      value=\"{{user._id}}\"\n    >\n    {{ user.name }}\n    </option>\n\n  </select>\n  <button [disabled]=\"!createItem.valid\" type=\"submit\">Add to List</button>\n  \n\n</form>"

/***/ }),

/***/ "../../../../../src/app/item/item-new/item-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var item_1 = __webpack_require__("../../../../../src/app/item/item.ts");
var item_service_1 = __webpack_require__("../../../../../src/app/item/item.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ItemNewComponent = /** @class */ (function () {
    function ItemNewComponent(_userService, _itemService, _router) {
        this._userService = _userService;
        this._itemService = _itemService;
        this._router = _router;
    }
    ItemNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this._userService.currentUser;
        this.item = new item_1.Item();
        this._userService.getOtherUsers(function (users) { _this.users = users; }, function (err) { console.log(err); });
    };
    ItemNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._itemService.createItem(this.item, function (item) {
            //ASK MATT ABOUT THIS, CAN'T NAVIGATE TO DASHBOARD?
            _this._router.navigate(['/']);
            console.log("item-new added item:", item);
        }, function (err) {
            console.log(err);
        });
    };
    ItemNewComponent = __decorate([
        core_1.Component({
            selector: 'app-item-new',
            template: __webpack_require__("../../../../../src/app/item/item-new/item-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item/item-new/item-new.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            item_service_1.ItemService,
            router_1.Router])
    ], ItemNewComponent);
    return ItemNewComponent;
}());
exports.ItemNewComponent = ItemNewComponent;


/***/ }),

/***/ "../../../../../src/app/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<span>Bucket List</span>\r\n<button [routerLink]=\"['/dashboard']\">Home</button>\r\n<app-user-logout></app-user-logout>\r\n\r\n<p>Welcome, {{ user.name }}!</p>\r\n\r\n<app-item-new></app-item-new>\r\n\r\n<p>Before I kick the bucket I want to..</p>\r\n<app-item-list></app-item-list>\r\n\r\n<p>List of other users (Click to view profile):</p>\r\n<app-user-list></app-user-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/item/item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var ItemComponent = /** @class */ (function () {
    function ItemComponent(_userService) {
        this._userService = _userService;
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
        this.user = this._userService.currentUser;
    };
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'app-item',
            template: __webpack_require__("../../../../../src/app/item/item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;


/***/ }),

/***/ "../../../../../src/app/item/item.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var ItemService = /** @class */ (function () {
    function ItemService(_http) {
        this._http = _http;
        this.items = [];
    }
    ItemService.prototype.getItems = function (callback, errorback) {
        var _this = this;
        this._http.get('/items').subscribe(function (res) {
            var items = res.json();
            _this.items = items;
            callback(items);
        }, function (err) { errorback(err.json()); });
    };
    ItemService.prototype.update = function (itemid, callback, errorback) {
        this._http.get("/status/" + itemid).subscribe(function (res) {
            var items = res.json();
            console.log("item service items:", items);
            callback(items);
        }, function (err) { errorback(err.json()); });
    };
    ItemService.prototype.getUserItems = function (userid, callback, errorback) {
        this._http.get("/items/" + userid).subscribe(function (res) {
            var items = res.json();
            console.log("item service items:", items);
            callback(items);
        }, function (err) { errorback(err.json()); });
    };
    ItemService.prototype.createItem = function (item, callback, errorback) {
        var _this = this;
        this._http.post('/items', item).subscribe(function (res) {
            var item = res.json();
            _this.items.push(item);
            callback(item);
        }, function (err) { errorback(err.json()); });
    };
    ItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;


/***/ }),

/***/ "../../../../../src/app/item/item.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;


/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let user of users; let i = index\">\n    <a [routerLink]=\"['/user', user._id]\">{{ user.name }}</a>\n\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var UserListComponent = /** @class */ (function () {
    function UserListComponent(_userService) {
        this._userService = _userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getOtherUsers(function (users) { _this.users = users; }, function (err) { console.log(err); });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'app-user-list',
            template: __webpack_require__("../../../../../src/app/user/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"logout()\">Logout</button>"

/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var UserLogoutComponent = /** @class */ (function () {
    function UserLogoutComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    UserLogoutComponent.prototype.ngOnInit = function () {
    };
    UserLogoutComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            console.log(res);
            _this._router.navigate(['/']);
        }, function (err) { console.log(err); });
    };
    UserLogoutComponent = __decorate([
        core_1.Component({
            selector: 'app-user-logout',
            template: __webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], UserLogoutComponent);
    return UserLogoutComponent;
}());
exports.UserLogoutComponent = UserLogoutComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "small {\r\n    color: maroon;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form\n    (submit)=\"onSubmit(); createUser.resetForm()\"\n    #createUser=\"ngForm\"\n  >\n    <label>Name:</label>\n    <input\n      type=\"text\"\n      name=\"name\"\n      required\n      minlength=\"4\"\n      maxlength=\"15\"\n      [(ngModel)]=\"user.name\"\n      #name=\"ngModel\"\n    />\n\n    <button\n      class=\"user-new-submit\"\n      [disabled]=\"!createUser.valid\"\n    >Enter</button>\n  </form>\n  <small\n      class=\"errors\"\n      [hidden]=\"name.valid || (name.untouched && !createUser.submitted)\"\n    >Name required, minimum length of 4</small>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var UserNewComponent = /** @class */ (function () {
    function UserNewComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    UserNewComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
        if (this._userService.currentUser) {
            this._router.navigate(['/dashboard']);
        }
    };
    UserNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.createUser(this.user, function (user) {
            _this._router.navigate(['/dashboard']);
        }, function (err) { console.log(err); });
    };
    UserNewComponent = __decorate([
        core_1.Component({
            selector: 'app-user-new',
            template: __webpack_require__("../../../../../src/app/user/user-new/user-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-new/user-new.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], UserNewComponent);
    return UserNewComponent;
}());
exports.UserNewComponent = UserNewComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-show/user-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-show/user-show.component.html":
/***/ (function(module, exports) {

module.exports = "<span>Bucket List</span>\n<button [routerLink]=\"['/dashboard']\">Home</button>\n<app-user-logout></app-user-logout>\n\n<h2>{{ otherUser.name }}'s Bucket List</h2>\n\n<ul>\n    <li *ngFor=\"let item of items\">\n        <span *ngIf=\"item.completed\">[Done]</span>\n        <span *ngIf=\"!item.completed\">[Pending]</span>\n        {{ item._owner.name }} | {{ item.title }} | {{ item.description }} - {{ item.createdAt | date:'mediumDate':'-0600' }}\n        <button (click)=\"updateStatus(item._id)\">Toggle Status</button>\n    </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-show/user-show.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var item_service_1 = __webpack_require__("../../../../../src/app/item/item.service.ts");
var UserShowComponent = /** @class */ (function () {
    function UserShowComponent(_route, _userService, _itemService) {
        this._route = _route;
        this._userService = _userService;
        this._itemService = _itemService;
    }
    UserShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this._userService.getUserInfo(params.get('id'), function (user) {
                _this.otherUser = user[0];
            }, function (err) { console.log(err); _this.error.push(err); });
            _this._itemService.getUserItems(params.get('id'), function (items) {
                _this.items = items;
            }, function (err) { console.log(err); _this.error.push(err); });
        }, function (error) { console.log("user-show error:", error); });
    };
    UserShowComponent = __decorate([
        core_1.Component({
            selector: 'app-user-show',
            template: __webpack_require__("../../../../../src/app/user/user-show/user-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-show/user-show.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            user_service_1.UserService,
            item_service_1.ItemService])
    ], UserShowComponent);
    return UserShowComponent;
}());
exports.UserShowComponent = UserShowComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.createUser = function (user, callback, errorback) {
        var _this = this;
        this._http.post('/users', user).subscribe(function (res) {
            var user = res.json();
            _this.currentUser = user;
            callback(_this.currentUser);
        }, function (err) { errorback(err); });
    };
    UserService.prototype.getCurrentUser = function (callback, errorback) {
        var _this = this;
        this._http.get('/sessions').subscribe(function (res) {
            var user = res.json();
            if (user) {
                _this.currentUser = user;
            }
            callback(user);
        }, function (err) { errorback(err); });
    };
    UserService.prototype.getOtherUsers = function (callback, errorback) {
        var _this = this;
        this._http.get('/users').subscribe(function (res) {
            var users = res.json();
            _this.users = users;
            callback(users);
        }, function (err) { errorback(err.json()); });
    };
    UserService.prototype.getUserInfo = function (userid, callback, errorback) {
        this._http.get("/users/" + userid).subscribe(function (res) {
            var user = res.json();
            callback(user);
        }, function (err) { errorback(err.json()); });
    };
    UserService.prototype.logout = function (callback, errorback) {
        var _this = this;
        this._http.delete('/sessions').subscribe(function (res) {
            _this.currentUser = null;
            callback(res.json());
        }, function (err) { errorback(err); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
;


/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.items = [];
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map