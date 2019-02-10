webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answerPane/answer-pane.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/answerPane/answer-pane.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/answerPane/answer-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerPaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AnswerPaneComponent = /** @class */ (function () {
    function AnswerPaneComponent() {
    }
    AnswerPaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "answer-pane",
            template: __webpack_require__("./src/app/answerPane/answer-pane.component.html"),
            styles: [__webpack_require__("./src/app/answerPane/answer-pane.component.css")]
        })
    ], AnswerPaneComponent);
    return AnswerPaneComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__msgPane_msg_pane_component__ = __webpack_require__("./src/app/msgPane/msg-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__friendGame_friend_game_component__ = __webpack_require__("./src/app/friendGame/friend-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gamePane_game_pane_component__ = __webpack_require__("./src/app/gamePane/game-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_tab_friendList_friend_list_component__ = __webpack_require__("./src/app/main/main-tab/friendList/friend-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_tab_tab_tab_component__ = __webpack_require__("./src/app/main/main-tab/tab/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_auth_service__ = __webpack_require__("./src/app/services/login-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_page_user_page_component__ = __webpack_require__("./src/app/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__update_head_img_update_head_img_component__ = __webpack_require__("./src/app/update-head-img/update-head-img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shop_pane_shop_pane_component__ = __webpack_require__("./src/app/shop-pane/shop-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__backpack_backpack_component__ = __webpack_require__("./src/app/backpack/backpack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//配置路由
var routes = [
    { path: "", redirectTo: "entry", pathMatch: "full" },
    { path: "entry", component: __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */] },
    { path: "main", component: __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_login_auth_service__["a" /* LoginAuthGuard */]], children: [
            //页面子路由
            { path: '', pathMatch: 'full', redirectTo: 'tab' },
            { path: "friendList", component: __WEBPACK_IMPORTED_MODULE_3__main_main_tab_friendList_friend_list_component__["a" /* FriendListComponent */] },
            { path: "tab", component: __WEBPACK_IMPORTED_MODULE_4__main_main_tab_tab_tab_component__["a" /* TabComponent */] },
            { path: "game-pane", component: __WEBPACK_IMPORTED_MODULE_2__gamePane_game_pane_component__["a" /* GamePaneComponent */] },
            { path: "friend-game", component: __WEBPACK_IMPORTED_MODULE_1__friendGame_friend_game_component__["a" /* FriendGame */] },
            { path: "msg-pane", component: __WEBPACK_IMPORTED_MODULE_0__msgPane_msg_pane_component__["a" /* MsgPaneComponent */] },
            { path: "user-info", component: __WEBPACK_IMPORTED_MODULE_11__user_page_user_page_component__["a" /* UserPageComponent */] },
            { path: "update-head-img", component: __WEBPACK_IMPORTED_MODULE_12__update_head_img_update_head_img_component__["a" /* UpdateHeadImgComponent */] },
            { path: "shop-pane", component: __WEBPACK_IMPORTED_MODULE_13__shop_pane_shop_pane_component__["a" /* ShopPaneComponent */], children: [
                    { path: '', pathMatch: 'full', redirectTo: 'backpack' },
                    { path: "backpack", component: __WEBPACK_IMPORTED_MODULE_14__backpack_backpack_component__["a" /* BackpackComponent */] },
                    { path: "product", component: __WEBPACK_IMPORTED_MODULE_15__product_product_component__["a" /* ProductComponent */] }
                ] }
        ] },
    { path: "**", redirectTo: "entry" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* User */],
                __WEBPACK_IMPORTED_MODULE_6__services_login_auth_service__["a" /* LoginAuthGuard */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__msgItem_msgItem_component__ = __webpack_require__("./src/app/msgItem/msgItem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msgPane_msg_pane_component__ = __webpack_require__("./src/app/msgPane/msg-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__liteFriendList_lite_friend_list_component__ = __webpack_require__("./src/app/liteFriendList/lite-friend-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friendGame_friend_game_component__ = __webpack_require__("./src/app/friendGame/friend-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gamePane_game_pane_component__ = __webpack_require__("./src/app/gamePane/game-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_component__ = __webpack_require__("./src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_main_tab_friendList_friendInfo_friend_info_component__ = __webpack_require__("./src/app/main/main-tab/friendList/friendInfo/friend-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main_tab_friendList_searchFriend_search_friend_component__ = __webpack_require__("./src/app/main/main-tab/friendList/searchFriend/search-friend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_main_tab_friendList_friend_list_component__ = __webpack_require__("./src/app/main/main-tab/friendList/friend-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_main_tab_tab_tab_component__ = __webpack_require__("./src/app/main/main-tab/tab/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_main_tab_main_tab_component__ = __webpack_require__("./src/app/main/main-tab/main-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__entry_box_entry_box_component__ = __webpack_require__("./src/app/entry-box/entry-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__index_index_component__ = __webpack_require__("./src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__ = __webpack_require__("./node_modules/_@angular_platform-browser@5.2.10@@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.10@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__main_header_bar_header_bar_component__ = __webpack_require__("./src/app/main/header-bar/header-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_page_user_page_component__ = __webpack_require__("./src/app/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_activity_stack_service__ = __webpack_require__("./src/app/services/activity-stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__update_head_img_update_head_img_component__ = __webpack_require__("./src/app/update-head-img/update-head-img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ready_pane_ready_pane_component__ = __webpack_require__("./src/app/ready-pane/ready-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shop_pane_shop_pane_component__ = __webpack_require__("./src/app/shop-pane/shop-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_organize2_service__ = __webpack_require__("./src/app/services/organize2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_headImgPipe_pipe__ = __webpack_require__("./src/app/pipes/headImgPipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_friendGamePipe_pipe__ = __webpack_require__("./src/app/pipes/friendGamePipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_point_service__ = __webpack_require__("./src/app/services/point.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__backpack_backpack_component__ = __webpack_require__("./src/app/backpack/backpack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_msg2_service__ = __webpack_require__("./src/app/services/msg2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__answerPane_answer_pane_component__ = __webpack_require__("./src/app/answerPane/answer-pane.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_19__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_16__entry_box_entry_box_component__["a" /* EntryBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_23__main_header_bar_header_bar_component__["a" /* HeaderBarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_main_tab_main_tab_component__["a" /* MainTabComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_main_tab_tab_tab_component__["a" /* TabComponent */],
                __WEBPACK_IMPORTED_MODULE_10__main_main_tab_friendList_friend_list_component__["a" /* FriendListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__main_main_tab_friendList_searchFriend_search_friend_component__["a" /* SearchFriendComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_main_tab_friendList_friendInfo_friend_info_component__["a" /* FriendInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_5__gamePane_game_pane_component__["a" /* GamePaneComponent */],
                __WEBPACK_IMPORTED_MODULE_4__friendGame_friend_game_component__["a" /* FriendGame */],
                __WEBPACK_IMPORTED_MODULE_3__liteFriendList_lite_friend_list_component__["a" /* LiteFriendList */],
                __WEBPACK_IMPORTED_MODULE_2__msgPane_msg_pane_component__["a" /* MsgPaneComponent */],
                __WEBPACK_IMPORTED_MODULE_1__msgItem_msgItem_component__["a" /* MsgItemComponent */],
                __WEBPACK_IMPORTED_MODULE_24__user_page_user_page_component__["a" /* UserPageComponent */],
                __WEBPACK_IMPORTED_MODULE_27__update_head_img_update_head_img_component__["a" /* UpdateHeadImgComponent */],
                __WEBPACK_IMPORTED_MODULE_28__ready_pane_ready_pane_component__["a" /* ReadyPaneComponent */],
                __WEBPACK_IMPORTED_MODULE_29__shop_pane_shop_pane_component__["a" /* ShopPaneComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_headImgPipe_pipe__["a" /* HeadImgPipe */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_friendGamePipe_pipe__["a" /* FriendGamePipe */],
                __WEBPACK_IMPORTED_MODULE_34__backpack_backpack_component__["a" /* BackpackComponent */],
                __WEBPACK_IMPORTED_MODULE_35__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_38__answerPane_answer_pane_component__["a" /* AnswerPaneComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* User */], useClass: __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* User */] },
                { provide: __WEBPACK_IMPORTED_MODULE_6__services_chat_service__["a" /* ChatService */], useClass: __WEBPACK_IMPORTED_MODULE_6__services_chat_service__["a" /* ChatService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__["a" /* SubscribeCollection */], useClass: __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__["a" /* SubscribeCollection */] },
                { provide: __WEBPACK_IMPORTED_MODULE_25__services_activity_stack_service__["a" /* ActivityStack */], useClass: __WEBPACK_IMPORTED_MODULE_25__services_activity_stack_service__["a" /* ActivityStack */] },
                { provide: __WEBPACK_IMPORTED_MODULE_26__services_config_service__["a" /* ConfigService */], useClass: __WEBPACK_IMPORTED_MODULE_26__services_config_service__["a" /* ConfigService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_30__services_organize2_service__["a" /* Organize2 */], useClass: __WEBPACK_IMPORTED_MODULE_30__services_organize2_service__["a" /* Organize2 */] },
                { provide: __WEBPACK_IMPORTED_MODULE_33__services_point_service__["a" /* Point */], useClass: __WEBPACK_IMPORTED_MODULE_33__services_point_service__["a" /* Point */] },
                { provide: __WEBPACK_IMPORTED_MODULE_36__services_product_service__["a" /* ProductService */], useClass: __WEBPACK_IMPORTED_MODULE_36__services_product_service__["a" /* ProductService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_37__services_msg2_service__["a" /* Msg2Service */], useClass: __WEBPACK_IMPORTED_MODULE_37__services_msg2_service__["a" /* Msg2Service */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backpack/backpack.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n.item{\n    width: 3.5rem;\n    height: 3.5rem;\n    background: #000;\n    margin-right: 1rem;\n    margin-bottom: 1rem;\n    border-radius: 5px;\n    background-image: url('mu.f3a5ff6545ec70d5ade1.jpg');\n    background-size: 100% 100%;\n}\n\n.item img{\n    width: 100%;\n    height: 100%;\n    padding: 0.7rem;\n}"

/***/ }),

/***/ "./src/app/backpack/backpack.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item\" *ngFor=\"let i of tools\">\n    <img src=\"{{i.img | HeadImgPipe}}\" alt=\"\">    \n</div>"

/***/ }),

/***/ "./src/app/backpack/backpack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackpackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.10@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_stack_service__ = __webpack_require__("./src/app/services/activity-stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BackpackComponent = /** @class */ (function () {
    function BackpackComponent(location, stack, productService, subscribeCollection, user) {
        var _this = this;
        this.location = location;
        this.stack = stack;
        this.productService = productService;
        this.subscribeCollection = subscribeCollection;
        this.user = user;
        this.tools = [];
        //入栈
        this.stack.pushURL(this.location.path());
        this.user.updateUserProperty();
        this.user.directPushListener(function () {
            _this.tools = _this.user.tools;
            console.log(_this.tools);
        }, true);
    }
    BackpackComponent.prototype.ngOnInit = function () {
    };
    BackpackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-backpack',
            template: __webpack_require__("./src/app/backpack/backpack.component.html"),
            styles: [__webpack_require__("./src/app/backpack/backpack.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__services_activity_stack_service__["a" /* ActivityStack */],
            __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4__services_subscribe_collection__["a" /* SubscribeCollection */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* User */]])
    ], BackpackComponent);
    return BackpackComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-close.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogClose; });
/**
 * 使用对话框的类继承该类实现隐藏对话框
 */
var DialogClose = /** @class */ (function () {
    function DialogClose() {
        this.isDialogView = false;
        //对话框队列
        this.dialogQueue = [];
    }
    //判断能否显示
    DialogClose.prototype.judgeViewDialog = function () {
        if (!this.isDialogView && this.dialogQueue.length != 0) {
            this.dialogModel = this.dialogQueue.shift();
            // console.log(this.dialogModel);
            this.isDialogView = true;
        }
    };
    DialogClose.prototype.close = function () {
        var _this = this;
        this.isDialogView = false;
        //添加至事件队列尾
        setTimeout(function () {
            _this.judgeViewDialog();
        }, 10);
    };
    DialogClose.prototype.showDialog = function (dialogModel) {
        // this.isDialogView = true;
        //添加进对话框队列
        this.dialogQueue.push(dialogModel);
        this.judgeViewDialog();
    };
    DialogClose.prototype.basicDialog = function (message, color) {
        var _this = this;
        this.showDialog({
            title: "提示信息",
            message: message,
            buttonIndex: 1,
            btn1: { title: "确定", color: color || "green", func: function () {
                    _this.close();
                } }
        });
    };
    return DialogClose;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".dialogBox{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top:0px;\r\n    left: 0px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.dialog{\r\n    width: 15rem;\r\n    height: 10rem;\r\n    background: #fff;\r\n    -webkit-box-shadow: 0px 0px 5px #2c3e50;\r\n            box-shadow: 0px 0px 5px #2c3e50;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.head{\r\n    width: 100%;\r\n    height: 2rem;\r\n    background: #cecece;\r\n}\r\n\r\n.title{\r\n    width: 100%;\r\n    text-align: center;\r\n    height: 100%;\r\n    line-height: 2rem;\r\n    color: white;\r\n    text-shadow: 0px 0px 1px #000;\r\n}\r\n\r\n.message{\r\n    height: 5rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.message p{\r\n    width: 100%;\r\n    height: 100%;\r\n    line-height: 5rem;\r\n    text-align: center;\r\n}\r\n\r\n.message img{\r\n    display: block;\r\n    height: 4rem;\r\n    margin: auto;\r\n    /* transition: 0.3s all; */\r\n}\r\n\r\n.operas{\r\n    height: 3rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.operas button{\r\n    height: 2rem;\r\n    line-height: 0;\r\n}\r\n\r\n.answer{\r\n    height: 2rem;\r\n}\r\n\r\n.cancelMatch{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialogBox\">\r\n    <div class=\"dialog\">\r\n        <div class=\"head\">\r\n            <p class=\"title\">{{dialogModel.title}}</p>\r\n        </div>\r\n        <div class=\"message\">\r\n            <img #loading *ngIf=\"dialogModel.isViewImg\" src=\"../../assets/imgs/loading.png\" alt=\"\">\r\n            <div *ngIf=\"dialogModel.cancelMatchIsView\" (click)=\"dialogModel.cancelMatchFunc()\" class=\"cancelMatch\"><button class=\"button ui\">取消匹配</button></div>\r\n            <p *ngIf=\"!dialogModel.isInputView\">{{dialogModel.message}}</p>\r\n            <div *ngIf=\"dialogModel.isInputView\">\r\n                <div class=\"ui label medium\" for=\"\">请输入您的答案</div>\r\n                <div class=\"ui input answer\">\r\n                    <input [(ngModel)]=\"answerContent\" #i type=\"text\"/>\r\n                </div>       \r\n            </div>        \r\n        </div>\r\n        <div class=\"operas\">\r\n            <button [ngClass]=\"dialogModel.btn1.color\" *ngIf=\"btn1IsView\" class=\"ui button\" (click)=\"dialogModel.btn1.func(answerContent);closed()\">{{dialogModel.btn1.title}}</button>\r\n            <button [ngClass]=\"dialogModel.btn2.color\" *ngIf=\"btn2IsView\" class=\"ui button\" (click)=\"dialogModel.btn2.func();closed()\">{{dialogModel.btn2.title}}</button>\r\n            <button [ngClass]=\"dialogModel.btn3.color\" *ngIf=\"btn3IsView\" class=\"ui button\" (click)=\"dialogModel.btn3.func();closed()\">{{dialogModel.btn3.title}}</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        //图片旋转角度
        this.degIndex = 0;
        //旋转速率
        this.rotateSpeed = 50;
        this.btn1IsView = false;
        this.btn2IsView = false;
        this.btn3IsView = false;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    //默认按钮点击事件
    DialogComponent.prototype.closed = function () {
        this.close.emit();
    };
    //初始化钩子
    DialogComponent.prototype.ngOnInit = function () {
        switch (this.dialogModel.buttonIndex) {
            case 1:
                this.btn1IsView = true;
                break;
            case 2:
                this.btn2IsView = true;
                this.btn1IsView = true;
                break;
            case 3:
                this.btn3IsView = true;
                this.btn2IsView = true;
                this.btn1IsView = true;
                break;
        }
    };
    //开启旋转动画
    DialogComponent.prototype.startRotate = function () {
        var _this = this;
        //获取图片DOM
        var loadingEle = this.loading.nativeElement;
        this.rotateID = setInterval(function () {
            _this.degIndex += 10;
            if (_this.degIndex == 360) {
                _this.degIndex = 0;
            }
            loadingEle.style.transform = "rotate(" + _this.degIndex + "deg)";
        }, this.rotateSpeed);
    };
    //停止旋转动画
    DialogComponent.prototype.stopRotate = function () {
        if (this.rotateID)
            clearInterval(this.rotateID);
    };
    DialogComponent.prototype.ngAfterViewInit = function () {
        if (this.dialogModel.isViewImg) {
            this.startRotate();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "dialogModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], DialogComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('loading'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DialogComponent.prototype, "loading", void 0);
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-dialog",
            template: __webpack_require__("./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/entry-box/entry-box.component.css":
/***/ (function(module, exports) {

module.exports = ".box{\r\n    width: 20rem;\r\n    height: 15rem;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    border: 1px solid #cecece;\r\n    overflow: hidden;\r\n    -webkit-box-shadow:1px -1px 30px #cecece;\r\n            box-shadow:1px -1px 30px #cecece;\r\n}\r\n\r\n.input{\r\n    display: block !important;\r\n    margin:auto !important;\r\n    text-align: center;\r\n    margin-top:1rem !important;\r\n}\r\n\r\n.input input{\r\n    width: 15rem !important;\r\n}\r\n\r\n:host{\r\n    position: absolute;\r\n}\r\n\r\n.registeBtn{\r\n    width: 15rem;\r\n    height: 2.5rem;\r\n    /* padding: 1rem; */\r\n    border-radius: 5px;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.registeDiv{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.closeContainer{\r\n    width: 100%;\r\n}\r\n\r\n.close{\r\n    border-bottom-right-radius: 5px;\r\n    color: white;\r\n    height: 2rem;\r\n    width: 3rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0.1rem;\r\n}\r\n\r\n.error{\r\n    -webkit-box-shadow: 0px 0px 5px salmon !important;\r\n            box-shadow: 0px 0px 5px salmon !important;\r\n}\r\n\r\n.contai{\r\n    width: 100%;\r\n    height:calc(100% - 2rem);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.firstInput{\r\n    margin-top: 0px !important;\r\n}"

/***/ }),

/***/ "./src/app/entry-box/entry-box.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\" action=\"action\">\n    <div class=\"box\">\n        <div class=\"closeContainer\">\n            <button (click)=\"hiddenEntryBox()\" class=\"red close button ui\">X</button>\n        </div>\n        <div class=\"contai\">\n            <div class=\"inputs\">\n                <div class=\"ui input firstInput\">\n                    <input [formControl]=\"userCtrl\" max-length=\"20\" type=\"text\" placeholder=\"用户名\" />\n                </div>\n                <div class=\"ui input\">\n                    <input [formControl]=\"passwCtrl\" max-length=\"20\" type=\"password\" placeholder=\"密码\">\n                </div>\n            </div>\n\n            <div class=\"registeDiv\">\n                <button type=\"submit\" class=\"registeBtn ui button\">{{btnName}}</button>\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/entry-box/entry-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/_@angular_forms@5.2.10@@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/**
 * 注册登录表单
 */
var EntryBoxComponent = /** @class */ (function () {
    function EntryBoxComponent(fb, REGISTE_SUBMIT, LOGIN_SUBMIT, 
        //注入user service
        user, http, router) {
        this.user = user;
        this.http = http;
        this.router = router;
        //表单提交action  
        this.action = "#";
        this.emitHiddenEntry = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.myForm = fb.group({
            'user': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            'passw': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
        this.REGISTE_SUBMIT = REGISTE_SUBMIT;
        this.LOGIN_SUBMIT = LOGIN_SUBMIT;
    }
    //调用初始化钩子
    EntryBoxComponent.prototype.ngOnInit = function () {
        this.userCtrl = this.myForm.controls['user'];
        this.passwCtrl = this.myForm.controls['passw'];
    };
    //通知父组件隐藏自己
    EntryBoxComponent.prototype.hiddenEntryBox = function () {
        this.emitHiddenEntry.emit();
    };
    //提交表单钩子
    EntryBoxComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        var userValid = this.userCtrl.valid;
        var passwValid = this.passwCtrl.valid;
        if (!userValid || !passwValid) {
            alert("账号密码输入有误");
            return;
        }
        //ajax
        this.http.post(this.action, formValue)
            .subscribe(function (res) {
            if (res.json().err) {
                alert(res.json().err);
            }
            else if (_this.action = _this.LOGIN_SUBMIT) {
                //写入用户类
                _this.user.login(formValue.user);
                //更新用户信息
                _this.user.updateUserProperty(false, false, function () {
                    console.log("hello i'm cb");
                    //跳转至主页面
                    _this.router.navigate(['main']);
                });
            }
        });
    };
    //脏值检查钩子
    EntryBoxComponent.prototype.ngOnChanges = function () {
        if (this.btnName == "注册") {
            //更改提交action的值
            this.action = this.REGISTE_SUBMIT;
        }
        else {
            this.action = this.LOGIN_SUBMIT;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], EntryBoxComponent.prototype, "btnName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */])
    ], EntryBoxComponent.prototype, "emitHiddenEntry", void 0);
    EntryBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-entry-box',
            template: __webpack_require__("./src/app/entry-box/entry-box.component.html"),
            styles: [__webpack_require__("./src/app/entry-box/entry-box.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            providers: [
                { provide: "REGISTE_SUBMIT", useValue: "http://localhost:3000/registe" },
                { provide: "LOGIN_SUBMIT", useValue: "http://localhost:3000/login" }
            ]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])("REGISTE_SUBMIT")),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])("LOGIN_SUBMIT")),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], String, String, __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], EntryBoxComponent);
    return EntryBoxComponent;
}());



/***/ }),

/***/ "./src/app/friendGame/friend-game.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.box{\r\n    width: 100%;\r\n    height: 85%;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: 0px 0px 5px #2c3e50;\r\n            box-shadow: 0px 0px 5px #2c3e50;\r\n    position: relative;\r\n    padding-top: 3rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    overflow: hidden;\r\n}\r\n\r\n.leftContainer{\r\n    width: 70%;\r\n    height: 100%;\r\n    border-right: 1px solid #cecece;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.rightContainer{\r\n    height: 30%;\r\n    height: 100%;\r\n}\r\n\r\n.headBar{\r\n    width: 100%;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 0px;\r\n    border-bottom: 1px solid #cecece;\r\n    padding-bottom: 0.3rem;\r\n}\r\n\r\n.label{\r\n    border-radius: 0px;\r\n    border-bottom-left-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    height: 2.7rem;\r\n    background: #636e72;\r\n    width: 6rem;\r\n    margin: auto;\r\n    color: white;\r\n    font-size: 1.1rem;\r\n    line-height: 2.7rem;\r\n    text-align: center;\r\n}\r\n\r\n.back{\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    z-index: 100;\r\n    padding-top: 0.6rem;\r\n    padding-left: 0.6rem;\r\n    padding-right: 0.6rem;\r\n}\r\n\r\n.back img{\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n}\r\n\r\n.userCount{\r\n    width: 100%;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.userCount div{\r\n    position: relative;\r\n}\r\n\r\n.user{\r\n    width: 3rem;\r\n    height: 3rem;\r\n    margin: 0.5rem;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: 0px 0px 5px #2c3e50;\r\n            box-shadow: 0px 0px 5px #2c3e50;\r\n    background: #cecece;\r\n    overflow: hidden;\r\n}\r\n\r\n.user img{\r\n    width: 3rem;\r\n    height: 3rem;\r\n}\r\n\r\n.userName{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.startContainer{\r\n    /* margin-top: 2rem; */\r\n}\r\n\r\n#king{\r\n    position: absolute;\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n    top: -1rem;\r\n    left: 1.4rem;\r\n}\r\n\r\n.hidden{\r\n    visibility: hidden !important;\r\n}"

/***/ }),

/***/ "./src/app/friendGame/friend-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n    <div (click)=\"back()\" class=\"back\">\r\n        <img src=\"../../assets/imgs/back.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"headBar\">\r\n        <div class=\"label\">\r\n            好友组队\r\n        </div>\r\n    </div>\r\n    <div class=\"leftContainer\">\r\n        <div class=\"userCount\">\r\n            <div *ngFor=\"let user of organizeArr | FriendGamePipe\">\r\n                <img id=\"king\" src=\"../../assets/imgs/king.png\" *ngIf=\"user == organizeArr[0]\">\r\n                <div class=\"user\"><img src=\"{{user.headImg | HeadImgPipe}}\" alt=\"\"></div>\r\n                <p class=\"userName\">{{user.user}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"startContainer\" [ngClass]=\"{hidden:!(username == organizeArr[0].user)}\">\r\n            <button class=\"button ui positive\" (click)=\"match()\">开始匹配</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"rightContainer\">\r\n        <lite-friend-list (sendRequestToFriend)=\"sendRequestToFriend($event)\"></lite-friend-list>\r\n    </div>\r\n</div>\r\n\r\n<app-dialog *ngIf=\"isDialogView\" [dialogModel]=\"dialogModel\" (close)=\"close()\"></app-dialog>"

/***/ }),

/***/ "./src/app/friendGame/friend-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendGame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.10@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_close__ = __webpack_require__("./src/app/dialog/dialog-close.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_activity_stack_service__ = __webpack_require__("./src/app/services/activity-stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_organize2_service__ = __webpack_require__("./src/app/services/organize2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FriendGame = /** @class */ (function (_super) {
    __extends(FriendGame, _super);
    function FriendGame(router, user, chatService, activatedRoute, http, stack, location, organizeService, configService, subscribeCollection) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.user = user;
        _this.chatService = chatService;
        _this.activatedRoute = activatedRoute;
        _this.http = http;
        _this.stack = stack;
        _this.location = location;
        _this.organizeService = organizeService;
        _this.configService = configService;
        _this.subscribeCollection = subscribeCollection;
        //组队用户信息
        _this.userInfo = [];
        //用户默认头像
        _this.headImgPath = "../../assets/imgs/headImg.jpg";
        //当前用户人数
        _this.userIndex = 0;
        //服务器通知更新的订阅对象数组
        _this.subScription = [];
        //当前用户名
        _this.username = "";
        _this.organizeArr = _this.organizeService.getOrganizeArr();
        //添加进监听者队列
        _this.organizeService.addListener(function () { return _this.organizeArr = _this.organizeService.getOrganizeArr(); });
        console.log("getMsg");
        //更新队伍消息
        subscribeCollection.addSubscription("friendGameGetMsg", _this.chatService.getMsg()
            .subscribe(function (data) {
            //更新队伍消息
            if (data.tag == "updateOrganize") {
                var body = data.msg.body;
                _this.organizeArr = body;
                console.log(_this.username + "   " + _this.organizeArr[0].user);
            }
            //销毁队伍 队长已推出 队伍解散
            if (data.tag == "dropOrganize") {
                _this.showDialog({
                    title: "提示",
                    message: "队伍已经解散",
                    buttonIndex: 1,
                    btn1: {
                        title: "确认",
                        color: "red",
                        func: function () {
                            _this.stack.popURL();
                            _this.router.navigate([_this.stack.peek()]);
                        }
                    }
                });
            }
            //通知开始匹配
            if (data.tag == "Matchtrue") {
                console.log("匹配开始！");
                _this.dialogInit();
            }
            //通知取消匹配
            if (data.tag == "Matchfalse") {
                console.log("匹配结束！");
                _this.close();
            }
        }));
        //更新用户空闲状态
        _this.user.setFreeState(false)
            .subscribe(function (res) {
            console.log("update user isFree property");
        });
        //更新用户名
        _this.username = _this.user.user;
        return _this;
    }
    //发送请求给好友
    FriendGame.prototype.sendRequestToFriend = function (targetUser) {
        var _this = this;
        this.user.getFreeState(targetUser)
            .subscribe(function (data) {
            if (data.isFree && data.isLine) {
                //发送请求
                // this.chatService.sendRequestToFriend(targetUser);
                _this.user.sendMsg(targetUser, _this.organizeService.getOrganizeArr(), "organizeRequest");
            }
            else if (!data.isLine) {
                _this.basicDialog("该用户处于离线状态");
            }
            else {
                _this.basicDialog("该用户不在空闲状态");
            }
        });
    };
    //初始化钩子
    FriendGame.prototype.ngOnInit = function () {
        var _this = this;
        //url入栈
        this.stack.pushURL(this.location.path());
        this.subScription.push(this.chatService.updateInfo()
            .subscribe(function (info) {
            //判断是否要销毁队伍
            if (info.isDrop) {
                _this.showDialog({
                    title: "提示信息",
                    message: "队伍已解散",
                    buttonIndex: 1,
                    btn1: { title: "确定", color: "green", func: function () {
                            _this.close();
                            _this.back();
                        } }
                });
                return;
            }
            var data = info.organize;
            var arr = [];
            arr.push({ userName: data.first, headImg: _this.headImgPath });
            for (var _i = 0, _a = data.users; _i < _a.length; _i++) {
                var val = _a[_i];
                arr.push({ userName: val, headImg: _this.headImgPath });
            }
            var temp = 5 - arr.length;
            //补全数据
            for (var i = 0; i < temp; i++) {
                arr.push({ userName: '', headImg: '' });
            }
            var userNameInfo = data.users;
            userNameInfo.push(data.first);
            _this.userNameInfo = userNameInfo;
            _this.userInfo = arr;
        }));
        this.subScription.push(this.chatService.matchSuccessful()
            .subscribe(function (data) {
            if (data) {
                //关闭对话框
                _this.close();
                //匹配成功后打开主页面
                console.log("匹配成功");
                _this.router.navigate(['main/game-pane']);
            }
        }));
    };
    FriendGame.prototype.back = function () {
        //url出栈
        this.stack.popURL();
        this.router.navigate([this.stack.peek()]);
    };
    FriendGame.prototype.ngAfterViewInit = function () {
    };
    FriendGame.prototype.ngOnDestroy = function () {
        var _this = this;
        //取消订阅
        for (var _i = 0, _a = this.subScription; _i < _a.length; _i++) {
            var val = _a[_i];
            val.unsubscribe();
        }
        //判断是否自己为队长
        if (this.user.user == this.organizeArr[0].user) {
            this.organizeService.dropOrganize();
        }
        else {
            //退出队伍
            this.organizeService.removeUser(function () { return _this.organizeArr = _this.organizeService.getOrganizeArr(); });
        }
        //组件销毁后全部取消订阅
        this.subscribeCollection.unSubscription("friendGameGetMsg");
        //设置用户空闲状态
        this.user.setFreeState(true)
            .subscribe(function (res) {
            console.log("update user isFree property");
        });
    };
    //配置dialogmodel
    FriendGame.prototype.dialogInit = function () {
        this.showDialog({
            title: "提示信息",
            message: "匹配中...",
            buttonIndex: 0,
            isViewImg: true
        });
    };
    //匹配
    FriendGame.prototype.match = function () {
        var _this = this;
        this.dialogInit();
        //超时设置
        setTimeout(function () {
            //显示取消匹配按钮
            _this.dialogModel.cancelMatchIsView = true;
            _this.dialogModel.cancelMatchFunc = function () {
                _this.close();
                //将用户从匹配队列中剔除
                _this.organizeService.removeOrganizeToMatch();
            };
        }, this.configService.MAX_MATCH_TIME);
        console.log(this.userNameInfo);
        this.organizeService.match();
    };
    FriendGame = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: "friend-game",
            template: __webpack_require__("./src/app/friendGame/friend-game.component.html"),
            styles: [__webpack_require__("./src/app/friendGame/friend-game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__services_activity_stack_service__["a" /* ActivityStack */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_8__services_organize2_service__["a" /* Organize2 */],
            __WEBPACK_IMPORTED_MODULE_9__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_10__services_subscribe_collection__["a" /* SubscribeCollection */]])
    ], FriendGame);
    return FriendGame;
}(__WEBPACK_IMPORTED_MODULE_2__dialog_dialog_close__["a" /* DialogClose */]));



/***/ }),

/***/ "./src/app/gamePane/game-pane.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    width: 100%;\r\n    height:100%;\r\n}\r\n\r\n.box{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    left: 0px;\r\n    top:0px;\r\n    padding-bottom: 2.5rem;\r\n    padding-top: 3.2rem;\r\n}\r\n\r\n.canvasBox{\r\n    width: 65%;\r\n    height: 10rem;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    -webkit-box-shadow: 0px 0px 5px #2c3e50;\r\n            box-shadow: 0px 0px 5px #2c3e50;\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n\r\n.content{\r\n    width: 100%;\r\n    height: 9rem;\r\n}\r\n\r\ncanvas{\r\n    background: #fff;\r\n}\r\n\r\n.content canvas{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.progBox{\r\n    width: 100%;\r\n    height: 1rem;\r\n    background: #636e72;\r\n\r\n}\r\n\r\n.prog{\r\n    width: 100%;\r\n    height: 1rem;\r\n    background:#fdcb6e;\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.rightArrow{\r\n    position: absolute;\r\n    right: 0px;\r\n    top:42%;\r\n    background: #fff;\r\n    padding: 13px;\r\n    padding-top: 16px;\r\n    padding-bottom: 16px;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    -webkit-box-shadow: 0px 0px 5px #2c3e50;\r\n            box-shadow: 0px 0px 5px #2c3e50;\r\n}\r\n\r\n.rightArrow img{\r\n    width: 1rem;\r\n}\r\n\r\n.tools{\r\n    background: #fff;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    top: 0px;\r\n    z-index: -1;\r\n    border: 1px solid #cecece;\r\n    border-bottom: 1px solid #fff;\r\n    height: 3.5rem;\r\n    overflow: hidden;\r\n}\r\n\r\n.tools div{\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n}\r\n\r\n.tools div div{\r\n    width: 3.5rem;\r\n    height: 3.5rem;\r\n    padding: 0.5rem;\r\n    z-index: 100;\r\n}\r\n\r\n.tools div div img{\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n}\r\n\r\n.colorSelector{\r\n    height: 2.5rem;\r\n    width: 100%;\r\n    left: 0px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    padding: 0.5rem;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    background: #fff;\r\n    /* -webkit-box-shadow: 0px 0px 5px #000; */\r\n    border-top: 1px solid #cecece;\r\n}\r\n\r\n.colorSelectorDiv{\r\n    margin: auto;\r\n    height: 2.5rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background: #fff;\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n    text-align: center;\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    z-index: -1;\r\n    border-top: 1px solid #cecece;\r\n    border-left: 1px solid #cecece;\r\n    border-right: 1px solid #cecece;\r\n}\r\n\r\n.colorSelectorContai{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.colorSelectorContai button{\r\n    margin-top: 0px !important;\r\n    margin-bottom: 0px !important;\r\n}\r\n\r\n#bar{\r\n    width: 4rem;\r\n    height: 4rem;\r\n    padding: 0.7rem;\r\n    position:absolute;\r\n    top: 0px;\r\n    z-index: 0 !important;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n\r\n#bar div{\r\n    width: 2.6rem;\r\n    height: 2.6rem;\r\n    border-radius: 100px;\r\n    background: #9ACD32;\r\n}\r\n\r\n#backpack{\r\n    margin: 0.5rem;\r\n}\r\n\r\n.backpackPop{\r\n    top: -3.5rem;\r\n    height: 3.5rem !important;\r\n    overflow: visible;\r\n    z-index:101;\r\n}\r\n\r\n.colorSelectorBtn{\r\n    background: #FDCB6C;\r\n    color: white;\r\n    font-size: 10pt;\r\n    margin: 0.5rem;\r\n}\r\n\r\n.blackboard{\r\n    position: absolute;\r\n    top:-100%;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.blackboard img{\r\n    width: 20rem;\r\n}\r\n\r\n.blackboardTop{\r\n    top:0px !important;\r\n}\r\n\r\n.gameChat{\r\n    width: 30%;\r\n    height: 14rem;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    -webkit-box-shadow: 0px 0px 5px #2c3e50;\r\n            box-shadow: 0px 0px 5px #2c3e50;\r\n}\r\n\r\n#answerBtn{\r\n    background: #FDCB6C;\r\n    color: white;\r\n    font-size: 10pt;\r\n    margin: 0.5rem;\r\n}\r\n\r\n/* 聊天头像框 */\r\n\r\n.headImg{\r\n    width: 2rem;\r\n    height: 2rem;\r\n    border-radius: 5px;\r\n    border:1px solid #cecece;\r\n    overflow: hidden;\r\n}\r\n\r\n/* 当前作图者头像边框 */\r\n\r\n.drawer{\r\n    border: 2px solid darkgoldenrod;\r\n}\r\n\r\n.headImg img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.msgBubble{\r\n    width: auto;\r\n    background: skyblue;\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n    -webkit-transform: translateX(-5rem);\r\n            transform: translateX(-5rem)\r\n}\r\n\r\n.gameChat{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n    padding-top: 0.7rem;\r\n    padding-bottom: 1rem;\r\n    padding-left: 0.3rem;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    overflow: hidden;\r\n}\r\n\r\n.userInfo{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin-top: 0.3rem;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n/* 是否显示 */\r\n\r\n.viewMsg{\r\n    -webkit-transform: translate(0rem);\r\n            transform: translate(0rem)\r\n}\r\n\r\n/* 答对的对话框样式 */\r\n\r\n.rightMsg{\r\n    background: #2ecc71 !important;\r\n    color: white !important;\r\n}\r\n\r\n/* 公布答案的面板 */\r\n\r\n.answerPane{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.5);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    top: 0px;\r\n    left: 0px;\r\n    z-index: 100;\r\n\r\n}\r\n\r\n.answerBox{\r\n    width: 60%;\r\n    height: 70%;\r\n    background: #fff;\r\n    -webkit-box-shadow: 0px 0px 5px #2c3e50;\r\n            box-shadow: 0px 0px 5px #2c3e50;\r\n    border-radius: 5px;\r\n    background: #636e72;\r\n}\r\n\r\n.answerHeader, .answerFooter{\r\n    height: 20%;\r\n    width: 100%;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: white;\r\n    font-size: 15pt;\r\n}\r\n\r\n.answerContent{\r\n    height: 60%;\r\n    width: 100%;\r\n    background: #fff;\r\n}\r\n\r\n.answerContent img{\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* 工具列表 */\r\n\r\n.toolsList{\r\n    \r\n}\r\n\r\n.colorSelectorBox{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    /* top: -2.5rem; */\r\n    top: -1px;\r\n}\r\n\r\n.colorSelectorPop{\r\n    top: -2.5rem;\r\n    z-index: 101;\r\n}\r\n\r\n.toolsBox{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    height: 0rem;\r\n    overflow: hidden;\r\n}"

/***/ }),

