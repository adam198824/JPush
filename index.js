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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name JPush
 * @description
 */
var JPush = (function (_super) {
    __extends(JPush, _super);
    function JPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 开启 JPush SDK 提供的推送服务
     * 开发者 App 可以通过调用停止推送服务 API 来停止极光推送服务。当又需要使用极光推送服务时，则必须要调用恢复推送服务 API。
     * 本功能是一个完全本地的状态操作，也就是说：停止推送服务的状态不会保存到服务器上。
     * 如果停止推送服务后，开发者 App 被重新安装，或者被清除数据，JPush SDK 会恢复正常的默认行为（因为保存在本地的状态数据被清除掉了）。
     * 本功能其行为类似于网络中断的效果，即：推送服务停止期间推送的消息，恢复推送服务后，如果推送的消息还在保留的时长范围内，则客户端是会收到离线消息。
     * @return {Promise<any>}
     */
    JPush.prototype.init = function () {
        return;
    };
    /**
     * 停止推送服务
     * @return {Promise<any>}
     */
    JPush.prototype.stopPush = function () {
        return;
    };
    /**
     * 恢复推送服务
     * @return {Promise<any>}
     */
    JPush.prototype.resumePush = function () {
        return;
    };
    /**
     * Android 平台:
     * 用来检查 Push Service 是否已经被停止。
     * iOS 平台:
     * 平台检查推送服务是否注册。
     * @return {Promise<any>} 回调函数，用来通知 JPush 的推送服务是否开启。
     */
    JPush.prototype.isPushStopped = function () {
        return;
    };
    /**
     * 获取 RegistrationID
     * RegistrationID 定义:
     * 集成了 JPush SDK 的应用程序在第一次成功注册到 JPush 服务器时，JPush 服务器会给客户端返回一个唯一的该设备的标识 - RegistrationID。 JPush SDK 会以广播的形式发送 RegistrationID 到应用程序。应用程序可以把此 RegistrationID 保存以自己的应用服务器上，然后就可以根据 RegistrationID 来向设备推送消息或者通知。
     * @return {Promise<any>}
     */
    JPush.prototype.getRegistrationID = function () {
        return;
    };
    /**
     * 设置别名与标签
     * @param tags 标签 参数类型为数组
     * @param alias 别名 参数类型为字符串。
     * @return {Promise<any>}
     */
    JPush.prototype.setTagsWithAlias = function (tags, alias) {
        return;
    };
    /**
     * 设置标签
     * @param tags 标签 参数类型为数组
     * @return {Promise<any>}
     */
    JPush.prototype.setTags = function (tags) {
        return;
    };
    /**
     * 设置别名
     * @param alias 别名 参数类型为字符串。
     * @return {Promise<any>}
     */
    JPush.prototype.setAlias = function (alias) {
        return;
    };
    /**
    * 自定义设置
    * @return {Promise<any>}
    */
    JPush.prototype.setCustomPushNotificationBuilder = function () {
        return;
    };
    /**
     * 判断系统设置中是否允许当前应用推送
     * @return {Promise<any>}
     */
    JPush.prototype.getUserNotificationSettings = function () {
        return;
    };
    // /**
    //  * 获取点击通知内容
    //  * https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/Common_detail_api.md#event---jpushopennotification
    //  * @return {Promise<any>} 
    //  */
    // @Cordova()
    // openNotice(): Promise<any> {
    //   return new Promise((resolve) => {
    //     document.addEventListener('jpush.openNotification', (event) => { resolve(event); }, false);
    //   });
    // }
    // /**
    //  * 获取通知内容
    //  * https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/Common_detail_api.md#event---jpushreceivenotification
    //  * @return {Promise<any>} 
    //  */
    // @Cordova()
    // receiveNotification(): Promise<any> {
    //   return new Promise((resolve) => {
    //     document.addEventListener('jpush.receiveNotification', (event) => { resolve(event); }, false);
    //   });
    // };
    /**
     * 获取自定义消息推送内容
     * https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/Common_detail_api.md#event---jpushreceivemessage
     * @return {Promise<any>}
     */
    JPush.prototype.receiveMessage = function () {
        return new Promise(function (resolve) {
            document.addEventListener('jpush.receiveMessage', function (event) { resolve(event); }, false);
        });
    };
    ;
    /**
    * 调试模式
    * @param mode 是否启用
    */
    JPush.prototype.setDebugMode = function (mode) { };
    /**
     * 设置badge
     * @param value 数量
     * @return {Promise<any>}
     */
    JPush.prototype.setBadge = function (value) {
        return;
    };
    /**
     * 重置badge
     * @return {Promise<any>}
     */
    JPush.prototype.reSetBadge = function () {
        return;
    };
    /**
     * 本接口直接改变应用本地的角标值，设置 iOS 的角标，当设置 value ＝ 0 时为清除角标
     * @param value 数量
     * @return {Promise<any>}
     */
    JPush.prototype.setApplicationIconBadgeNumber = function (value) {
        return;
    };
    return JPush;
}(IonicNativePlugin));
JPush.decorators = [
    { type: Injectable },
];
/** @nocollapse */
JPush.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPush.prototype, "init", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPush.prototype, "stopPush", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPush.prototype, "resumePush", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPush.prototype, "isPushStopped", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPush.prototype, "getRegistrationID", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], JPush.prototype, "setTagsWithAlias", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], JPush.prototype, "setTags", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JPush.prototype, "setAlias", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPush.prototype, "setCustomPushNotificationBuilder", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPush.prototype, "getUserNotificationSettings", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPush.prototype, "receiveMessage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], JPush.prototype, "setDebugMode", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JPush.prototype, "setBadge", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPush.prototype, "reSetBadge", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JPush.prototype, "setApplicationIconBadgeNumber", null);
JPush = __decorate([
    Plugin({
        pluginName: 'JPush',
        plugin: 'jpush-phonegap-plugin',
        pluginRef: 'plugins.jPushPlugin',
        repo: 'https://github.com/jpush/jpush-phonegap-plugin',
        platforms: ['Android', 'iOS'],
    })
], JPush);
export { JPush };
//# sourceMappingURL=index.js.map