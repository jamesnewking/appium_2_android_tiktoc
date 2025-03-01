module.exports = class Login {
  constructor(client) {
    this.client = client;

    this.googleSignBackInTitle = this.client.$(
      `id:com.google.android.gms:id/title`
    );

    this.googleSignBackInContinueAsUser = this.client.$(
      `id:com.google.android.gms:id/continue_button`
    );

    this.permissionsSendNotificationsTitle = this.client.$(
      `id:com.android.permissioncontroller:id/permission_message`);
    this.permissionsAllowNotifications = this.client.$(
      `id:com.android.permissioncontroller:id/permission_allow_button`
    );

    this.chooseInterestsTitle = this.client.$(
      `id:com.zhiliaoapp.musically:id/ghx`
    );
    this.chooseInterestsSkip = this.client.$(
      `id:com.zhiliaoapp.musically:id/bo2`
    );

    this.SwipeUpTitle = this.client.$(
      `id:com.zhiliaoapp.musically:id/title`
    );
    this.startWatchingButton = this.client.$(
      `id:com.zhiliaoapp.musically:id/pjy`
    );
  
  }

  async clickGoogleSignBackInContinueAsUser() {
    await this.googleSignBackInTitle.waitUntil(
      async () => {
        return await this.googleSignBackInTitle.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected googleSignBackInTitle to be displayed after 10s`,
      }
    )
    await this.googleSignBackInContinueAsUser.click();
  }

  async clickPermissionsAllowNotifications() {
    await this.permissionsSendNotificationsTitle.waitUntil(
      async () => {
        return await this.permissionsSendNotificationsTitle.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected googleSignBackInTitle to be displayed after 10s`,
      }
    )
    await this.permissionsAllowNotifications.click();
  }

  async clickChooseInterestsSkip() {
    await this.chooseInterestsTitle.waitUntil(
      async () => {
        return await this.chooseInterestsTitle.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected googleSignBackInTitle to be displayed after 10s`,
      }
    )
    await this.chooseInterestsSkip.click();
  }

  async clickStartWatchingButton() {
    await this.SwipeUpTitle.waitUntil(
      async () => {
        return await this.SwipeUpTitle.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected googleSignBackInTitle to be displayed after 10s`,
      }
    )
    await this.startWatchingButton.click();
  }    

};