/***/ "./src/app/gamePane/game-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n    <div class=\"canvasBox\">\r\n        <div class=\"progBox\">\r\n            <div class=\"prog\" [ngStyle]=\"{width:progWidth + '%'}\"></div>\r\n        </div>\r\n        <div #content class=\"content\">\r\n            <canvas #canvas></canvas>\r\n        </div>\r\n    </div>\r\n    <div class=\"gameChat\">\r\n        <div class=\"userInfo\" *ngFor=\"let userItem of chatUsers\">\r\n            <!-- 32 * 32 -->\r\n            <div [ngClass]=\"{drawer:userItem.isHost}\" class=\"headImg\">\r\n                <img src=\"{{userItem.headImg}}\" alt=\"\">\r\n            </div>\r\n            <div [ngClass]=\"{viewMsg:userItem.isMsgView,rightMsg:userItem.isRight}\" class=\"ui basic label msgBubble left pointing\">{{userItem.isRight?\"[回答正确]\":userItem.body}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 公布答案面板 -->\r\n<div class=\"answerPane\" *ngIf=\"isAnswerPaneView\">\r\n    <div class=\"answerBox\">\r\n        <div class=\"answerHeader\">\r\n            <p>答案 : {{rightAnswer}}</p>\r\n        </div>\r\n        <div class=\"answerContent\">\r\n            <img src=\"{{answerImg}}\" alt=\"\">\r\n        </div>\r\n        <div class=\"answerFooter\">\r\n            <p>绘图者 : {{drawer}}</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <div (click)=\"popAnswer()\" class=\"rightArrow\">\r\n    <img src=\"../../assets/imgs/arrow.png\" alt=\"\">\r\n</div> -->\r\n\r\n<!--颜色选择器  -->\r\n<div class=\"colorSelector\">\r\n\r\n    <div class=\"colorSelectorContai\">\r\n\r\n        <!--工具  -->\r\n        <div class=\"toolsBox\" [ngClass]=\"{backpackPop:isBackpackPop}\">\r\n            <div class=\"tools\">\r\n                <div>\r\n                    <div class=\"pencil\" (click)=\"changeLine($event,'pencil')\">\r\n                        <img src=\"../../assets/imgs/pencil.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"eraser\" (click)=\"changeLine($event,'eraser')\">\r\n                        <img src=\"../../assets/imgs/eraser.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"make\" (click)=\"changeLine($event,'make')\">\r\n                        <img src=\"../../assets/imgs/make.png\" alt=\"\">\r\n                    </div>\r\n                    <!-- <div class=\"rainbow\" (click)=\"changeLine($event,'rainbow')\">\r\n                        <img src=\"../../assets/imgs/rainbow.png\" alt=\"\">\r\n                    </div> -->\r\n                    <div *ngFor=\"let tool of tools\" (click)=\"changeLine($event,tool.use)\">\r\n                        <img src=\"{{tool.img | HeadImgPipe}}\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"colorSelectorBox\" [ngClass]=\"{colorSelectorPop:isColorSelectorPop}\">\r\n            <div class=\"colorSelectorDiv\">\r\n                <a (click)=\"changeColor('red')\" class=\"ui red circular label\"></a>\r\n                <a (click)=\"changeColor('orange')\" class=\"ui orange circular label\"></a>\r\n                <a (click)=\"changeColor('yellow')\" class=\"ui yellow circular label\"></a>\r\n                <a (click)=\"changeColor('olive')\" class=\"ui olive circular label\"></a>\r\n                <a (click)=\"changeColor('green')\" class=\"ui green circular label\"></a>\r\n                <a (click)=\"changeColor('teal')\" class=\"ui teal circular label\"></a>\r\n                <a (click)=\"changeColor('blue')\" class=\"ui blue circular label\"></a>\r\n                <a (click)=\"changeColor('violet')\" class=\"ui violet circular label\"></a>\r\n                <a (click)=\"changeColor('purple')\" class=\"ui purple circular label\"></a>\r\n                <a (click)=\"changeColor('pink')\" class=\"ui pink circular label\"></a>\r\n                <a (click)=\"changeColor('brown')\" class=\"ui brown circular label\"></a>\r\n                <a (click)=\"changeColor('grey')\" class=\"ui grey circular label\"></a>\r\n                <a (click)=\"changeColor('black')\" class=\"ui black circular label\"></a>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- 答题按钮 -->\r\n        <!-- <div class=\"answerBtn\">\r\n            \r\n        </div> -->\r\n\r\n        <!-- 颜色选择器 -->\r\n        <button (click)=\"colorSelector()\" class=\"ui button colorSelectorBtn\">\r\n            <i class=\"eyedropper icon\"></i>\r\n            选择颜色\r\n        </button>\r\n        <button (click)=\"backpack()\" class=\"ui button colorSelectorBtn\" id=\"backpack\">\r\n            <i class=\"suitcase icon\"></i>\r\n            背包\r\n        </button>\r\n        <button (click)=\"popAnswer()\" class=\"button ui\" id=\"answerBtn\">\r\n            <i class=\"hand paper icon\"></i>\r\n            回答！\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<div #blankboard class=\"blackboard\" [ngClass]=\"{blackboardTop:isBlackboardInit}\">\r\n    <img src=\"../../assets/imgs/blackboard.png\" alt=\"\">\r\n</div>\r\n\r\n<app-dialog (getInputValue)=\"getInputValue(data)\" *ngIf=\"isDialogView\" [dialogModel]=\"dialogModel\" (close)=\"close()\"></app-dialog>"

