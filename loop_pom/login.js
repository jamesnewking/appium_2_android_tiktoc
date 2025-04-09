module.exports = class Login {
  constructor(client) {
    this.client = client;

    this.guestModeButton = this.client.$(
      `id:com.renewage.loop:id/btnGuestMode`
    );
  
  }

  async clickGuestMode() {
    await this.guestModeButton.waitUntil(
      async () => {
        return await this.guestModeButton.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected guestModeButton to be displayed after 10s`,
      }
    )
    await this.guestModeButton.click();
  }

};
