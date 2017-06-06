import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name JPush
 * @description 
 */
@Plugin({
  pluginName: 'JPush',
  plugin: 'jpush-phonegap-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'plugins.jPushPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/jpush/jpush-phonegap-plugin', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class JPush extends IonicNativePlugin {

  /**
   * 开启 JPush SDK 提供的推送服务
   * 开发者 App 可以通过调用停止推送服务 API 来停止极光推送服务。当又需要使用极光推送服务时，则必须要调用恢复推送服务 API。
   * 本功能是一个完全本地的状态操作，也就是说：停止推送服务的状态不会保存到服务器上。
   * 如果停止推送服务后，开发者 App 被重新安装，或者被清除数据，JPush SDK 会恢复正常的默认行为（因为保存在本地的状态数据被清除掉了）。
   * 本功能其行为类似于网络中断的效果，即：推送服务停止期间推送的消息，恢复推送服务后，如果推送的消息还在保留的时长范围内，则客户端是会收到离线消息。
   * @return {Promise<any>} 
   */
  @Cordova()
  init(): Promise<any> {
    return;
  }
  /**
   * 停止推送服务
   * @return {Promise<any>} 
   */
  @Cordova()
  stopPush(): Promise<any> {
    return;
  }
  /**
   * 恢复推送服务
   * @return {Promise<any>} 
   */
  @Cordova()
  resumePush(): Promise<any> {
    return;
  }
  /**
   * Android 平台:
   * 用来检查 Push Service 是否已经被停止。
   * iOS 平台:
   * 平台检查推送服务是否注册。
   * @return {Promise<any>} 回调函数，用来通知 JPush 的推送服务是否开启。
   */
  @Cordova()
  isPushStopped(): Promise<any> {
    return;
  }
  /**
   * 获取 RegistrationID
   * RegistrationID 定义:
   * 集成了 JPush SDK 的应用程序在第一次成功注册到 JPush 服务器时，JPush 服务器会给客户端返回一个唯一的该设备的标识 - RegistrationID。 JPush SDK 会以广播的形式发送 RegistrationID 到应用程序。应用程序可以把此 RegistrationID 保存以自己的应用服务器上，然后就可以根据 RegistrationID 来向设备推送消息或者通知。
   * @return {Promise<any>} 
   */
  @Cordova()
  getRegistrationID(): Promise<any> {
    return;
  }
  /**
   * 设置别名与标签
   * @param tags 标签 参数类型为数组
   * @param alias 别名 参数类型为字符串。
   * @return {Promise<any>} 
   */
  @Cordova()
  setTagsWithAlias(tags: any[], alias: string): Promise<any> {
    return;
  }
  /**
   * 设置标签
   * @param tags 标签 参数类型为数组
   * @return {Promise<any>} 
   */
  @Cordova()
  setTags(tags: any[], ): Promise<any> {
    return;
  }
  /**
   * 设置别名
   * @param alias 别名 参数类型为字符串。
   * @return {Promise<any>} 
   */
  @Cordova()
  setAlias(alias: string): Promise<any> {
    return;
  }

  /**
  * 自定义设置
  * @return {Promise<any>} 
  */
  @Cordova({
    platforms: ['Android']
  })
  setCustomPushNotificationBuilder(): Promise<any> {
    return;
  }
  /**
   * 判断系统设置中是否允许当前应用推送
   * @return {Promise<any>} 
   */
  @Cordova()
  getUserNotificationSettings(): Promise<any> {
    return;
  }
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
  @Cordova()
  receiveMessage(): Promise<any> {
    return new Promise((resolve) => {
      document.addEventListener('jpush.receiveMessage', (event) => { resolve(event); }, false);
    });
  };
  /**
  * 调试模式
  * @param mode 是否启用 
  */
  @Cordova()
  setDebugMode(mode: boolean) { }
  /**
   * 设置badge
   * @param value 数量
   * @return {Promise<any>} 
   */
  @Cordova({
    platforms: ['iOS']
  })
  setBadge(value: number): Promise<any> {
    return;
  }
  /**
   * 重置badge
   * @return {Promise<any>} 
   */
  @Cordova({
    platforms: ['iOS']
  })
  reSetBadge(): Promise<any> {
    return;
  }
  /**
   * 本接口直接改变应用本地的角标值，设置 iOS 的角标，当设置 value ＝ 0 时为清除角标
   * @param value 数量
   * @return {Promise<any>} 
   */
  @Cordova({
    platforms: ['iOS']
  })
  setApplicationIconBadgeNumber(value: number): Promise<any> {
    return;
  }

}