/***/ }),

/***/ "./src/app/gamePane/game-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_close__ = __webpack_require__("./src/app/dialog/dialog-close.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_point_service__ = __webpack_require__("./src/app/services/point.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//颜色关联数组
var Color = {
    red: "#ff0000",
    orange: "#ff8c00",
    yellow: "#ffff00",
    olive: "#9acd32",
    green: "#32cd32",
    teal: "#7fffd4",
    blue: "#1e90ff",
    violet: "#8a2be2",
    purple: "#ba55d3",
    pink: "#ff00ff",
    brown: "#CD853F",
    grey: "#a9a9a9",
    black: "#000000"
};
//获取触摸x y坐标
function getPosition(e, canvasDOM) {
    var touched = e.changedTouches;
    var x = touched[0].clientX - canvasDOM.offsetLeft;
    var y = touched[0].clientY - canvasDOM.offsetTop;
    return { x: x, y: y };
}
//更改isRight属性
function changeIsRight(readyQueue, gameDTO) {
    var _loop_1 = function (obj) {
        if (obj.user == gameDTO.user) {
            obj.body = gameDTO.body;
            obj.isRight = gameDTO.isRight;
            obj.isMsgView = true;
            if (!obj.isRight) {
                setTimeout(function () {
                    obj.isMsgView = false;
                    obj.body = "";
                }, 2000);
            }
        }
    };
    for (var _i = 0, readyQueue_1 = readyQueue; _i < readyQueue_1.length; _i++) {
        var obj = readyQueue_1[_i];
        _loop_1(obj);
    }
    return readyQueue;
}
//重置用户队列
function resetUserQueue(readyQueue) {
    for (var _i = 0, readyQueue_2 = readyQueue; _i < readyQueue_2.length; _i++) {
        var obj = readyQueue_2[_i];
        obj.isRight = false;
        obj.body = "";
        obj.isMsgView = false;
    }
    return readyQueue;
}
//更新isHost字段 更新画图者
function updateDrawer(readyQueue, user) {
    for (var _i = 0, readyQueue_3 = readyQueue; _i < readyQueue_3.length; _i++) {
        var obj = readyQueue_3[_i];
        if (obj.user == user)
            obj.isHost = true;
        else
            obj.isHost = false;
    }
    return readyQueue;
}
var GamePaneComponent = /** @class */ (function (_super) {
    __extends(GamePaneComponent, _super);
    function GamePaneComponent(chatService, http, router, pointService, user, configService, subscribeCollection) {
        var _this = _super.call(this) || this;
        _this.chatService = chatService;
        _this.http = http;
        _this.router = router;
        _this.pointService = pointService;
        _this.user = user;
        _this.configService = configService;
        _this.subscribeCollection = subscribeCollection;
        //回答问题的面板的用户
        _this.chatUsers = _this.chatService.readyQueue;
        //画图锁 是否能够画图
        _this.drawLock = true;
        //当前线条颜色
        _this.lineColor = "#000";
        //黑板初始化
        _this.isBlackboardInit = false;
        //黑板是否已经初始化过了
        _this.isBlackboardInited = false;
        //等待队列
        _this.waitQueue = [];
        //时间进度条的宽度 (%)
        _this.progWidth = 100;
        //是否显示答案面板
        _this.isAnswerPaneView = false;
        //正确答案
        _this.rightAnswer = "";
        //工具集
        _this.tools = [];
        _this.isBackpackPop = false;
        _this.isColorSelectorPop = false;
        return _this;
    }
    //初始化钩子
    GamePaneComponent.prototype.ngOnInit = function () {
        var _this = this;
        //开始游戏
        this.chatService.beginGame();
        //结束游戏
        this.chatService.gameOver()
            .subscribe(function () {
            _this.isAnswerPaneView = false;
            console.log("游戏结束");
            clearInterval(_this.timingID);
            //添加至事件队列尾部
            setTimeout(function () {
                _this.showDialog({
                    title: "提示信息",
                    message: "游戏已经结束",
                    buttonIndex: 1,
                    btn1: { title: "退出房间", func: function () {
                            _this.router.navigate(['main']);
                            _this.close();
                            //结算分数
                            _this.pointService.updatePoint();
                            _this.pointService.updateMoney();
                            //更新用户信息
                            _this.user.updateUserProperty(true);
                        }, color: "red" }
                });
            }, 10);
        });
        //获取题目
        this.chatService.getQuestion()
            .subscribe(function (data) {
            _this.isAnswerPaneView = false;
            var tmp = function () {
                //显示对话框
                _this.showDialog({
                    title: "游戏时间",
                    message: "\u9898\u76EE : " + data,
                    buttonIndex: 1,
                    btn1: { title: "确定", func: function () {
                            _this.close();
                        } }
                });
            };
            if (!_this.isBlackboardInited)
                _this.waitQueue.push(tmp);
            else
                tmp();
        });
        //接受服务器通知是否答对
        this.subscribeCollection.addSubscription("validAnswerResult", this.chatService.validAnswerResult()
            .subscribe(function (data) {
            switch (data.tag) {
                //回答问题
                case "rightAndError":
                    console.log(data);
                    _this.chatUsers = changeIsRight(_this.chatUsers, data);
                    //自己画别人答对加积分
                    if (_this.user.user != data.user) {
                        console.log("\u81EA\u5DF1\u4E3B\u573A\u589E\u52A0\u91D1\u5E01 " + _this.pointService.HOST_MONEY);
                        _this.pointService.addPointCache(_this.pointService.HOST_POINT);
                        _this.pointService.addMoneyCache(_this.pointService.HOST_MONEY);
                    }
                    else {
                        console.log("\u522B\u4EBA\u4E3B\u573A\u589E\u52A0\u91D1\u5E01 " + _this.pointService.BY_AWAY_MONEY);
                        _this.pointService.addPointCache(_this.pointService.BY_AWAY_POINT);
                        _this.pointService.addMoneyCache(_this.pointService.BY_AWAY_MONEY);
                    }
                    break;
                //全部正确
                case "all-right":
                    _this.viewAnswerPane();
                    _this.chatUsers = resetUserQueue(_this.chatUsers);
                    _this.chatUsers = updateDrawer(_this.chatUsers, _this.drawer);
                    console.log("全部答对");
                    break;
                //重复答题
                case "repeat-answer":
                    _this.basicDialog("请勿重复作答", "red");
                    break;
                //更新画图者
                case "updateDrawer":
                    _this.drawer = data.user;
                    _this.chatUsers = updateDrawer(_this.chatUsers, _this.drawer);
                    //开始计时
                    _this.timing();
                    _this.isAnswerPaneView = false;
                    break;
                //时间结束
                case "currentOver":
                    console.log("时间结束");
                    _this.chatUsers = resetUserQueue(_this.chatUsers);
                    _this.chatUsers = updateDrawer(_this.chatUsers, _this.drawer);
                    _this.viewAnswerPane();
                    break;
                default:
                    throw new Error("错误值传递 （答案验证）");
            }
        }));
        //服务器通知可以绘画
        this.chatService.canDraw()
            .subscribe(function (data) {
            _this.drawLock = !data;
            //清空画布
            _this.canvas2dDOM.clearRect(0, 0, parseFloat(_this.canvasDOM.getAttribute("width")), parseFloat(_this.canvasDOM.getAttribute("height")));
        });
        this.tools = this.user.tools.filter(function (f) { return f.price != -1; });
    };
    //子视图渲染完毕钩子
    GamePaneComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //初始化黑板
        this.isBlackboardInit = true;
        setTimeout(function () {
            _this.isBlackboardInit = false;
            if (_this.waitQueue[_this.waitQueue.length - 1])
                _this.waitQueue.pop()();
            _this.isBlackboardInited = true;
        }, 1000);
        //获取canvas2d对象
        this.canvasDOM = this.canvas.nativeElement;
        this.canvas2dDOM = this.canvasDOM.getContext('2d');
        var canvas2dDOM = this.canvas2dDOM;
        //设置canvas宽高
        this.canvasDOM.setAttribute("width", window.getComputedStyle(this.content.nativeElement)["width"]);
        this.canvasDOM.setAttribute("height", window.getComputedStyle(this.content.nativeElement)["height"]);
        //设置线条样式
        this.canvas2dDOM.lineWidth = 0.5;
        this.canvas2dDOM.strokeStyle = "#000";
        //监听触摸事件
        this.canvasDOM.addEventListener("touchstart", function (e) {
            if (_this.drawLock)
                return;
            _this.canvas2dDOM.beginPath();
            // this.canvas2dDOM.clearRect(0,0,parseFloat(this.canvasDOM.getAttribute("width")),parseFloat(this.canvasDOM.getAttribute("height")));
            var posObj = getPosition(e, _this.canvasDOM);
            _this.canvas2dDOM.moveTo(posObj.x, posObj.y);
        });
        this.canvasDOM.addEventListener("touchmove", function (e) {
            if (_this.drawLock)
                return;
            var posObj = getPosition(e, _this.canvasDOM);
            _this.canvas2dDOM.lineTo(posObj.x, posObj.y);
            _this.canvas2dDOM.stroke();
            _this.chatService.changeCanvas(_this.canvasDOM.toDataURL());
        });
        this.canvasDOM.addEventListener("touchend", function (e) {
            _this.canvas2dDOM.closePath();
            _this.answerImg = _this.canvasDOM.toDataURL();
        });
        //服务器通知更新canvas
        var updateCanvas = this.chatService.getUpdateCanvas();
        var img = new Image();
        updateCanvas.subscribe(function (dataURL) {
            img.src = dataURL;
            img.onload = function () {
                canvas2dDOM.drawImage(img, 0, 0);
            };
            _this.answerImg = dataURL;
            _this.answerImg = _this.canvasDOM.toDataURL();
        });
    };
    GamePaneComponent.prototype.popAnswer = function () {
        var _this = this;
        //不能答题
        if (!this.drawLock) {
            this.showDialog({
                title: "提示信息",
                message: "现在是您的游戏时间，不能作答",
                buttonIndex: 1,
                btn1: { title: "确定", func: function () {
                        _this.close();
                    } }
            });
            return;
        }
        this.showDialog({
            title: "提示信息",
            message: "",
            buttonIndex: 1,
            btn1: { title: "确定", func: function (data) {
                    if (data == "" || !data)
                        return;
                    _this.chatService.validAnswer(data);
                    //关闭对话框
                    _this.close();
                } },
            isInputView: true
        });
    };
    GamePaneComponent.prototype.getInputValue = function (data) {
        console.log(data);
    };
    //更改线条样式
    GamePaneComponent.prototype.changeLine = function (event, target) {
        var top;
        if (event.target.tagName == 'IMG') {
            //获取父元素的顶部高度
            top = event.target.parentNode.offsetTop;
        }
        else {
            top = event.target.offsetTop;
        }
        // this.toolSelectorLocation = top;
        switch (target) {
            case "pencil":
                this.canvas2dDOM.lineWidth = 0.5;
                this.canvas2dDOM.strokeStyle = this.lineColor;
                break;
            case "eraser":
                this.canvas2dDOM.lineWidth = 20;
                this.canvas2dDOM.strokeStyle = "#fff";
                break;
            case "rainbow":
                var gradient = this.canvas2dDOM.createLinearGradient(0, 0, parseFloat(this.canvasDOM.getAttribute("width")), 0);
                gradient.addColorStop(0, Color.red);
                gradient.addColorStop(0.14, Color.orange);
                gradient.addColorStop(0.28, Color.yellow);
                gradient.addColorStop(0.42, Color.green);
                gradient.addColorStop(0.56, Color.violet);
                gradient.addColorStop(0.7, Color.blue);
                gradient.addColorStop(0.84, Color.purple);
                // 用渐变进行填充
                this.canvas2dDOM.lineWidth = 8;
                this.canvas2dDOM.strokeStyle = gradient;
                break;
            case "make":
                this.canvas2dDOM.lineWidth = 10;
                this.canvas2dDOM.strokeStyle = this.lineColor;
                break;
            case "hollow":
                this.canvas2dDOM.lineWidth = 0.5;
                this.canvas2dDOM.strokeStyle = "#000";
                this.canvas2dDOM.shadowColor = "#000";
                this.canvas2dDOM.shadowOffsetX = 2;
                this.canvas2dDOM.shadowOffsetY = 2;
                break;
        }
        this.isBackpackPop = false;
        this.isColorSelectorPop = false;
    };
    //更改线条颜色
    GamePaneComponent.prototype.changeColor = function (color) {
        this.lineColor = Color[color];
        this.canvas2dDOM.strokeStyle = this.lineColor;
        this.isBackpackPop = false;
        this.isColorSelectorPop = false;
    };
    GamePaneComponent.prototype.timing = function () {
        var _this = this;
        if (this.timing)
            clearInterval(this.timingID);
        this.isAnswerPaneView = false;
        //开始倒计时
        var currentTime = this.configService.MAX_TIME;
        this.progWidth = 100;
        this.timingID = setInterval(function () {
            currentTime -= 0.05;
            _this.progWidth = (currentTime / _this.configService.MAX_TIME) * 100;
        }, 50);
    };
    //显示答案面板
    GamePaneComponent.prototype.viewAnswerPane = function () {
        var _this = this;
        //获取正确答案
        this.chatService.getRightAnswer()
            .subscribe(function (res) {
            var data = res.json().rightAnswer;
            _this.rightAnswer = data;
            _this.isAnswerPaneView = true;
            clearInterval(_this.timingID);
        });
    };
    GamePaneComponent.prototype.ngOnDestroy = function () {
        this.subscribeCollection.unSubscription("validAnswerResult");
    };
    //背包按钮点击
    GamePaneComponent.prototype.backpack = function () {
        this.isBackpackPop = true;
        this.isColorSelectorPop = false;
        console.log("backpack");
    };
    //颜色选择器按钮点击
    GamePaneComponent.prototype.colorSelector = function () {
        this.isColorSelectorPop = true;
        this.isBackpackPop = false;
        console.log("colorSelector");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])("canvas"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["t" /* ElementRef */])
    ], GamePaneComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])("content"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["t" /* ElementRef */])
    ], GamePaneComponent.prototype, "content", void 0);
    GamePaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: "game-pane",
            template: __webpack_require__("./src/app/gamePane/game-pane.component.html"),
            styles: [__webpack_require__("./src/app/gamePane/game-pane.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_point_service__["a" /* Point */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_7__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_8__services_subscribe_collection__["a" /* SubscribeCollection */]])
    ], GamePaneComponent);
    return GamePaneComponent;
}(__WEBPACK_IMPORTED_MODULE_1__dialog_dialog_close__["a" /* DialogClose */]));



/***/ }),

