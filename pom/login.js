module.exports = class Login {
  constructor(client) {
    this.client = client;
    this.googleSignBackInContinueAsUser = this.client.$(
      `id:com.google.android.gms:id/continue_button`
    );
    this.permissionsAllowNotifications = this.client.$(
      `id:com.android.permissioncontroller:id/permission_allow_button`
    );
    this.chooseInterestsSkip = this.client.$(
      `id:com.zhiliaoapp.musically:id/bo2`
    );
    this.startWatchingButton = this.client.$(
      `id:com.zhiliaoapp.musically:id/pjy`
    );
    this.swipeUpForMore = this.client.$(
      `id:com.zhiliaoapp.musically:id/hyx`
    );
  
  }

  async clickGoogleSignBackInContinueAsUser() {
    await this.googleSignBackInContinueAsUser.click();
  }

  async clickPermissionsAllowNotifications() {
    await this.permissionsAllowNotifications.click();
  }

  async clickChooseInterestsSkip() {
    await this.chooseInterestsSkip.click();
  }

  async clickStartWatchingButton() {
    await this.startWatchingButton.click();
  }

  async swipeUp() {   
    await this.swipeUpForMore.dragAndDrop({ x: 500, y: -5000 });
    // await this.client.swipe({
    //   "from.x": 500,
    //   "to.y": 1000,
    // })
  }
    

};