/***/ "./src/app/index/index.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    margin-left: auto !important;\r\n    margin-right: auto !important;\r\n    width: 100%;\r\n    height: 100%; \r\n    display: -webkit-box; \r\n    display: -ms-flexbox; \r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: relative;\r\n}\r\n\r\n.login{\r\n    display: block;\r\n    margin: auto;\r\n    /* margin-top: 10rem; */\r\n    width: 10rem;\r\n    font-size: 16pt;\r\n    border-radius: 50px;\r\n}\r\n\r\n.registe{\r\n    display: block;\r\n    margin: auto;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"viewEntryBox();changeBtnName('登录');\" class=\"login ui button positive\">点击登录</button>\r\n<a (click)=\"viewEntryBox();changeBtnName('注册');\" class=\"registe\">还没注册？</a>\r\n<app-entry-box [btnName]=\"btnName\" (emitHiddenEntry)=\"hiddenEntryBox()\" *ngIf=\"entryIsView\"></app-entry-box>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = /** @class */ (function () {
    function IndexComponent(chatService, user, subscribeCollection) {
        this.chatService = chatService;
        this.user = user;
        this.subscribeCollection = subscribeCollection;
        this.title = 'app works!';
        this.entryIsView = false;
        //断开连接
        this.chatService.disconnect();
        this.subscribeCollection.addSubscription("indexSetFreeState", this.user.setFreeState(true)
            .subscribe(function () {
            console.log("update user free state");
        }));
        console.log(localStorage.getItem("first"), localStorage.getItem("user"));
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    //显示entryBox
    IndexComponent.prototype.viewEntryBox = function () {
        this.entryIsView = true;
    };
    //隐藏entryBox
    IndexComponent.prototype.hiddenEntryBox = function () {
        this.entryIsView = false;
    };
    //更改登录注册框的按钮名称
    IndexComponent.prototype.changeBtnName = function (btnName) {
        this.btnName = btnName;
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/index/index.component.html"),
            styles: [__webpack_require__("./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__["a" /* SubscribeCollection */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/liteFriendList/lite-friend-list.component.css":
/***/ (function(module, exports) {

module.exports = ".box{\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: scroll;\r\n}\r\n.item{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding: 0.5rem;\r\n    padding-top: 1rem;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.userInfo{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n.info{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding-left: 0.2rem;\r\n}\r\n.userInfo img{\r\n    width:3rem;\r\n    height:3rem;\r\n    border-radius: 5px;\r\n    border: 1px solid #cecece;\r\n}\r\n.userName{\r\n    width: 4rem;\r\n    height:1.5rem;\r\n    margin:0;\r\n}\r\n.isLine{\r\n    height: 1.5rem !important;\r\n}\r\n.button{\r\n    height:2rem;\r\n    margin:0px !important;\r\n    padding: 0px !important;\r\n}\r\n.btn{\r\n    height:4rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding:1rem;\r\n    padding-right: 0px;\r\n}\r\n.btn button{\r\n    width:3rem;\r\n    height:3rem;\r\n}"

/***/ }),

/***/ "./src/app/liteFriendList/lite-friend-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n    <div class=\"item\" *ngFor=\"let user of friendList\">\r\n        <div class=\"userInfo\">\r\n            <img src=\"{{user.headImg | HeadImgPipe}}\" alt=\"\">\r\n            <div class=\"info\">\r\n                <p #userName class=\"userName\">{{user.user}}</p>\r\n                <button class=\"ui button isLine\" [class.green]=\"user.isLine\">{{user.isLine?\"在线\":\"离线\"}}</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn\">\r\n            <button (click)=\"sendRequest(userName.innerText)\" class=\"ui button positive\">邀请</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/liteFriendList/lite-friend-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiteFriendList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LiteFriendList = /** @class */ (function () {
    function LiteFriendList(http, user, chatService) {
        this.http = http;
        this.user = user;
        this.chatService = chatService;
        this.sendRequestToFriend = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
    }
    LiteFriendList.prototype.ngOnInit = function () {
    };
    LiteFriendList.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.user.getFriendList()
            .subscribe(function (data) {
            _this.friendList = data;
        });
    };
    //发送请求
    LiteFriendList.prototype.sendRequest = function (data) {
        this.sendRequestToFriend.emit(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */])
    ], LiteFriendList.prototype, "sendRequestToFriend", void 0);
    LiteFriendList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "lite-friend-list",
            template: __webpack_require__("./src/app/liteFriendList/lite-friend-list.component.html"),
            styles: [__webpack_require__("./src/app/liteFriendList/lite-friend-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* User */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], LiteFriendList);
    return LiteFriendList;
}());



/***/ }),

/***/ "./src/app/main/header-bar/header-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".header{\r\n    width: 100%;\r\n    height: 3.2rem;\r\n    /* filter: blur(15px); */\r\n    background: #fff;\r\n    -webkit-box-shadow: 0px 5px 5px #cecece;\r\n            box-shadow: 0px 5px 5px #cecece;\r\n    /* border-bottom:1px solid #000; */\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.headImg{\r\n    width: 8rem;\r\n    height: 2.8rem;\r\n    margin-left: 0.5rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.headImg img{\r\n    width: 2.8rem;\r\n    height: 2.8rem;\r\n    border-radius: 5px;\r\n    border: 1px solid #cecece;\r\n}\r\n\r\n.name{\r\n    margin-left: 0.6rem;\r\n    font-size: 17pt;\r\n    font-family: \"楷体\";\r\n}\r\n\r\n.messageBubble{\r\n    position: absolute;\r\n    top:-3px;\r\n}\r\n\r\n.msg{\r\n    position: relative;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.level{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n/* 等级文字 */\r\n\r\n.levelText{\r\n    margin-left: 0.6rem;\r\n    font-size: 12pt;\r\n    font-family: \"楷体\";\r\n}\r\n\r\n/* 钱 */\r\n\r\n.money{\r\n    position: relative;\r\n    width: 4rem;\r\n    background: #636e72;\r\n    border-radius: 10rem;\r\n    height: 2rem;\r\n    margin-left: 0.5rem;\r\n    text-align: center;\r\n    line-height: 2rem;\r\n    color: #fdcb6e;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.money img{\r\n    position: absolute;\r\n    width: 2.4rem;\r\n    left: -1rem;\r\n    top: -0.3rem;\r\n}\r\n\r\n.point img{\r\n    left: -2.5rem !important;\r\n}\r\n\r\n.point{\r\n    color: white;\r\n    background:transparent !important;\r\n    margin-left: 2.5rem !important;\r\n}\r\n\r\n.progBox{\r\n    width: 100%;\r\n    height: 100%;\r\n    background: wheat;\r\n    overflow: hidden;\r\n}\r\n\r\n.prog{\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    background: #fdcb6e;\r\n    height: 100%;\r\n    z-index: -1;\r\n    -webkit-transition: 0.3s all;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.pointContai{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0px;\r\n    left: 0px;\r\n    border-radius: 100px;\r\n    overflow: hidden;\r\n    z-index: 0;\r\n    background: #636e72;\r\n    text-align: center;\r\n}\r\n\r\n.moneyCount{\r\n    z-index: 100;\r\n}\r\n\r\n/* 功能块 */\r\n\r\n.funcBlock{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n/* 功能块按钮 */\r\n\r\n.funcBtn{\r\n    font-size: 0.8rem !important;\r\n    padding: 0.7rem !important;\r\n    padding-top: 0.8rem !important;\r\n    padding-bottom: 0.8rem !important;\r\n}"

/***/ }),

/***/ "./src/app/main/header-bar/header-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div (click)=\"updateUserInfo()\" class=\"headImg\">\n    <img src=\"{{headImg}}\" alt=\"\">\n    <p class=\"name\">{{userName}}</p>\n  </div>\n  <!-- 等级 -->\n  <!-- <div class=\"level\">\n    <span class=\"levelText\">等级：0</span>  \n    <div class=\"progbox\">\n        <div class=\"prog\"></div>\n    </div>\n  </div> -->\n  <!-- 金币 -->\n  <div class=\"moneyContainer\">\n    <div class=\"money point\">\n        <img src=\"../../../assets/imgs/level.png\" alt=\"\">\n        <div class=\"pointContai\">\n            <span class=\"moneyCount\">等级{{level}}</span>\n            <div class=\"prog\" [ngStyle]=\"{width:width + '%'}\"></div>\n        </div>\n    </div>\n  </div>\n  <div class=\"moneyContainer\">\n    <div class=\"money\">\n        <img src=\"../../../assets/imgs/money.png\" alt=\"\">\n        <span class=\"moneyCount\">{{money}}</span>\n    </div>\n  </div>\n  <div class=\"funcBlock\">\n    <button (click)=\"linkMsgPane()\" class=\"ui button teal msg funcBtn\">消息<div class=\"messageBubble ui red label\" *ngIf=\"msgCount != 0\">{{msgCount}}</div></button>\n    <button (click)=\"linkFriendList()\" class=\"ui button funcBtn\">好友列表</button>\n    <button (click)=\"exitUser()\" class=\"ui button yellow funcBtn\">注销</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/header-bar/header-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_msg2_service__ = __webpack_require__("./src/app/services/msg2.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent(user, router, msg2Service, subscribeCollection, activatedRoute, configService) {
        this.user = user;
        this.router = router;
        this.msg2Service = msg2Service;
        this.subscribeCollection = subscribeCollection;
        this.activatedRoute = activatedRoute;
        this.configService = configService;
        //未读消息数量
        this.msgCount = 0;
        //金币数量
        this.money = 0;
        //头像路径
        this.headImg = "";
        //显示积分
        this.pointView = 0;
        //等级
        this.level = 0;
        this.width = 10;
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obj = this.user.getUserInfo();
        this.userName = obj.user;
        //更新用户信息
        this.user.directPushListener(function () {
            _this.money = _this.user.money;
            _this.headImg = _this.configService.exportInterface(_this.user.headImg);
            _this.pointView = _this.user.pointView;
            _this.level = _this.user.level;
            _this.width = (parseFloat(_this.pointView + '') / parseFloat(_this.level * 15 + '')) * 100;
        });
        //接收未读消息数量
        var addListenerFunc = function () {
            _this.msgCount = _this.msg2Service.getInnerMsgCount();
            console.log(_this.msgCount);
        };
        this.msg2Service.addListener(addListenerFunc, true);
    };
    //转到好友列表
    HeaderBarComponent.prototype.linkFriendList = function () {
        this.router.navigate(['main/friendList']);
    };
    //注销用户
    HeaderBarComponent.prototype.exitUser = function () {
        this.router.navigate(['entry']);
    };
    //跳转到msg-pane
    HeaderBarComponent.prototype.linkMsgPane = function () {
        this.router.navigate(['main/msg-pane']);
    };
    HeaderBarComponent.prototype.ngOnDestroy = function () {
        this.subscribeCollection.unSubscription("getMsgCount");
    };
    //用户头像点击修改
    HeaderBarComponent.prototype.updateUserInfo = function () {
        this.router.navigate(['user-info'], { relativeTo: this.activatedRoute });
    };
    HeaderBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-header-bar',
            template: __webpack_require__("./src/app/main/header-bar/header-bar.component.html"),
            styles: [__webpack_require__("./src/app/main/header-bar/header-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_msg2_service__["a" /* Msg2Service */],
            __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__["a" /* SubscribeCollection */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_config_service__["a" /* ConfigService */]])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());



/***/ }),

/***/ "./src/app/main/main-tab/friendList/friend-list.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.friendList{\r\n    width: 100%;\r\n    height: 80%;\r\n    background: #fff !important;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n    -webkit-box-shadow: 0px 0px 2px #2c3e50;\r\n            box-shadow: 0px 0px 2px #2c3e50;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n.back{\r\n    width: 100%;\r\n    height: 3rem;\r\n    padding-top: 0.6rem;\r\n    padding-left: 0.6rem;\r\n    padding-right: 0.6rem;\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background: #fff;\r\n}\r\n.back img{\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n}\r\n.refresh {\r\n    width: 2rem;\r\n    height: 2rem;\r\n    -webkit-transition: 0.5s all;\r\n    transition: 0.5s all;\r\n}"

/***/ }),

/***/ "./src/app/main/main-tab/friendList/friend-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"friendList\">  \r\n    <div class=\"back\">\r\n        <img (click)=\"back()\" src=\"../../../../assets/imgs/back.png\" alt=\"\">\r\n        <img class=\"refresh\" (click)=\"refresh($event)\" src=\"../../../../assets/imgs/refresh.png\" alt=\"\">\r\n        <div>\r\n             <div class=\"ui input\">\r\n                <input #searchValue type=\"text\" placeholder=\"好友ID\">\r\n            </div>\r\n            <button class=\"ui button\" (click)=\"viewSearchFriend()\" >+加好友</button>\r\n        </div>\r\n    </div>\r\n    <friend-info \r\n        [btnClick]=\"chatFriend\" \r\n        [isViewFriendList]=\"isViewFriendList\" \r\n        [friendList]=\"friendList\" \r\n        [btnName]=\"'发送消息'\" \r\n        [pName]=\"pName\"\r\n    ></friend-info>\r\n</div>\r\n<search-friend *ngIf=\"isViewSearchFriend\" (hiddenSearchFriend)=\"hiddenSearchFriend()\" [searchName]=\"searchValue.value\" [parentFriendList]=\"friendList\"></search-friend>"

/***/ }),

/***/ "./src/app/main/main-tab/friendList/friend-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_activity_stack_service__ = __webpack_require__("./src/app/services/activity-stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.10@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_msg2_service__ = __webpack_require__("./src/app/services/msg2.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FriendListComponent = /** @class */ (function () {
    function FriendListComponent(router, http, user, subscribeCollection, stack, location, msg2Service) {
        this.router = router;
        this.http = http;
        this.user = user;
        this.subscribeCollection = subscribeCollection;
        this.stack = stack;
        this.location = location;
        this.msg2Service = msg2Service;
        //是否显示搜索好友框
        this.isViewSearchFriend = false;
        //无好友时标签信息
        this.pName = "暂无好友信息， 快去添加好友吧！";
        //
    }
    //获取好友列表
    FriendListComponent.prototype.getFriendList = function () {
        var _this = this;
        var targetUser = this.user.getUserInfo().user;
        //获取好友列表
        this.subscribeCollection.addSubscription("getFriendList", this.user.getFriendList()
            .subscribe(function (data) {
            if (data.length == 0) {
                _this.isViewFriendList = false;
                _this.friendList = [];
            }
            else {
                _this.isViewFriendList = true;
                _this.friendList = data;
            }
        }));
    };
    //初始化钩子
    FriendListComponent.prototype.ngOnInit = function () {
        console.log(this.stack.getStack());
        //获取好友列表
        this.getFriendList();
        //压入执行栈
        this.stack.pushURL(this.location.path());
    };
    //返回上一级
    FriendListComponent.prototype.back = function () {
        //url出栈
        this.stack.popURL();
        //访问栈顶路由
        this.router.navigate([this.stack.peek()]);
    };
    //显示搜索好友框
    FriendListComponent.prototype.viewSearchFriend = function () {
        this.isViewSearchFriend = true;
    };
    //隐藏搜索好友框
    FriendListComponent.prototype.hiddenSearchFriend = function () {
        this.ngOnInit();
        this.isViewSearchFriend = false;
    };
    //聊天点击按钮
    FriendListComponent.prototype.chatFriend = function (userName) {
        //添加用户进chatUsers
        this.msg2Service.addUserToChatUsers(userName);
        this.msg2Service.selectedUserName = userName;
        //导航至联系面板
        this.router.navigate(['main/msg-pane']);
    };
    FriendListComponent.prototype.ngOnDestroy = function () {
        this.subscribeCollection.unSubscription('getFriendList');
    };
    FriendListComponent.prototype.refresh = function (event) {
        var degIndex = 360;
        var target = event.target;
        target.style.transform = "rotate(360deg)";
        setTimeout(function () {
            target.style.transform = "rotate(0deg)";
        }, 500);
        this.getFriendList();
    };
    FriendListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'friend-list',
            template: __webpack_require__("./src/app/main/main-tab/friendList/friend-list.component.html"),
            styles: [__webpack_require__("./src/app/main/main-tab/friendList/friend-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__["a" /* SubscribeCollection */],
            __WEBPACK_IMPORTED_MODULE_5__services_activity_stack_service__["a" /* ActivityStack */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_7__services_msg2_service__["a" /* Msg2Service */]])
    ], FriendListComponent);
    return FriendListComponent;
}());



/***/ }),

/***/ "./src/app/main/main-tab/friendList/friendInfo/friend-info.component.css":
/***/ (function(module, exports) {

module.exports = ".friendInfo{\r\n    width:100%;\r\n    height:100%;\r\n    padding: 4rem 1rem 1rem 1rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    overflow: scroll;\r\n}\r\n\r\n.friendInfo p{\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.input{\r\n    width: 7rem;\r\n}\r\n\r\n/*好友显示表  */\r\n\r\n.infos{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.xitem{\r\n    width: 100%;\r\n    height: 3rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.userInfo{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.userInfo img{\r\n    height: 2.6rem;\r\n    display: block;\r\n    margin-right: 1rem;\r\n    border-radius: 5px;\r\n    border: 1px solid #cecece;\r\n}\r\n\r\n.userName{\r\n    font-size: 15pt;\r\n}"

/***/ }),

/***/ "./src/app/main/main-tab/friendList/friendInfo/friend-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"friendInfo\">\r\n    <div class=\"infos\" *ngIf=\"isViewFriendList\">\r\n        <!-- items  -->\r\n        <div class=\"xitem\" *ngFor=\"let val of friendList\">\r\n            <!--用户信息  -->\r\n            <div class=\"userInfo\">\r\n                <img src=\"{{val.headImg | HeadImgPipe}}\" alt=\"\">\r\n                <span class=\"userName\">{{val.user}}</span>\r\n            </div>\r\n            <!--发送信息按钮  -->\r\n            <div class=\"btns\">\r\n                <button class=\"ui button\" *ngIf=\"isLineHidden\" [class.green]=\"val.isLine\">{{val.isLine?\"在线\":\"离线\"}}</button>\r\n                <button (click)=\"btnClick(val.user)\" class=\"ui button sendBtn positive\">{{btnName}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <p *ngIf=\"!isViewFriendList\">{{pName}}</p>\r\n</div>\r\n\r\n<app-dialog *ngIf=\"isDialogView\" (close)=\"close()\" [dialogModel]=\"dialogModel\"></app-dialog>"

/***/ }),

/***/ "./src/app/main/main-tab/friendList/friendInfo/friend-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_dialog_close__ = __webpack_require__("./src/app/dialog/dialog-close.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_msg2_service__ = __webpack_require__("./src/app/services/msg2.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FriendInfoComponent = /** @class */ (function (_super) {
    __extends(FriendInfoComponent, _super);
    function FriendInfoComponent(http, user, chatService, router, subscribeCollection, msg2Service) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.user = user;
        _this.chatService = chatService;
        _this.router = router;
        _this.subscribeCollection = subscribeCollection;
        _this.msg2Service = msg2Service;
        _this.isLineHidden = true;
        return _this;
    }
    FriendInfoComponent.prototype.ngOnChanges = function () {
        console.log(this.friendList);
    };
    FriendInfoComponent.prototype.ngOnInit = function () {
    };
    FriendInfoComponent.prototype.ngAfterViewInit = function () {
    };
    FriendInfoComponent.prototype.ngOnDestroy = function () {
        this.subscribeCollection.unSubscription("updateFriendList");
        this.subscribeCollection.unSubscription("queryFriendList");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FriendInfoComponent.prototype, "isViewFriendList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], FriendInfoComponent.prototype, "friendList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FriendInfoComponent.prototype, "btnName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FriendInfoComponent.prototype, "pName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], FriendInfoComponent.prototype, "btnClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FriendInfoComponent.prototype, "searchName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FriendInfoComponent.prototype, "isLineHidden", void 0);
    FriendInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: "friend-info",
            template: __webpack_require__("./src/app/main/main-tab/friendList/friendInfo/friend-info.component.html"),
            styles: [__webpack_require__("./src/app/main/main-tab/friendList/friendInfo/friend-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_subscribe_collection__["a" /* SubscribeCollection */],
            __WEBPACK_IMPORTED_MODULE_7__services_msg2_service__["a" /* Msg2Service */]])
    ], FriendInfoComponent);
    return FriendInfoComponent;
}(__WEBPACK_IMPORTED_MODULE_0__dialog_dialog_close__["a" /* DialogClose */]));



/***/ }),

/***/ "./src/app/main/main-tab/friendList/searchFriend/search-friend.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute; \r\n    top:0px;\r\n    left: 0px;\r\n}\r\n.box{\r\n    width: 15rem;\r\n    height: 10rem;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: 0px 0px 5px #2c3e50;\r\n            box-shadow: 0px 0px 5px #2c3e50;\r\n    position: relative;\r\n}\r\n.header{\r\n    width: 100%;\r\n    height: 3rem;\r\n    position: absolute;\r\n    top:0px;\r\n    left: 0px;\r\n}\r\n.close{\r\n    border-bottom-right-radius: 5px;\r\n    color: white;\r\n    height: 2rem;\r\n    width: 3rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0.1rem;\r\n}"

/***/ }),

/***/ "./src/app/main/main-tab/friendList/searchFriend/search-friend.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n    <div class=\"header\"><button (click)=\"close()\" class=\"red ui button close\">x</button></div>\r\n    <friend-info\r\n        [isLineHidden]=\"false\" \r\n        [searchName]=\"searchName\" \r\n        [btnClick]=\"addFriend\" \r\n        [friendList]=\"friendList\" \r\n        [isViewFriendList]=\"isViewFriendList\" \r\n        [btnName]=\"'添加好友'\" \r\n        [pName]=\"pName\">\r\n    </friend-info>\r\n</div>\r\n\r\n<app-dialog *ngIf=\"isDialogView\" (close)=\"close()\" [dialogModel]=\"dialogModel\"></app-dialog>"

/***/ }),

/***/ "./src/app/main/main-tab/friendList/searchFriend/search-friend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFriendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_dialog_close__ = __webpack_require__("./src/app/dialog/dialog-close.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchFriendComponent = /** @class */ (function (_super) {
    __extends(SearchFriendComponent, _super);
    function SearchFriendComponent(http, user, subscribeCollection) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.user = user;
        _this.subscribeCollection = subscribeCollection;
        //是否查询到好友
        _this.isViewFriendList = false;
        //没查询到好友显示信息
        _this.pName = "没有查询结果";
        _this.hiddenSearchFriend = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
        console.log(typeof _this.showDialog);
        return _this;
    }
    //添加好友按钮点击
    SearchFriendComponent.prototype.addFriend = function () {
    };
    //通知父组件隐藏自己
    SearchFriendComponent.prototype.close = function () {
        this.hiddenSearchFriend.emit();
    };
    SearchFriendComponent.prototype.viewDialog = function (dialogModel) {
        this.showDialog(dialogModel);
    };
    //组件初始化钩子
    SearchFriendComponent.prototype.ngOnInit = function () {
        var _this = this;
        //查询用户
        console.log("\u63D0\u4EA4\u7684\u6570\u636E " + this.searchName);
        if (this.searchName == "" || !this.searchName) {
            this.isViewFriendList = false;
            return;
        }
        else if (this.searchName == this.user.getUserInfo().user) {
            this.pName = "不能查询自己哦";
            return;
        }
        //查询
        this.subscribeCollection.addSubscription("queryUser", this.http.post("http://localhost:3000/getUser/" + this.searchName, {})
            .subscribe(function (res) {
            var data = res.json();
            //未找到用户
            if (data.err) {
                _this.isViewFriendList = false;
            }
            else {
                _this.friendList = data.successful;
                _this.isViewFriendList = true;
            }
        }));
    };
    SearchFriendComponent.prototype.ngOnDestroy = function () {
        this.subscribeCollection.unSubscription("queryUser");
        this.subscribeCollection.unSubscription("addFriend");
    };
    SearchFriendComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.addFriend = function () {
            //判断是否已添加过好友
            console.log(_this.parentFriendList);
            for (var _i = 0, _a = _this.parentFriendList; _i < _a.length; _i++) {
                var val = _a[_i];
                if (val.user == _this.searchName) {
                    console.log("user: " + val.user + "  " + _this.searchName);
                    _this.viewDialog({
                        title: "提示信息",
                        message: "已经添加过此好友",
                        buttonIndex: 1,
                        btn1: { title: "我知道了", func: function () {
                                _this.close();
                            }, color: "green" }
                    });
                    return;
                }
            }
            //判断是否在线
            for (var _b = 0, _c = _this.friendList; _b < _c.length; _b++) {
                var val = _c[_b];
                if (val.user == _this.searchName && val.isLine == false) {
                    _this.viewDialog({
                        title: "提示信息",
                        message: "该玩家不在线",
                        buttonIndex: 1,
                        btn1: { title: "我知道了", func: function () {
                                //关闭查找框
                                _this.close();
                            }, color: "green" }
                    });
                }
            }
            //发送消息
            _this.user.sendMsg(_this.searchName, "添加好友", "addFriend");
            // this.subscribeCollection.addSubscription("addFriend",this.user.addFriend(this.searchName, null)
            // .subscribe((res:Response) => {
            //     let data = res.json();
            //     if(data.successful){
            //         this.viewDialog({
            //             title:"提示信息",
            //             message:"添加成功",
            //             buttonIndex:1,
            //             btn1:{title:"我知道了",func:() => {
            //                 this.close();
            //             },color:"green"}
            //         });
            //     }
            // }));
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SearchFriendComponent.prototype, "searchName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */])
    ], SearchFriendComponent.prototype, "hiddenSearchFriend", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], SearchFriendComponent.prototype, "parentFriendList", void 0);
    SearchFriendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "search-friend",
            template: __webpack_require__("./src/app/main/main-tab/friendList/searchFriend/search-friend.component.html"),
            styles: [__webpack_require__("./src/app/main/main-tab/friendList/searchFriend/search-friend.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* User */], __WEBPACK_IMPORTED_MODULE_1__services_subscribe_collection__["a" /* SubscribeCollection */]])
    ], SearchFriendComponent);
    return SearchFriendComponent;
}(__WEBPACK_IMPORTED_MODULE_0__dialog_dialog_close__["a" /* DialogClose */]));



/***/ }),

/***/ "./src/app/main/main-tab/main-tab.component.css":
/***/ (function(module, exports) {

module.exports = ".mainContainer{\r\n    width:100%;\r\n    height: 100%;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/main/main-tab/main-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div #mainContainer class=\"mainContainer\" [style.height.px]=\"height\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/main/main-tab/main-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var MainTabComponent = /** @class */ (function () {
    function MainTabComponent() {
    }
    MainTabComponent.prototype.ngOnInit = function () {
    };
    //将px单位字符串转换为float
    MainTabComponent.prototype.floatFormat = function (value) {
        return parseFloat(value.split('p')[0]);
    };
    MainTabComponent.prototype.ngAfterViewInit = function () {
        //获取顶层字体大小
        var fontSize = this.floatFormat(window.getComputedStyle(document.documentElement)["fontSize"]);
        //获取headerBar高度
        var headerBarHeight = fontSize * 3.2;
        //设置MainContainer的高度
        var mainContainerHeight = this.floatFormat(window.getComputedStyle(this.mianContainer.nativeElement)["height"]);
        this.height = mainContainerHeight - headerBarHeight;
        console.log(this.height);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mainContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MainTabComponent.prototype, "mianContainer", void 0);
    MainTabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "main-tab",
            template: __webpack_require__("./src/app/main/main-tab/main-tab.component.html"),
            styles: [__webpack_require__("./src/app/main/main-tab/main-tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainTabComponent);
    return MainTabComponent;
}());



/***/ }),

/***/ "./src/app/main/main-tab/tab/tab.component.css":
/***/ (function(module, exports) {

module.exports = ".mainBlock{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.blockHeight{\r\n    /* height: 18rem; */\r\n    height: 13.5rem;\r\n}\r\n\r\n.center{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-shadow: 0px 0px 3px #2c3e50;\r\n            box-shadow: 0px 0px 3px #2c3e50;\r\n}\r\n\r\n.img{\r\n    /* background-size: 100% 100%;  */\r\n    background-position: left top;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.alone{\r\n    -webkit-box-flex:2;\r\n        -ms-flex:2;\r\n            flex:2;\r\n    margin-right:1rem;\r\n    background: #1abc9c;\r\n    border-radius: 10px;\r\n    background-image: url('alone.c7eefd97ec3d4623a01a.jpg');\r\n    /* background-size: 100% 100%;  */\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.friend{\r\n    -webkit-box-flex:1;\r\n        -ms-flex:1;\r\n            flex:1;\r\n    background: #1abc9c;\r\n    border-radius: 10px;\r\n    background-image: url('friend.233311431990c4efa6ec.jpg');\r\n    /* background-size: 100% 100%;  */\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.solo{\r\n    -webkit-box-flex:1;\r\n        -ms-flex:1;\r\n            flex:1;\r\n    margin-left:1rem;\r\n    background: #1abc9c;\r\n    border-radius: 10px;\r\n    background-image: url('solo.f5bb37fb5c748b6ef37b.jpg');\r\n    /* background-size: 100% 100%;  */\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n@font-face{\r\n    font-family: \"毛笔字\";\r\n    src: url('啊啊啊.c923e95d0fdbecf7e297.ttf') format(\"truetype\");\r\n}\r\n\r\n.aloneText{\r\n    font-family: \"毛笔字\";\r\n    /* font-size: 50pt; */\r\n    font-size: 3.2rem;\r\n    color: white;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/main/main-tab/tab/tab.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"mainBlock\">\r\n    <div (click)=\"alone()\" class=\"alone blockHeight center img\">\r\n        <p class=\"aloneText\">单人匹配</p>\r\n    </div>\r\n    <div (click)=\"friend()\" class=\"friend blockHeight center img\">\r\n        <p class=\"aloneText verticalText\">好友同玩</p>\r\n    </div>\r\n    <div (click)=\"shop()\" class=\"solo blockHeight center img\">\r\n        <p class=\"aloneText verticalText\">商店</p>\r\n    </div>\r\n</div> \r\n\r\n<!-- 对话框 -->\r\n<app-dialog *ngIf=\"isDialogView\" (close)=\"close()\" [dialogModel]=\"dialogModel\"></app-dialog>"

/***/ }),

/***/ "./src/app/main/main-tab/tab/tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_close__ = __webpack_require__("./src/app/dialog/dialog-close.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_organize2_service__ = __webpack_require__("./src/app/services/organize2.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabComponent = /** @class */ (function (_super) {
    __extends(TabComponent, _super);
    function TabComponent(chatService, router, user, subscribeCollection, configService, activatedRoute, organizeService) {
        var _this = _super.call(this) || this;
        _this.chatService = chatService;
        _this.router = router;
        _this.user = user;
        _this.subscribeCollection = subscribeCollection;
        _this.configService = configService;
        _this.activatedRoute = activatedRoute;
        _this.organizeService = organizeService;
        return _this;
    }
    //配置dialogmodel
    TabComponent.prototype.dialogInit = function () {
        this.showDialog({
            title: "提示信息",
            message: "匹配中...",
            buttonIndex: 0,
            isViewImg: true
        });
    };
    //单人匹配点击回调
    TabComponent.prototype.alone = function () {
        var _this = this;
        //对话框初始化
        this.dialogInit();
        //开始匹配
        this.chatService.match(this.user.getUserInfo().user);
        //匹配成功
        var observable = this.chatService.matchSuccessful();
        this.subscribeCollection.addSubscription("alone", observable.subscribe(function (data) {
            if (data) {
                //关闭对话框
                _this.close();
                //匹配成功后打开主页面
                console.log("匹配成功");
                _this.router.navigate(['main/game-pane']);
            }
        }));
        //超时设置
        setTimeout(function () {
            //显示取消匹配按钮
            _this.dialogModel.cancelMatchIsView = true;
            _this.dialogModel.cancelMatchFunc = function () {
                _this.close();
                //将用户从匹配队列中剔除
                _this.user.removeUserToMatch();
            };
        }, this.configService.MAX_MATCH_TIME);
    };
    //好友同玩按钮点击回调
    TabComponent.prototype.friend = function () {
        var _this = this;
        //玩家自己创建队伍
        this.organizeService.isCaptain = true;
        this.organizeService.createOrganize(function () {
            _this.router.navigate(['main/friend-game']);
        });
    };
    TabComponent.prototype.ngOnDestroy = function () {
        //取消订阅
        this.subscribeCollection.unSubscription("alone");
    };
    TabComponent.prototype.shop = function () {
        this.router.navigate(['main/shop-pane/product']);
    };
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: "tab",
            template: __webpack_require__("./src/app/main/main-tab/tab/tab.component.html"),
            styles: [__webpack_require__("./src/app/main/main-tab/tab/tab.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__["a" /* SubscribeCollection */],
            __WEBPACK_IMPORTED_MODULE_6__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__services_organize2_service__["a" /* Organize2 */]])
    ], TabComponent);
    return TabComponent;
}(__WEBPACK_IMPORTED_MODULE_2__dialog_dialog_close__["a" /* DialogClose */]));



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    width: 100%;\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- 顶部信息条 -->\r\n<app-header-bar></app-header-bar>\r\n<!-- 页面主功能块 -->\r\n<main-tab></main-tab>\r\n\r\n<app-dialog *ngIf=\"isDialogView\" [dialogModel]=\"dialogModel\" (close)=\"close()\"></app-dialog>\r\n\r\n<!-- 准备面板 -->\r\n<app-ready-pane *ngIf=\"isReadyPaneView\" [readyQueue]=\"readyQueue\"></app-ready-pane>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_close__ = __webpack_require__("./src/app/dialog/dialog-close.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_activity_stack_service__ = __webpack_require__("./src/app/services/activity-stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.10@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_organize2_service__ = __webpack_require__("./src/app/services/organize2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_msg2_service__ = __webpack_require__("./src/app/services/msg2.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MainComponent = /** @class */ (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(chatService, router, activatedRoute, subscribeCollection, user, stack, location, http, configService, organizeService, msg2Service) {
        var _this = _super.call(this) || this;
        _this.chatService = chatService;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.subscribeCollection = subscribeCollection;
        _this.user = user;
        _this.stack = stack;
        _this.location = location;
        _this.http = http;
        _this.configService = configService;
        _this.organizeService = organizeService;
        _this.msg2Service = msg2Service;
        //是否显示准备面板
        _this.isReadyPaneView = false;
        //用于准备面板显示的队列对象
        _this.readyQueue = null;
        //连接服务器
        chatService.connect();
        //更新信息
        _this.user.updateUserProperty(true);
        return _this;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        //栈清空
        this.stack.reset();
        //url进栈
        this.stack.pushURL(this.location.path());
        //接收其它用户的消息
        this.chatService.getMsg()
            .subscribe(function (data) {
            console.log("\u63A5\u6536\u5230\u5176\u5B83\u7528\u6237\u7684\u6D88\u606F :" + JSON.stringify(data));
            //组队请求
            if (data.tag == "organizeRequest") {
                _this.showDialog({
                    title: "提示信息",
                    message: data.msg.username + " \u9080\u8BF7\u4F60\u8FDB\u5165\u961F\u4F0D",
                    buttonIndex: 2,
                    btn1: {
                        title: '接受', color: "green", func: function () {
                            console.log("接受好友请求");
                            _this.organizeService.init(data.msg.body);
                            _this.router.navigate(["friend-game"], { relativeTo: _this.activatedRoute });
                            _this.organizeService.addUser(function () { return _this.router.navigate(["friend-game"], { relativeTo: _this.activatedRoute }); });
                        }
                    },
                    btn2: {
                        title: '拒绝', color: 'red', func: function () {
                            //拒绝好友请求             
                            _this.user.sendMsg(data.msg.username, "拒绝", "organizeRequestRefuse");
                        }
                    }
                });
                return;
            }
            //进入准备队列
            if (data.tag == "readyQueue") {
                console.log(data.msg.body);
                _this.chatService.roomID = data.msg.body.roomID;
                var rq = data.msg.body.queue;
                var readyCount = 0;
                //拼接headImg
                for (var _i = 0, rq_1 = rq; _i < rq_1.length; _i++) {
                    var v = rq_1[_i];
                    v.headImg = _this.configService.exportInterface(v.headImg);
                    if (v.isReady) {
                        readyCount++;
                    }
                }
                _this.readyQueue = rq;
                _this.chatService.readyQueue = rq;
                //显示准备面板
                if (!_this.isReadyPaneView)
                    _this.isReadyPaneView = true;
                //准备人数满，隐藏匹配面板
                if (readyCount == rq.length) {
                    _this.isReadyPaneView = false;
                    return;
                }
            }
            //组队拒绝
            if (data.tag == "organizeRequestRefuse") {
                _this.basicDialog(data.msg.username + " \u62D2\u7EDD\u4E86\u4F60\u7684\u7EC4\u961F\u7533\u8BF7");
                return;
            }
            //好友添加成功
            if (data.tag == "addFriendSuccess") {
                _this.basicDialog("添加成功");
                return;
            }
            //拒绝添加
            if (data.tag == "refuseAddFriend") {
                _this.basicDialog(data.msg.username + " \u62D2\u7EDD\u4E86\u4F60\u7684\u597D\u53CB\u7533\u8BF7");
                return;
            }
            //添加好友
            if (data.tag == "addFriend") {
                _this.showDialog({
                    title: "提示信息",
                    message: data.msg.username + " \u8BF7\u6C42\u6DFB\u52A0\u4F60\u4E3A\u597D\u53CB",
                    buttonIndex: 2,
                    btn1: {
                        title: '接受', color: "green", func: function () {
                            //接受好友请求
                            _this.user.addFriendTrue(data.msg.username);
                        }
                    },
                    btn2: {
                        title: '拒绝', color: 'red', func: function () {
                            //拒绝好友请求        
                            _this.user.sendMsg(data.msg.username, "拒绝", "refuseAddFriend");
                        }
                    }
                });
                return;
            }
            //获取消息
            //获取用户消息
            if (data.tag == "sendMsg" && window.location.pathname != '/main/msg-pane') {
                _this.msg2Service.addUserToChatUsers(data.msg.username);
                _this.msg2Service.addMsgToMsgCollections(data.msg.username, data.msg.username, data.msg.body);
                _this.msg2Service.selectedUserName = data.msg.username;
                //增加未读消息
                _this.msg2Service.addInnerMsg(data.msg.username);
            }
        });
        //接收用户请求
        this.subscribeCollection.addSubscription("getRequest", this.chatService.getRequest()
            .subscribe(function (data) {
            _this.showDialog({
                title: "提示信息",
                message: data.user + "\u9080\u8BF7\u4F60\u52A0\u5165\u961F\u4F0D\u4E00\u8D77\u6E38\u620F",
                buttonIndex: 2,
                btn1: {
                    title: '接受', color: "green", func: function () {
                        _this.router.navigate(['main/friend-game'], { queryParams: { first: data.first } });
                        _this.close();
                    }
                },
                btn2: {
                    title: '拒绝', color: "red", func: function () {
                        _this.close();
                    }
                }
            });
        }));
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.subscribeCollection.unSubscription("getMsg");
        this.subscribeCollection.unSubscription("getRequest");
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__services_subscribe_collection__["a" /* SubscribeCollection */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_6__services_activity_stack_service__["a" /* ActivityStack */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_9__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_10__services_organize2_service__["a" /* Organize2 */],
            __WEBPACK_IMPORTED_MODULE_11__services_msg2_service__["a" /* Msg2Service */]])
    ], MainComponent);
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_2__dialog_dialog_close__["a" /* DialogClose */]));



/***/ }),

/***/ "./src/app/msgItem/msgItem.component.css":
/***/ (function(module, exports) {

module.exports = ".msgItem{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    padding: 1rem;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.msgItemUserInfo{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.msgItemUserInfo img{\r\n    width: 2rem;\r\n    height: 2rem;    \r\n}\r\n.msgBubble{\r\n    width: auto;\r\n    color: white !important;\r\n    word-break: break-all;\r\n}\r\n.itemLeft{\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n.itemRight{\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n}\r\n.blueBackground{\r\n    background: #00B5AD !important;\r\n}\r\n.black{\r\n    color:#000;\r\n}\r\n.headImg{\r\n    border-radius: 5px;\r\n    border:1px solid #cecece;\r\n}"

/***/ }),

/***/ "./src/app/msgItem/msgItem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"msgItem\" [ngClass]=\"{itemLeft:isLeft,itemRight:!isLeft}\">\r\n    <div *ngIf=\"isLeft\" class=\"msgItemUserInfo\">\r\n        <img class=\"headImg\" src=\"{{headImg | HeadImgPipe}}\" alt=\"\">\r\n    </div>\r\n    <div class=\"ui basic label msgBubble\" [ngClass]=\"{left:isLeft,right:!isLeft,pointing:true,blueBackground:!isLeft,black:isLeft}\">{{msg}}</div>\r\n    <div *ngIf=\"!isLeft\" class=\"msgItemUserInfo\">\r\n        <img class=\"headImg\" src=\"{{headImg | HeadImgPipe}}\" alt=\"\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/msgItem/msgItem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MsgItemComponent = /** @class */ (function () {
    function MsgItemComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MsgItemComponent.prototype, "isLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MsgItemComponent.prototype, "msg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MsgItemComponent.prototype, "headImg", void 0);
    MsgItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "msg-item",
            template: __webpack_require__("./src/app/msgItem/msgItem.component.html"),
            styles: [__webpack_require__("./src/app/msgItem/msgItem.component.css")]
        })
    ], MsgItemComponent);
    return MsgItemComponent;
}());



/***/ }),

/***/ "./src/app/msgPane/msg-pane.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    z-index: 100;\r\n}\r\n:host{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n#container{\r\n    width: 100%;\r\n    height: 85%;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: 0px 0px 5px #2c3e50;\r\n            box-shadow: 0px 0px 5px #2c3e50;\r\n    background: #fff;\r\n    overflow: hidden;\r\n    position: relative;\r\n    padding-top: 2.5rem;\r\n}\r\n.box{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    position: relative;\r\n}\r\n.xleft{\r\n    width: 30%;\r\n    height: 100%;\r\n    overflow: scroll;\r\n    padding: 1rem;\r\n    padding-top: 1.5rem;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    position: relative;\r\n}\r\n.xright{\r\n    width: 70%;\r\n    height: 100%;\r\n    border-left: 1px solid #cecece;\r\n}\r\n.userItem{\r\n    width: 100%;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    padding: 0.5rem;\r\n    border-bottom: 1px solid #cecece;\r\n}\r\n.headImg{\r\n    width: 3rem;\r\n    height: 3rem;\r\n    border-radius: 5px;\r\n    margin-right: 1rem;\r\n    position: relative;\r\n}\r\n.headImg img{\r\n    width: 3rem;\r\n    height: 3rem;\r\n}\r\n.userName{\r\n    margin: 0px;\r\n}\r\n.isLine{\r\n    padding: 0.3rem;\r\n}\r\n.userList{\r\n    z-index: 100;\r\n    position: relative;\r\n    border-top: 1px solid #cecece;\r\n}\r\n/* \r\n#bar{\r\n    width: 100%;\r\n    height: 4rem;\r\n    position: absolute;\r\n    background: #00B5AD;\r\n    top: 0px;\r\n    left: 0px;\r\n    z-index: -1;\r\n    transition:0.3s all;\r\n} */\r\n#headerBar{\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    height: 2.5rem;\r\n    background: #00B5AD;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n#headerBar button{\r\n    height: 2.5rem;\r\n    width: 2.5rem;\r\n    color: white;\r\n    border-radius: 0px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n.selected{\r\n    background: #00B5AD;\r\n}\r\n.title{\r\n    width: calc(100% - 2.5rem);\r\n    height: 2.5rem;\r\n    text-align: center;\r\n    color: white;\r\n    font-family: \"微软雅黑\";\r\n    line-height: 2.5rem;\r\n}\r\n.text{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.content{\r\n    width: 100%;\r\n    height: calc(100% - 3rem);\r\n    border-bottom:1px solid #cecece;\r\n    overflow: scroll;\r\n}\r\n.textField{\r\n    width: 100%;\r\n    height: 3rem;\r\n    padding: 0.2rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align:center;\r\n        -ms-flex-align:center;\r\n            align-items:center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n.textField div{\r\n    width: 70%;\r\n    margin-left: 0.5rem;\r\n}\r\n.textField button{\r\n    width: 18%; \r\n    border-radius: 5px;\r\n    padding: 0.6rem;\r\n}\r\n/* 消息框 */\r\n.messageBubble{\r\n    position: absolute;\r\n    top: -0.3rem;\r\n    right: -0.5rem;\r\n}\r\n.close{\r\n    border-bottom-right-radius: 5px;\r\n    color: white;\r\n    height: 2rem;\r\n    width: 3rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0.1rem;\r\n}\r\n.headImg{\r\n    border-radius: 5px;\r\n    border:1px solid #cecece;\r\n}"

/***/ }),

/***/ "./src/app/msgPane/msg-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n    <div id=\"headerBar\">\r\n        <button class=\"ui button red close\" (click)=\"back()\">x</button>\r\n        <div class=\"title\">和{{selectedUserName}}的会话</div>\r\n    </div>\r\n    <div class=\"box\" *ngIf=\"chatUsers.length != 0\">\r\n        <div class=\"xleft\">\r\n            <div class=\"userList\">\r\n\r\n                <!--列表项目  -->\r\n                <div class=\"userItem\" [ngClass]=\"{selected:selectedUserName == userObj.userName}\" *ngFor=\"let userObj of chatUsers\" (click)=\"changeSelectedUserName(userObj.userName)\">\r\n                    <div class=\"headImg\">\r\n                        <div class=\"messageBubble ui red label\" *ngIf=\"msg2Service.getInnerMsg()[userObj.userName] != 0\">{{msg2Service.getInnerMsg()[userObj.userName]}}</div>\r\n                        <img class=\"headImg\" src=\"{{userObj.headImg | HeadImgPipe}}\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"userInfo\">\r\n                        <p class=\"userName\">{{userObj.userName}}</p>\r\n                        <button class=\"isLine ui button\">{{userObj.isLine?\"在线\":\"离线\"}}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"xright\">\r\n            <!--聊天面板  -->\r\n            <div class=\"content\" #content [scrollTop]=\"content.scrollHeight\">\r\n                <div *ngFor=\"let msgObj of msgCollections[selectedUserName]\">\r\n                    <msg-item [isLeft]=\"msgObj.user != user.user\" [msg]=\"msgObj.msg\" [headImg]=\"msgObj.headImg\"></msg-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"textField\">\r\n                <div class=\"ui input\">\r\n                    <input type=\"text\" #message>\r\n                </div>\r\n                <button (click)='sendMsg(message.value)' class=\"ui button\">发送</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text\" *ngIf=\"chatUsers.length == 0\">\r\n        <p>暂时没有联系记录</p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/msgPane/msg-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgPaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_stack_service__ = __webpack_require__("./src/app/services/activity-stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.10@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_msg2_service__ = __webpack_require__("./src/app/services/msg2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MsgPaneComponent = /** @class */ (function () {
    function MsgPaneComponent(stack, location, msg2Service, router, subscribeCollection, chatService, user) {
        var _this = this;
        this.stack = stack;
        this.location = location;
        this.msg2Service = msg2Service;
        this.router = router;
        this.subscribeCollection = subscribeCollection;
        this.chatService = chatService;
        this.user = user;
        //聊天的用户容器
        this.chatUsers = [];
        //聊天消息容器
        this.msgCollections = {};
        //当前聊天用户
        this.selectedUserName = "空气";
        this.msg2Service.addListener(function () {
            //获取聊天的用户
            _this.chatUsers = _this.msg2Service.getchatUsers();
            //获取消息容器
            _this.msgCollections = _this.msg2Service.getMsgCollections();
            //更新聊天名称
            _this.selectedUserName = _this.msg2Service.selectedUserName;
        }, true);
        //清空未读消息数目
        this.msg2Service.clearUserInnerMsg(this.selectedUserName);
    }
    //初始化钩子
    MsgPaneComponent.prototype.ngOnInit = function () {
        var _this = this;
        //url入栈
        this.stack.pushURL(this.location.path());
        //获取用户消息
        this.subscribeCollection.addSubscription("MsgPaneGetMsg", this.chatService.getMsg()
            .subscribe(function (data) {
            //获取用户消息
            if (data.tag == "sendMsg") {
                _this.msg2Service.addUserToChatUsers(data.msg.username);
                _this.msg2Service.addMsgToMsgCollections(data.msg.username, data.msg.username, data.msg.body);
                //如果不在当前用户聊天面板，用户的未读消息数目++
                if (data.msg.username != _this.selectedUserName)
                    _this.msg2Service.addInnerMsg(data.msg.username);
            }
        }));
    };
    //发送消息
    MsgPaneComponent.prototype.sendMsg = function (msg) {
        console.log(msg);
        this.msg2Service.addMsgToMsgCollections(this.selectedUserName, this.user.user, msg);
        this.user.sendMsg(this.selectedUserName, msg, "sendMsg");
        //清空输入框
        this.msgInput.nativeElement.value = "";
    };
    //改变当前聊天对象
    MsgPaneComponent.prototype.changeSelectedUserName = function (user) {
        this.msg2Service.selectedUserName = user;
        this.msg2Service.clearUserInnerMsg(user);
    };
    MsgPaneComponent.prototype.back = function () {
        this.stack.popURL();
        this.router.navigate([this.stack.peek()]);
    };
    MsgPaneComponent.prototype.ngOnDestroy = function () {
        //组件销毁时取消订阅
        this.subscribeCollection.unSubscription("MsgPaneGetMsg");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("message"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]
        //发送消息
        )
    ], MsgPaneComponent.prototype, "msgInput", void 0);
    MsgPaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "msg-pane",
            template: __webpack_require__("./src/app/msgPane/msg-pane.component.html"),
            styles: [__webpack_require__("./src/app/msgPane/msg-pane.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_stack_service__["a" /* ActivityStack */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__services_msg2_service__["a" /* Msg2Service */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_subscribe_collection__["a" /* SubscribeCollection */],
            __WEBPACK_IMPORTED_MODULE_6__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* User */]])
    ], MsgPaneComponent);
    return MsgPaneComponent;
}());



/***/ }),

/***/ "./src/app/pipes/friendGamePipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendGamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//补齐organizeArr
function completedOrganizeArr(organizeArr, configService) {
    var tmp = configService.MAX_ORGANIZE_USER_COUNT - organizeArr.length;
    for (var i = 0; i < tmp; i++) {
        organizeArr.push({
            user: "",
            headImg: ""
        });
    }
    return organizeArr;
}
var FriendGamePipe = /** @class */ (function () {
    function FriendGamePipe(configService) {
        this.configService = configService;
    }
    FriendGamePipe.prototype.transform = function (value) {
        return completedOrganizeArr(value, this.configService);
    };
    FriendGamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: "FriendGamePipe" }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */]])
    ], FriendGamePipe);
    return FriendGamePipe;
}());



/***/ }),

/***/ "./src/app/pipes/headImgPipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadImgPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadImgPipe = /** @class */ (function () {
    function HeadImgPipe(configService) {
        this.configService = configService;
    }
    HeadImgPipe.prototype.transform = function (value) {
        return this.configService.exportInterface(value);
    };
    HeadImgPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: "HeadImgPipe" }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */]])
    ], HeadImgPipe);
    return HeadImgPipe;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.productItem{\n    margin-right: 1rem;\n}\n\n.buyBtn{\n    margin-top: 0.5rem;\n}\n\n.buyBtn button{\n    background: #FBBD08;\n    color: white;\n    font-size: 3pt;\n    width: 4rem;\n    height: 2rem;\n    padding: 0px !important;\n}\n\n.describe{\n    width: calc(4rem + 2px);\n    height: calc(5.5rem + 2px);\n    background: #FBBD08;\n    border-radius: 5px;\n    overflow: hidden;\n    border: 1px solid #cecece;\n}\n\n/* 描述图片 */\n\n.describe .img{\n    width: 100%;\n    height: 4rem;\n    background-image: url('mu.e035d6d4e56ee50a7ce0.png');\n    background-size: 100% 100%;\n}\n\n.describe .img img{\n    width: 100%;\n    height: 100%;\n    padding: 0.7rem;\n}\n\n/* 描述名字 */\n\n.describe .name{\n    width: 100%;\n    height: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"productItem\" *ngFor=\"let p of products\">\n    <div class=\"describe\">\n        <div class=\"name\">\n            <span>{{p.name}}</span>\n        </div>\n        <div class=\"img\">\n            <img src=\"{{p.img | HeadImgPipe}}\" alt=\"\">\n        </div>\n    </div>\n    <div class=\"buyBtn\" (click)=\"buyProduct(p.name, p.price)\">\n        <button class=\"ui button\">购买</button>\n    </div>\n</div>\n\n\n<app-dialog *ngIf=\"isDialogView\" [dialogModel]=\"dialogModel\" (close)=\"close()\"></app-dialog>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_stack_service__ = __webpack_require__("./src/app/services/activity-stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.10@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialog_dialog_close__ = __webpack_require__("./src/app/dialog/dialog-close.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductComponent = /** @class */ (function (_super) {
    __extends(ProductComponent, _super);
    function ProductComponent(stack, location, productService, subscribeCollection, user) {
        var _this = _super.call(this) || this;
        _this.stack = stack;
        _this.location = location;
        _this.productService = productService;
        _this.subscribeCollection = subscribeCollection;
        _this.user = user;
        _this.products = [];
        return _this;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        //入栈
        this.stack.pushURL(this.location.path());
        this.subscribeCollection.addSubscription("getProducts", this.productService.getProducts()
            .subscribe(function (res) {
            var data = res.json().products;
            _this.products = data;
        }));
    };
    //购买商品
    ProductComponent.prototype.buyProduct = function (name, price) {
        var _this = this;
        console.log(name, price);
        //检查是否购买重复的商品
        for (var _i = 0, _a = this.user.tools; _i < _a.length; _i++) {
            var t = _a[_i];
            if (t.name == name) {
                this.basicDialog("请不要购买重复的商品", "red");
                return;
            }
        }
        //询问是否确认购买
        this.showDialog({
            title: "提示",
            message: "\u662F\u5426\u82B1\u8D39 " + price + " \u5143\u8D2D\u4E70 " + name + " \uFF1F",
            buttonIndex: 2,
            btn1: { title: "确认", color: "green", func: function () {
                    _this.subscribeCollection.addSubscription("buyProduct", _this.productService.buyProduct(name, price)
                        .subscribe(function (res) {
                        var data = res.json();
                        console.log(data);
                        if (data.err)
                            _this.basicDialog(data.err, "red");
                        else {
                            _this.basicDialog("付款成功");
                            _this.user.updateUserProperty(true);
                        }
                    }));
                } },
            btn2: { title: "算了", color: "red", func: function () { } }
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.subscribeCollection.unSubscription("buyProduct");
        this.subscribeCollection.unSubscription("getProducts");
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_stack_service__["a" /* ActivityStack */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4__services_subscribe_collection__["a" /* SubscribeCollection */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* User */]])
    ], ProductComponent);
    return ProductComponent;
}(__WEBPACK_IMPORTED_MODULE_5__dialog_dialog_close__["a" /* DialogClose */]));



/***/ }),

/***/ "./src/app/ready-pane/ready-pane.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    background: rgba(0, 0, 0, 0.5);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top:0px;\n    left: 0px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.drawPane{\n    width: 60%;\n    height: 60%;\n    border-radius: 10px;\n    -webkit-box-shadow: 0px 0px 10px #000;\n            box-shadow: 0px 0px 10px #000;\n    position: relative;    \n}\n\n.header ,.footer{\n    width: 100%;\n    background: #2d3436;\n}\n\n.header{\n    height: 20%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n\n.footer{\n    height: 30%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.footer #confirm{\n    border-radius: 100px;\n    color: white;\n    background: #FDCB6C;\n    text-shadow: 0px 0px 1px saddlebrown;\n}\n\n.confirmClick{\n    background:#b2bec3 !important;\n    text-shadow: 0px 0px 0px #000 !important;\n}\n\n.cont{\n    width: 100%;\n    height: 50%;\n    background: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    padding: 0.5rem;\n}\n\n.playerBox{\n    width: 3rem;\n    height: 3rem;\n    background: brown;\n    border-radius: 2px;\n    -webkit-box-shadow: 0px 0px 2px #000;\n            box-shadow: 0px 0px 2px #000;\n}\n\n.playerBox img{\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 2px;\n}\n\n.title{\n    width: 50%;\n    height: 80%;\n    background: #FDCB6C;\n    color: white;\n    /* border-bottom-left-radius: 100px; */\n    /* border-bottom-right-radius: 100px; */\n    /* text-align: center; */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-shadow: 0px 0px 1px #000;\n    font-size: 14pt;\n    position: relative;\n}\n\n.leftPencil{\n    position: absolute;\n    height: 5rem !important;\n    left: -1px !important;\n    top: -1rem !important;\n}\n\n.rightPencil{\n    position: absolute !important;\n    height: 5rem;\n    right: -1px !important;\n    top: -1rem !important;\n}\n\n.grayscale{\n    -webkit-filter: grayscale(100%) !important;\n            filter: grayscale(100%) !important;\n}"

/***/ }),

/***/ "./src/app/ready-pane/ready-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"drawPane\">\n    <div class=\"header\">\n        <div class=\"title\">\n            准备队列\n            <img class=\"leftPencil\" src=\"../../assets/imgs/loading.png\" alt=\"\">\n            <img class=\"rightPencil\" src=\"../../assets/imgs/loading.png\" alt=\"\">\n        </div>\n    </div>\n    <div class=\"cont\">\n        <div *ngFor=\"let player of readyQueue\" class=\"playerBox\">\n            <img src=\"{{player.headImg}}\" alt=\"\" [ngClass]=\"{'grayscale':!player.isReady}\">\n        </div>\n    </div>\n    <div class=\"footer\">\n        <button id=\"confirm\" [ngClass]=\"{'confirmClick':isClick}\" class=\"ui button\" (click)=\"confirm()\">确认准备</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ready-pane/ready-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadyPaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReadyPaneComponent = /** @class */ (function () {
    function ReadyPaneComponent(configService, user, chatService) {
        this.configService = configService;
        this.user = user;
        this.chatService = chatService;
        //确认按钮点击样式变换
        this.isClick = false;
        //是否可以点击准备按钮
        this.isLock = true;
    }
    ReadyPaneComponent.prototype.ngOnInit = function () {
    };
    ReadyPaneComponent.prototype.confirm = function () {
        if (this.isLock) {
            this.isClick = true;
            this.chatService.updateReadyQueue();
            this.isLock = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ReadyPaneComponent.prototype, "readyQueue", void 0);
    ReadyPaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ready-pane',
            template: __webpack_require__("./src/app/ready-pane/ready-pane.component.html"),
            styles: [__webpack_require__("./src/app/ready-pane/ready-pane.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */]])
    ], ReadyPaneComponent);
    return ReadyPaneComponent;
}());



/***/ }),

/***/ "./src/app/services/activity-stack.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityStack; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * 功能：维护一个执行栈，管理组件的访问
 */
var ActivityStack = /** @class */ (function () {
    function ActivityStack() {
        //执行栈
        this.stack = [];
    }
    //访问执行栈
    ActivityStack.prototype.getStack = function () {
        return this.stack;
    };
    //压入url到执行栈
    ActivityStack.prototype.pushURL = function (url) {
        //防止相邻的两个栈帧重复
        if (this.peek() == url)
            return;
        //入栈
        this.stack.push(url);
    };
    //弹出url
    ActivityStack.prototype.popURL = function () {
        return this.stack.pop();
    };
    //访问栈顶元素，不弹出
    ActivityStack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    //重置执行栈
    ActivityStack.prototype.reset = function () {
        this.stack = [];
    };
    ActivityStack = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ActivityStack);
    return ActivityStack;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/_rxjs@5.5.10@rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var io = __webpack_require__("./node_modules/_socket.io-client@2.0.4@socket.io-client/lib/index.js");
/**
 * 用于与服务器建立websocket连接的service
 */
var ChatService = /** @class */ (function () {
    function ChatService(user, http, configService) {
        this.user = user;
        this.http = http;
        this.configService = configService;
        this.location = "http://localhost:3000";
        //readyQueue 进入游戏后需要渲染的
        this._readyQueue = [];
    }
    Object.defineProperty(ChatService.prototype, "readyQueue", {
        get: function () {
            return this._readyQueue;
        },
        set: function (rq) {
            this._readyQueue = rq;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatService.prototype, "roomID", {
        get: function () {
            return this._roomID;
        },
        set: function (rid) {
            this._roomID = rid;
        },
        enumerable: true,
        configurable: true
    });
    //建立websocket连接
    ChatService.prototype.connect = function (connection, disconnect) {
        var _this = this;
        this.socket = io.connect(this.location);
        console.log(this.socket);
        //连接回调
        this.socket.on("connection", function () {
            if (connection)
                connection(_this.socket);
            _this.socket.emit("changeLine", { user: _this.user.getUserInfo().user, isLine: true });
        });
        //更新用户在线信息
        console.log("\u53D1\u9001\u7684\u7528\u6237\u540D " + this.user.getUserInfo().user);
    };
    //断开连接
    ChatService.prototype.disconnect = function () {
        //断开连接
        if (this.socket) {
            //更新用户在线信息
            this.socket.emit("changeLine", { user: this.user.getUserInfo().user, isLine: false });
            //主动断开连接
            this.socket.disconnect();
            //等待GC回收
            this.socket = null;
        }
    };
    //参与匹配
    ChatService.prototype.match = function (user) {
        this.socket.emit("match", { user: user });
    };
    //获取socket对象
    ChatService.prototype.getSocket = function () {
        return this.socket;
    };
    //匹配成功
    ChatService.prototype.matchSuccessful = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.once("matchSuccessful", function (roomID) {
                _this.roomID = roomID;
                observer.next(true);
            });
        });
    };
    //通知服务器更改图片
    ChatService.prototype.changeCanvas = function (dataURL) {
        this.socket.emit("changeCanvas", { dataURL: dataURL, roomID: this.roomID });
    };
    //接收服务器更新通知
    ChatService.prototype.getUpdateCanvas = function () {
        var _this = this;
        //更新Canvas成功
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("changeCanvasSuccessful", function (dataURL) {
                observer.next(dataURL);
            });
        });
    };
    //获取问题
    ChatService.prototype.getQuestion = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("getQuestion", function (data) {
                observer.next(data);
            });
        });
    };
    //验证答案是否正确
    ChatService.prototype.validAnswer = function (answer) {
        this.socket.emit("validAnswer", { answer: answer, roomID: this.roomID });
    };
    //接收验证答案结果
    ChatService.prototype.validAnswerResult = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("validAnswerResult", function (data) {
                observer.next(data);
            });
        });
    };
    //服务器通知可以绘图
    ChatService.prototype.canDraw = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("canDraw", function (data) {
                observer.next(data);
            });
        });
    };
    //通知服务器游戏开始
    ChatService.prototype.beginGame = function () {
        this.socket.emit("beginGame", { roomID: this.roomID });
    };
    //服务器通知游戏结束
    ChatService.prototype.gameOver = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("gameOver", function () {
                observer.next();
            });
        });
    };
    //服务器通知更新好友列表状态信息
    ChatService.prototype.updateFriendList = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("updateFriendList", function () {
                observer.next();
            });
        });
    };
    //服务器通知清空画布
    ChatService.prototype.clearCanvas = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("clearCanvas", function () {
                observer.next();
            });
        });
    };
    //发送组队邀请好友
    // sendRequestToFriend(user:string){
    //     this.socket.emit("sendRequestToFriend",{user:this.user.getUserInfo().user,targetUser:user,first:this.organize.getOrganizeFirst()});
    // }
    //接收用户请求
    ChatService.prototype.getRequest = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("getRequest", function (data) {
                observer.next(data);
            });
        });
    };
    //服务器通知更新队伍信息
    ChatService.prototype.updateInfo = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("updateInfo", function (data) {
                observer.next(data);
            });
        });
    };
    //接收其它用户发来的消息
    ChatService.prototype.getMsg = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("userMsg", function (data) {
                observer.next({ msg: data.msg, tag: data.tag });
            });
        });
    };
    //获取正确答案
    ChatService.prototype.getRightAnswer = function () {
        return this.http.post(this.configService.exportInterface("/getRightAnswer"), { roomID: this.roomID });
    };
    // //进入下一轮游戏
    // nextGame(){
    //     this.http.post(this.configService.exportInterface("/nextGame"),{roomID:this.roomID})
    //         .subscribe(() => {})
    // }
    //更新准备队列
    ChatService.prototype.updateReadyQueue = function () {
        this.http.post(this.configService.exportInterface("/updateReadyQueue"), { user: this.user.user, roomID: this.roomID })
            .subscribe(function () { });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* ConfigService */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.PROTOCAL = "http"; //使用的协议
        this.SERVER_HOST = "localhost"; //服务器主机地址
        this.SERVER_PORT = "3000"; //服务器端口
        this.AGE_ARR = []; //用于显示的年龄数组
        this.MAX_MATCH_TIME = 5000; //最大匹配超时时间
        this.MAX_ORGANIZE_USER_COUNT = 4; //组队最大人数
        this.LEVEL_INCREMENT = 15; //等级增量
        this.MAX_TIME = 60; //绘画的时候最大超时时间
        //初始化一个202大小的数组，保证整个应用只初始化一次
        for (var i = -1; i <= 200; i++) {
            this.AGE_ARR.push(i);
        }
    }
    //生成访问接口
    ConfigService.prototype.exportInterface = function (path) {
        return this.PROTOCAL + "://" + this.SERVER_HOST + ":" + this.SERVER_PORT + (path || "");
    };
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/login-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 登录路由守卫
 */
var LoginAuthGuard = /** @class */ (function () {
    function LoginAuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    LoginAuthGuard.prototype.canActivate = function () {
        if (this.user.getLoginState()) {
            return true;
        }
        else {
            this.router.navigate(['entry']);
            return this.user.getLoginState();
        }
    };
    LoginAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* User */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginAuthGuard);
    return LoginAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/msg2.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Msg2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Msg2Service = /** @class */ (function () {
    function Msg2Service(http, configService) {
        this.http = http;
        this.configService = configService;
        //储存聊天用户的容器
        this.chatUsers = [];
        //聊天消息容器
        this.msgCollections = {};
        //内部消息数目
        this._innerMsg = {};
        //当前选择用户
        this._selectedUserName = "空气";
        //监听者队列
        this.listeners = [];
    }
    Object.defineProperty(Msg2Service.prototype, "selectedUserName", {
        get: function () {
            return this._selectedUserName;
        },
        set: function (value) {
            this._selectedUserName = value;
            this.executeListener();
        },
        enumerable: true,
        configurable: true
    });
    //添加未读消息
    Msg2Service.prototype.addInnerMsg = function (user) {
        if (!this._innerMsg.hasOwnProperty(user))
            this._innerMsg[user] = 0;
        this._innerMsg[user]++;
        this.executeListener();
    };
    //获取未读消息对象
    Msg2Service.prototype.getInnerMsg = function () {
        return this._innerMsg;
    };
    //获取未读消息总数
    Msg2Service.prototype.getInnerMsgCount = function () {
        var count = 0;
        for (var index in this._innerMsg) {
            count += this._innerMsg[index];
        }
        return count;
    };
    //清空指定用户的消息数量
    Msg2Service.prototype.clearUserInnerMsg = function (user) {
        this._innerMsg[user] = 0;
        this.executeListener();
    };
    //功能：添加用户进聊天用户容器
    Msg2Service.prototype.addUserToChatUsers = function (user) {
        var _this = this;
        var isExist = false;
        for (var _i = 0, _a = this.chatUsers; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.userName == user)
                isExist = true;
        }
        if (isExist)
            return;
        this.http.post(this.configService.exportInterface("/getUserInfo"), { user: user })
            .subscribe(function (res) {
            var data = res.json().successful[0];
            _this.chatUsers.push({
                headImg: data.headImg,
                userName: user,
                isLine: data.isLine
            });
            _this.executeListener();
        });
    };
    //从聊天用户容器里将用户删除 TODO
    Msg2Service.prototype.removeUserToChatUsers = function (user) {
        for (var _i = 0, _a = this.chatUsers; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.userName == user)
                this.chatUsers.splice(this.chatUsers.indexOf(obj), 1);
        }
        this.executeListener();
    };
    //添加消息进消息容器
    Msg2Service.prototype.addMsgToMsgCollections = function (user, sendUser, msg) {
        var _this = this;
        //判断是否存在
        if (!this.msgCollections.hasOwnProperty(user)) {
            this.msgCollections[user] = [];
        }
        this.http.post(this.configService.exportInterface("/getUserInfo"), { user: sendUser })
            .subscribe(function (res) {
            var data = res.json().successful[0];
            _this.msgCollections[user].push({
                headImg: data.headImg,
                msg: msg,
                user: sendUser
            });
            _this.executeListener();
        });
    };
    //添加监听者
    Msg2Service.prototype.addListener = function (listener, isExecute) {
        if (this.listeners.indexOf(listener) == -1)
            this.listeners.push(listener);
        if (isExecute)
            listener();
    };
    //遍历监听者执行
    Msg2Service.prototype.executeListener = function () {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    //获取用户容器
    Msg2Service.prototype.getchatUsers = function () {
        return this.chatUsers;
    };
    //获取聊天容器
    Msg2Service.prototype.getMsgCollections = function () {
        return this.msgCollections;
    };
    Msg2Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
    ], Msg2Service);
    return Msg2Service;
}());



/***/ }),

/***/ "./src/app/services/organize2.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Organize2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 组队匹配第二版
 */
var Organize2 = /** @class */ (function () {
    function Organize2(http, user, configService) {
        this.http = http;
        this.user = user;
        this.configService = configService;
        //组队的用户列表
        this.userArr = [];
        //监听者队列
        this.listeners = [];
        //是否为队伍的创始人
        this._isCaptain = false;
    }
    Object.defineProperty(Organize2.prototype, "isCaptain", {
        get: function () {
            return this._isCaptain;
        },
        set: function (isCaptain) {
            this._isCaptain = isCaptain;
        },
        enumerable: true,
        configurable: true
    });
    //初始化用户列表
    Organize2.prototype.init = function (userArr) {
        this.userArr = userArr;
    };
    //添加用户
    Organize2.prototype.addUser = function (cb) {
        var _this = this;
        this.addAndRemove("/addUserInOrganize2")
            .subscribe(function (res) {
            _this.userArr = res.json().organize;
            _this.evalutedListener();
            console.log(_this.userArr);
            if (cb)
                cb();
        });
    };
    //删除用户
    Organize2.prototype.removeUser = function (cb) {
        var _this = this;
        this.addAndRemove("/removeUserInOrganize2")
            .subscribe(function (res) {
            _this.userArr = res.json().organize;
            _this.evalutedListener();
            if (cb)
                cb();
        });
    };
    //创建队伍 自己为队长
    Organize2.prototype.createOrganize = function (cb) {
        var _this = this;
        this.http.post(this.configService.exportInterface("/createOrganize2"), {
            captain: {
                user: this.user.user,
                headImg: this.user.headImg
            }
        })
            .subscribe(function (res) {
            var data = res.json().organize;
            _this.userArr = data;
            if (cb)
                cb();
        });
    };
    //销毁队伍
    Organize2.prototype.dropOrganize = function () {
        this.http.post(this.configService.exportInterface("/dropOrganize"), { user: { user: this.user.user } })
            .subscribe(function () { });
    };
    //获取队伍数组
    Organize2.prototype.getOrganizeArr = function () {
        return this.userArr;
    };
    Organize2.prototype.addAndRemove = function (tag) {
        if (this.userArr.length == 0)
            throw new Error("请先初始化用户列表");
        return this.http.post(this.configService.exportInterface(tag), {
            captain: this.userArr[0],
            user: {
                user: this.user.user,
                headImg: this.user.headImg
            }
        });
    };
    //添加监听者
    Organize2.prototype.addListener = function (func) {
        this.listeners.push(func);
    };
    //遍历监听者执行
    Organize2.prototype.evalutedListener = function () {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var func = _a[_i];
            func();
        }
    };
    Organize2.prototype.isMatch = function (isMatch) {
        this.http.post(this.configService.exportInterface("/organizeMatch"), { user: this.userArr[0].user, isMatch: isMatch })
            .subscribe(function () { });
    };
    //组队匹配
    Organize2.prototype.match = function () {
        this.isMatch(true);
    };
    Organize2.prototype.removeOrganizeToMatch = function () {
        this.isMatch(false);
    };
    Organize2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]])
    ], Organize2);
    return Organize2;
}());



/***/ }),

/***/ "./src/app/services/point.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 积分制
 */
var Point = /** @class */ (function () {
    function Point(http, configService, user) {
        this.http = http;
        this.configService = configService;
        this.user = user;
        //自己画加的分数
        this.HOST_POINT = 2;
        //别人画加的分数
        this.BY_AWAY_POINT = 3;
        //自己画加的金币
        this.HOST_MONEY = 10;
        //别人画加的金币
        this.BY_AWAY_MONEY = 15;
        //分数缓存
        this.pointCache = 0;
        //金币缓存
        this.moneyCache = 0;
    }
    Point.prototype.readData = function (inter) {
        return this.http.post(this.configService.exportInterface(inter), { user: this.user.user });
    };
    //读取分数
    Point.prototype.readPoint = function () {
        return this.readData("/readPoint");
    };
    //读取金币
    Point.prototype.readMoney = function () {
        return this.readData("/readMoney");
    };
    //修改分数
    Point.prototype.updatePoint = function () {
        var _this = this;
        this.http.post(this.configService.exportInterface("/updatePoint"), {
            user: this.user.user,
            pointValue: this.pointCache
        })
            .subscribe(function () {
            //结算后重置
            console.log("\u589E\u52A0\u5206\u6570" + _this.pointCache);
            _this.resetPointCache();
        });
    };
    //修改金币
    Point.prototype.updateMoney = function () {
        var _this = this;
        this.http.post(this.configService.exportInterface("/updateMoney"), {
            user: this.user.user,
            moneyValue: this.moneyCache
        })
            .subscribe(function () {
            //结算后重置
            console.log("\u589E\u52A0\u91D1\u5E01" + _this.moneyCache);
            _this.resetMoneyCache();
        });
    };
    //重置分数缓存
    Point.prototype.resetPointCache = function () {
        this.pointCache = 0;
    };
    //重置金币缓存
    Point.prototype.resetMoneyCache = function () {
        this.moneyCache = 0;
    };
    //增加分数缓存
    Point.prototype.addPointCache = function (pointValue) {
        this.pointCache += pointValue;
    };
    //增加金币缓存
    Point.prototype.addMoneyCache = function (moneyValue) {
        this.moneyCache += moneyValue;
    };
    Point = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* User */]])
    ], Point);
    return Point;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 商品service
 */
var ProductService = /** @class */ (function () {
    function ProductService(http, configService, user) {
        this.http = http;
        this.configService = configService;
        this.user = user;
    }
    //获取商品列表
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.configService.exportInterface("/getAllProducts"));
    };
    //购买商品
    ProductService.prototype.buyProduct = function (name, money) {
        return this.http.post(this.configService.exportInterface("/buyProduct"), { name: name, money: money, user: this.user.user });
    };
    //获取自己的工具
    ProductService.prototype.getTools = function () {
        return this.http.post(this.configService.exportInterface("/getTools"), { user: this.user.user });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* User */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/subscribe-collection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeCollection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SubscribeCollection = /** @class */ (function () {
    function SubscribeCollection() {
        this.subscriptions = new Map();
    }
    SubscribeCollection.prototype.addSubscription = function (key, subscription) {
        this.subscriptions.set(key, subscription);
    };
    SubscribeCollection.prototype.unSubscription = function (key) {
        if (this.subscriptions.get(key)) {
            this.subscriptions.get(key).unsubscribe();
            this.subscriptions.delete(key);
            console.log("取消订阅");
        }
    };
    SubscribeCollection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SubscribeCollection);
    return SubscribeCollection;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/_rxjs@5.5.10@rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/_@angular_http@5.2.10@@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__("./src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 用户登录服务
 */
var User = /** @class */ (function () {
    function User(http, configService) {
        this.http = http;
        this.configService = configService;
        //用户未读消息数量
        this.msgCount = 0;
        //头像路径
        this.headImg = "";
        //金币数量
        this.money = 0;
        //性别
        this.sex = "null";
        //年龄
        this.age = -1;
        //积分
        this.point = 0;
        //等级
        this.level = 0;
        //显示积分
        this.pointView = 0;
        //工具
        this.tools = [];
        //监听者容器
        this.listeners = [];
    }
    //登录成功
    User.prototype.login = function (user) {
        this.user = user;
        localStorage.setItem("user", user);
        this.isLogin = true;
    };
    //登出
    User.prototype.loginOut = function () {
        this.user = null;
        localStorage.setItem("user", null);
        this.isLogin = false;
    };
    //获取登录状态
    User.prototype.getLoginState = function () {
        return this.isLogin;
    };
    //获取用户信息
    User.prototype.getUserInfo = function () {
        return { 'user': this.user };
    };
    //获取用户未读消息数目
    User.prototype.getMsgCount = function () {
        return this.msgCount;
    };
    //增加用户未读消息数目
    User.prototype.addMsgCount = function () {
        this.msgCount++;
    };
    //获取好友列表数组
    User.prototype.getFriendList = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */](function (observer) {
            return _this.http.post(_this.configService.exportInterface("/getUser/") + _this.user, {})
                .subscribe(function (res) {
                var data = res.json().successful[0];
                _this.http.post(_this.configService.exportInterface("/getFriendList"), { friendList: data.friends })
                    .subscribe(function (res) {
                    var data = res.json();
                    observer.next(data.successful);
                });
            });
        });
    };
    //添加好友
    User.prototype.addFriend = function (targetUser, msg) {
        return this.http.post(this.configService.exportInterface("/addFriend"), { user: this.getUserInfo().user, targetUser: targetUser, msg: msg });
    };
    //设置用户的空闲状态
    User.prototype.setFreeState = function (isFree) {
        return this.http.post(this.configService.exportInterface("/setFreeState"), { user: this.user || localStorage.getItem("user"), isFree: isFree });
    };
    //获取指定用户空闲状态
    User.prototype.getFreeState = function (targetUser) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.http.post(_this.configService.exportInterface("/getUser/") + targetUser, {})
                .toPromise()
                .then(function (res) {
                var data = res.json();
                if (data.successful) {
                    observer.next({ isFree: data.successful[0].isFree, isLine: data.successful[0].isLine });
                }
                else {
                    throw new Error("不存在的用户");
                }
            });
        });
    };
    //发送消息
    User.prototype.sendMsg = function (targetUser, msg, tag, user) {
        this.http.post(this.configService.exportInterface("/sendMsg"), { targetUser: targetUser, msg: msg, tag: tag, user: user || this.user })
            .subscribe(function () { return console.log("发送消息成功"); });
    };
    //双方添加好友
    User.prototype.addFriendTrue = function (targetUser) {
        var _this = this;
        this.http.post(this.configService.exportInterface("/addFriendTrue"), { targetUser: targetUser, user: this.user })
            .subscribe(function () {
            //通知双方添加成功
            _this.sendMsg(_this.user, "", "addFriendSuccess");
            _this.sendMsg(targetUser, "", "addFriendSuccess");
        });
    };
    /**
     * 功能：当调用了此函数更新用户数据时，遍历所有监听者，使其数据更新
     * @param isListener 是否添加进监听者队列
     * @param cb 监听者回调
     * @param isExecute 是是否遍历监听者
     */
    User.prototype.updateUserProperty = function (isExecute, isListener, cb) {
        var _this = this;
        console.log("请求用户数据更新...");
        this.http.post(this.configService.exportInterface("/getUserInfo"), { user: this.user })
            .subscribe(function (res) {
            var data = res.json();
            console.log(data);
            if (data.err) {
                console.log(data.err);
                return;
            }
            data = data.successful[0];
            _this.user = data.user;
            _this.headImg = data.headImg;
            _this.money = data.money;
            _this.sex = data.sex;
            _this.age = data.age;
            _this.point = data.point;
            _this.pointView = _this.point % _this.configService.LEVEL_INCREMENT;
            _this.level = parseInt(_this.point / _this.configService.LEVEL_INCREMENT + '') + 1;
            _this.tools = data.tools;
            if (isExecute) {
                //遍历监听者执行
                for (var _i = 0, _a = _this.listeners; _i < _a.length; _i++) {
                    var listener = _a[_i];
                    listener();
                }
                return;
            }
            //更新完信息回调
            if (cb) {
                if (!isListener) {
                    cb();
                    return;
                }
                //进入监听者容器
                if (_this.listeners.indexOf(cb) == -1)
                    _this.listeners.push(cb);
                //遍历监听者执行
                for (var _b = 0, _c = _this.listeners; _b < _c.length; _b++) {
                    var listener = _c[_b];
                    listener();
                }
            }
        });
    };
    //直接进入监听者队列
    /**
     *
     * @param listener 监听者
     * @param isExecute 是否立即执行
     */
    User.prototype.directPushListener = function (listener, isExecute) {
        if (isExecute)
            listener();
        if (this.listeners.indexOf(listener) == -1)
            this.listeners.push(listener);
    };
    //上传头像接口
    User.prototype.uploadHeadImg = function (formData) {
        return this.http.post(this.configService.exportInterface("/uploadHeadImg"), formData);
    };
    //保存用户信息
    User.prototype.saveUserInfo = function (obj) {
        obj['user'] = this.user;
        return this.http.post(this.configService.exportInterface("/saveUserInfo"), obj);
    };
    //将用户从匹配队列中删除
    User.prototype.removeUserToMatch = function () {
        this.http.post(this.configService.exportInterface("/removeUserToMatch"), { user: this.user })
            .subscribe(function () { });
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]])
    ], User);
    return User;
}());



/***/ }),

/***/ "./src/app/shop-pane/shop-pane.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.contai{\n    width: 100%;\n    height: 85%;\n    background: #fff;\n    border-radius: 5px;\n    -webkit-box-shadow: 0px 0px 5px #2c3e50;\n            box-shadow: 0px 0px 5px #2c3e50;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: hidden;\n}\n\n.back{\n    height: 1.5rem;\n    padding-top: 0.6rem;\n    padding-left: 0.6rem;\n    padding-right: 0.6rem;\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.back img{\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.header{\n    height: 2rem;\n    width: 100%;\n    position: relative;\n    text-align: center;\n    overflow: hidden;\n    line-height: 2rem;\n    font-size: 15pt;\n    font-family: \"楷体\";\n    color: white;\n    background: #FBBD08;\n    text-shadow: 0px 0px 2px #000;\n}\n\n.content{\n    width: 100%;\n    height: calc(100% - 2rem);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n#left{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    border-right: 1px solid #cecece;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n#right{\n    -webkit-box-flex:2;\n        -ms-flex:2;\n            flex:2;\n    padding: 1rem;\n    padding-right: 0px;\n    overflow-x: scroll;\n    \n}\n\n.backpack{\n    margin-top: 1rem;\n}\n\n.headImgContai{\n    width: 6.5rem;\n    height: 6.5rem;\n    border-radius: 5px;\n    position: relative;\n    border:solid 1px #cecece;\n    overflow: hidden;\n}\n\n.headImgContai img{\n    display: block;\n    width: 6.5rem;\n    height: 6.5rem;\n}\n\n.fireworks{\n    position: absolute;\n    right: 0px;\n}\n\n.gift{\n    position: absolute;\n    left:0px;\n    bottom: 0px;\n}\n\n.backpack button {\n    font-size: 0.8rem !important;\n}"

/***/ }),

/***/ "./src/app/shop-pane/shop-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contai\">\n    <div class=\"header\">\n        <div (click)=\"back()\" class=\"back\">\n            <img src=\"../../../../assets/imgs/back.png\" alt=\"\">\n        </div>\n        <span>商店</span>\n    </div>\n    <div class=\"content\">\n        <div class=\"fireworks\"><img src=\"../../assets/imgs/fireworks.png\" alt=\"\"></div>\n        <div class=\"gift\"><img src=\"../../assets/imgs/gift.png\" alt=\"\"></div>\n        <div id=\"left\">\n            <div (click)=\"updateHeadImg()\" class=\"headImgContai\">\n                <img src=\"{{headImg | HeadImgPipe}}\" alt=\"\">\n            </div>\n            <div class=\"backpack\">\n                <button [routerLink]=\"['./backpack']\" class=\"ui button\">\n                    <i class=\"suitcase icon\"></i>\n                    背包\n                </button>\n            </div>\n        </div>\n        <div id=\"right\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shop-pane/shop-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_stack_service__ = __webpack_require__("./src/app/services/activity-stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.10@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShopPaneComponent = /** @class */ (function () {
    function ShopPaneComponent(stack, location, router, user) {
        this.stack = stack;
        this.location = location;
        this.router = router;
        this.user = user;
        //用户头像
        this.headImg = "";
    }
    ShopPaneComponent.prototype.ngOnInit = function () {
        var _this = this;
        //获取用户信息
        this.user.directPushListener(function () {
            _this.headImg = _this.user.headImg;
        }, true);
    };
    //返回上一级
    ShopPaneComponent.prototype.back = function () {
        this.stack.popURL();
        this.router.navigate([this.stack.peek()]);
    };
    ShopPaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shop-pane',
            template: __webpack_require__("./src/app/shop-pane/shop-pane.component.html"),
            styles: [__webpack_require__("./src/app/shop-pane/shop-pane.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_stack_service__["a" /* ActivityStack */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* User */]])
    ], ShopPaneComponent);
    return ShopPaneComponent;
}());



/***/ }),

/***/ "./src/app/update-head-img/update-head-img.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    width:50%;\n    height: 85%;\n    background: white;\n    border-radius: 5px;\n    -webkit-box-shadow:0px 0px 5px #cecece;\n            box-shadow:0px 0px 5px #cecece;\n    overflow: hidden;\n}\n\n.header{\n    height: 2rem;\n    width: 100%;\n    position: relative;\n    text-align: center;\n    overflow: hidden;\n    line-height: 2rem;\n    font-size: 15pt;\n    font-family: \"楷体\";\n    color: white;\n    background: #2ecc71;\n    text-shadow: 0px 0px 2px #000;\n}\n\n.back{\n    height: 1.5rem;\n    padding-top: 0.6rem;\n    padding-left: 0.6rem;\n    padding-right: 0.6rem;\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.back img{\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.cont{\n    width: 100%;\n    height: calc(100% - 2rem);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n/* 头像 */\n\n.headImgContai{\n    width: 6.5rem;\n    height: 6.5rem;\n    border-radius: 5px;\n    position: relative;\n    border: solid 1px #cecece;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.headImgContai img{\n    display: block;\n    width: 6.5rem;\n    height: 6.5rem;\n}\n\n.func{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    padding: 1rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.func button{\n    padding: 0.5rem !important;\n}"

/***/ }),

/***/ "./src/app/update-head-img/update-head-img.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n        <div (click)=\"back()\" class=\"back\">\n            <img src=\"../../../../assets/imgs/back.png\" alt=\"\">\n        </div>\n        <span>\n            上传头像\n        </span>\n</div>\n\n<div class=\"cont\">\n    <div class=\"headImgContai\">\n        <img src=\"{{headImg}}\" alt=\"\">\n    </div>\n    <div class=\"func\">\n        <input #file type=\"file\" name=\"headImg\" [ngStyle]=\"{'display':'none'}\" (change)=\"fileChange()\">\n        <button (click)=\"selectHeadImg()\" class=\"ui button\">选择头像</button>\n        <button (click)=\"uploadHeadImg()\" class=\"ui button\">上传头像</button>\n    </div>\n</div>\n\n<app-dialog *ngIf=\"isDialogView\" [dialogModel]=\"dialogModel\" (close)=\"close()\"></app-dialog>\n"

/***/ }),

/***/ "./src/app/update-head-img/update-head-img.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateHeadImgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_stack_service__ = __webpack_require__("./src/app/services/activity-stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.10@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_close__ = __webpack_require__("./src/app/dialog/dialog-close.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateHeadImgComponent = /** @class */ (function (_super) {
    __extends(UpdateHeadImgComponent, _super);
    function UpdateHeadImgComponent(user, config, stack, location, router, configService) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.config = config;
        _this.stack = stack;
        _this.location = location;
        _this.router = router;
        _this.configService = configService;
        //头像访问uri
        _this.headImg = "";
        //上传的文件实体
        _this.fileEntity = null;
        return _this;
    }
    UpdateHeadImgComponent.prototype.ngOnInit = function () {
        //入栈
        this.stack.pushURL(this.location.path());
        this.headImg = this.configService.exportInterface(this.user.headImg);
    };
    //返回上一级
    UpdateHeadImgComponent.prototype.back = function () {
        this.stack.popURL();
        this.router.navigate([this.stack.peek()]);
    };
    //选择图片
    UpdateHeadImgComponent.prototype.selectHeadImg = function () {
        var f = this.file.nativeElement;
        //选择文件
        f.click();
    };
    //上传头像
    UpdateHeadImgComponent.prototype.uploadHeadImg = function () {
        var _this = this;
        if (!this.fileEntity) {
            this.basicDialog("请先选择图片");
            return;
        }
        var formData = new FormData();
        formData.append("headImg", this.fileEntity);
        formData.append("user", this.user.getUserInfo().user);
        //提交头像到后端
        this.user.uploadHeadImg(formData)
            .subscribe(function (res) {
            var data = res.json();
            _this.user.updateUserProperty(true);
            _this.basicDialog("上传成功");
        });
    };
    //上传文件回调
    UpdateHeadImgComponent.prototype.fileChange = function () {
        var _this = this;
        //判断是否选中的为图片
        var imgRegex = /^image\/.*$/;
        var f = this.file.nativeElement;
        var fileEntity = f.files[0];
        if (!imgRegex.test(fileEntity.type)) {
            this.basicDialog("请上传一个图片");
            return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
            //更新图片
            _this.headImg = fileReader.result;
            _this.fileEntity = fileEntity;
        };
        //读取图片
        if (fileEntity)
            fileReader.readAsDataURL(fileEntity);
        console.log(fileEntity);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("file"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]
        //选择图片
        )
    ], UpdateHeadImgComponent.prototype, "file", void 0);
    UpdateHeadImgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-head-img',
            template: __webpack_require__("./src/app/update-head-img/update-head-img.component.html"),
            styles: [__webpack_require__("./src/app/update-head-img/update-head-img.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_3__services_activity_stack_service__["a" /* ActivityStack */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */]])
    ], UpdateHeadImgComponent);
    return UpdateHeadImgComponent;
}(__WEBPACK_IMPORTED_MODULE_6__dialog_dialog_close__["a" /* DialogClose */]));



/***/ }),

/***/ "./src/app/user-page/user-page.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    width:100%;\n    height: 85%;\n    background: white;\n    border-radius: 5px;\n    -webkit-box-shadow:0px 0px 5px #cecece;\n            box-shadow:0px 0px 5px #cecece;\n    overflow: hidden;\n}\n\n.c{\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.contai{\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n/* 左侧容器 */\n\n.lf{\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    height: 100%;\n    border-right: solid 1px #cecece;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n/* 右侧容器 */\n\n.rg{\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n/* 头像 */\n\n.headImgContai{\n    width: 6.5rem;\n    height: 6.5rem;\n    border-radius: 5px;\n    position: relative;\n    border:solid 1px #cecece;\n    overflow: hidden;\n}\n\n.headImgContai img{\n    display: block;\n    width: 6.5rem;\n    height: 6.5rem;\n}\n\n.name{\n    width: 100%;\n    height: 2rem;\n    margin-top: 1rem;\n    text-align: center;\n    line-height: 2rem;\n    background: #2ecc71;\n    font-size: 13pt;\n    color: white;\n    text-shadow: 0px 0px 2px #000;\n}\n\n.header{\n    height: 2.5rem;\n    width: 100%;\n    position: relative;\n    text-align: center;\n    overflow: hidden;\n    line-height: 2.5rem;\n    font-size: 15pt;\n    font-family: \"楷体\";\n    color: white;\n    background: #2ecc71;\n    text-shadow: 0px 0px 2px #000;\n}\n\n.back{\n    height: 1.5rem;\n    padding-top: 0.6rem;\n    padding-left: 0.6rem;\n    padding-right: 0.6rem;\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.back img{\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.updateBar{\n    width: 100%;\n    height: 25%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: rgba(0,0,0,0.5);\n    position: absolute;\n    bottom: 20px;\n    color: rgba(255,255,255,0.7);\n}\n\nselect{\n    width: 100%;\n    height: 100%;\n    border:0px solid #000 !important;\n    background: transparent !important;\n    padding: 0px !important;\n}\n\n.rgCont{\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.propContai{\n    width: 60%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-top: 0.5rem;\n    height: 3rem;\n    border-radius: 100px;\n    color: black;\n}\n\n.prop{\n    width: 50%;\n    height: 100%;\n    border-left: 1px solid #fff;\n    -webkit-box-flex:2;\n        -ms-flex:2;\n            flex:2;\n    line-height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #7f8c8d;\n    overflow: hidden;\n    border-radius: 5px;\n    color: white;\n}\n\n.prop p{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.lab{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: center;\n}\n\n.m{\n    height: 100%;\n    line-height: 3rem;\n    margin-left: 0.25rem;\n}\n\n.footer{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    padding: 0.5rem;\n    height: 3rem;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.footer button{\n    height: 1.5rem;\n    padding: 0.3rem 1rem !important;\n    font-size: 1rem !important;\n}"

/***/ }),

/***/ "./src/app/user-page/user-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c\">\n    <div class=\"header\">\n        <div (click)=\"back()\" class=\"back\">\n            <img src=\"../../../../assets/imgs/back.png\" alt=\"\">\n        </div>\n        <span>个人资料</span>\n    </div>\n    <div class=\"contai\">\n        <!-- 头像 昵称 -->\n        <div class=\"lf\">\n            <div (click)=\"updateHeadImg()\" class=\"headImgContai\">\n                <img src=\"{{headImg}}\" alt=\"\">\n                <div class=\"updateBar\">\n                    <i class=\"configure icon\"></i>点击修改\n                </div>\n            </div>\n            <div class=\"name\">\n                <span>{{username}}</span>\n            </div>\n        </div>\n        <div class=\"rg\">\n            <div class=\"rgCont\">\n                <!-- 年龄 -->\n                <div class=\"propContai\">\n                    <div class=\"lab\"> <i class=\"calendar alternate icon\"></i> 年龄:</div>\n                    <div class=\"prop\">\n                        <select #tage class=\"ui dropdown\" (change)=\"ageChange(tage.value)\">\n                            <option *ngFor=\"let v of ageArr\" [selected]=\"age==v\" [ngValue]=\"v\">{{v==-1?\"<未设定>\":v}}</option>\n                        </select>\n                    </div>\n                </div>\n                <!-- 性别下拉菜单 -->\n                <div class=\"propContai\">\n                    <div class=\"lab\"> <i class=\"venus mars icon\"></i> 性别:</div>\n                    <div class=\"prop\">\n                        <select class=\"ui dropdown\" #tsex (change)=\"sexChange(tsex.value)\">\n                            <option *ngFor=\"let v of sexArr\" [selected]=\"v.content==sex\" [ngValue]=\"v.value\">{{v.content}}</option>\n                        </select>\n                    </div>\n                </div>\n                <!-- 金币 readonly -->\n                <div class=\"propContai\">\n                    <div class=\"lab\"> <i class=\"star icon\"></i> 金币:</div>\n                    <div class=\"prop\">\n                        <p class=\"m\">{{money}}</p>\n                    </div>\n                </div>\n                <!-- 等级 -->\n                <div class=\"propContai\">\n                    <div class=\"lab\"> <i class=\"hand peace outline icon\"></i> 等级:</div>\n                    <div class=\"prop\">\n                        <p class=\"m\">{{level}}</p>\n                    </div>\n                </div>\n                <!-- 画笔集合 -->\n                <div class=\"propContai\">\n                    <div class=\"lab\"> <i class=\"trophy icon\"></i> 积分:</div>\n                    <div class=\"prop\">\n                        <p class=\"m\">{{user.point}}</p>\n                    </div>\n                </div>\n            </div>\n\n            <!-- 保存按钮 -->\n            <div class=\"footer\">\n                <button (click)=\"saveInfo()\" class=\"ui button\">保存信息</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-dialog *ngIf=\"isDialogView\" [dialogModel]=\"dialogModel\" (close)=\"close()\"></app-dialog>\n"

/***/ }),

/***/ "./src/app/user-page/user-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/_@angular_common@5.2.10@@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_stack_service__ = __webpack_require__("./src/app/services/activity-stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/_@angular_router@5.2.10@@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_config_service__ = __webpack_require__("./src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_close__ = __webpack_require__("./src/app/dialog/dialog-close.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_subscribe_collection__ = __webpack_require__("./src/app/services/subscribe-collection.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserPageComponent = /** @class */ (function (_super) {
    __extends(UserPageComponent, _super);
    function UserPageComponent(location, stack, router, user, configService, subscribeCollection) {
        var _this = _super.call(this) || this;
        _this.location = location;
        _this.stack = stack;
        _this.router = router;
        _this.user = user;
        _this.configService = configService;
        _this.subscribeCollection = subscribeCollection;
        //用户头像
        _this.headImg = "";
        //用户昵称
        _this.username = "";
        //性别
        _this.sex = "unknow";
        //年龄
        _this.age = null;
        //钱
        _this.money = 0;
        //性别下拉框内容
        _this.sexArr = [
            { content: "男", value: "boy" },
            { content: "女", value: "girl" },
            { content: "<未设定>", value: "unknow" }
        ];
        //信息快照
        _this.objSnapshot = {
            age: null,
            sex: null
        };
        //年龄下拉框
        _this.ageArr = [];
        return _this;
    }
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //url入栈
        this.stack.pushURL(this.location.path());
        //更新用户信息
        this.user.directPushListener(function () {
            _this.headImg = _this.configService.exportInterface(_this.user.headImg);
            _this.username = _this.user.user;
            _this.sex = _this.user.sex;
            _this.money = _this.user.money;
            _this.age = _this.user.age;
            _this.level = _this.user.level;
            console.log(_this.sex);
        }, true);
        //年龄下拉框初始化
        this.ageArr = this.configService.AGE_ARR;
    };
    UserPageComponent.prototype.ngAfterViewInit = function () {
        //初始化文件快照
        this.objSnapshot = {
            age: this.age,
            sex: this.sex
        };
    };
    //返回上一级
    UserPageComponent.prototype.back = function () {
        this.stack.popURL();
        this.router.navigate([this.stack.peek()]);
    };
    //更新头像
    UserPageComponent.prototype.updateHeadImg = function () {
        this.router.navigate(['/main/update-head-img']);
    };
    //保存信息
    UserPageComponent.prototype.saveInfo = function () {
        var _this = this;
        //是否修改过
        if (this.objSnapshot.age == this.age &&
            this.objSnapshot.sex == this.sex) {
            this.basicDialog("并没有修改过啊～");
            return;
        }
        //通知后端保存信息
        this.subscribeCollection.addSubscription("saveUserInfo", this.user.saveUserInfo({
            age: this.age,
            sex: this.sex
        })
            .subscribe(function (res) {
            var data = res.json();
            if (data.err)
                _this.basicDialog(data.err);
            else
                _this.basicDialog(data.successful);
            //通知更新
            _this.user.updateUserProperty(true);
        }));
    };
    //年龄改变
    UserPageComponent.prototype.ageChange = function (val) {
        this.age = val;
    };
    //性别改变
    UserPageComponent.prototype.sexChange = function (val) {
        this.sex = val;
    };
    UserPageComponent.prototype.ngOnDestroy = function () {
        //取消订阅
        this.subscribeCollection.unSubscription("saveUserInfo");
    };
    UserPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-page',
            template: __webpack_require__("./src/app/user-page/user-page.component.html"),
            styles: [__webpack_require__("./src/app/user-page/user-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__services_activity_stack_service__["a" /* ActivityStack */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_5__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_7__services_subscribe_collection__["a" /* SubscribeCollection */]])
    ], UserPageComponent);
    return UserPageComponent;
}(__WEBPACK_IMPORTED_MODULE_6__dialog_dialog_close__["a" /* DialogClose */]));



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/_@angular_core@5.2.10@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/_@angular_platform-browser-dynamic@5.2.10@@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map