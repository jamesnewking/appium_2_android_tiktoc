module.exports = class Home {
  constructor(client) {
    this.client = client;
    
    this.permissionLocationAllowWhileUsingAppButton = this.client.$(
      `id:com.android.permissioncontroller:id/permission_allow_foreground_only_button`
    );

    this.permissionNotificationAllowButton = this.client.$(
      `id:com.android.permissioncontroller:id/permission_allow_button`
    );

    this.scanSkipButton = this.client.$(
      `id:com.renewage.loop:id/tvSkip`
    );

    this.navDrawerButton = this.client.$(
      `~Open navigation drawer`
    );

    this.navDrawerSignInButton = this.client.$(
      `id:com.renewage.loop:id/ibSignIn`
    );

    this.navBackButton = this.client.$(
      `~Navigate up`
    );

    this.mapFilterButton = this.client.$(
      `id:com.renewage.loop:id/ivFilter`
    );

    this.mapBottomSearchBar = this.client.$(
      `id:com.renewage.loop:id/tvSearch`
    );

    this.searchManyResults = this.client.$$( 
      `//androidx.recyclerview.widget.RecyclerView[@resource-id="com.renewage.loop:id/recyclerview"]/android.widget.RelativeLayout`
    );
    this.searchManyResultsLOC =  
      `//androidx.recyclerview.widget.RecyclerView[@resource-id="com.renewage.loop:id/recyclerview"]/android.widget.RelativeLayout`;
    //`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.renewage.loop:id/recyclerview"]/android.widget.RelativeLayout[1]`

    // this.bottomNavBarProfile = this.client.$(
    //   `~Profile`
    // ); //accessibility ID
  }

  async clickPermissionLocationAllowWhileUsingAppButton() {
    await this.permissionLocationAllowWhileUsingAppButton.waitUntil(
      async () => {
        return await this.permissionLocationAllowWhileUsingAppButton.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected permissionLocationAllowWhileUsingAppButton to be displayed after 10s`,
      }
    )
    await this.permissionLocationAllowWhileUsingAppButton.click();
  }

  async clickPermissionNotificationAllowButton() {
    await this.permissionNotificationAllowButton.waitUntil(
      async () => {
        return await this.permissionNotificationAllowButton.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected permissionNotificationAllowButton to be displayed after 10s`,
      }
    )
    await this.permissionNotificationAllowButton.click();
  }

  async clickScanSkipButton() {
    await this.scanSkipButton.waitUntil(
      async () => {
        return await this.scanSkipButton.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected scanSkipButton to be displayed after 10s`,
      }
    )
    await this.scanSkipButton.click();
  }

  async clickNavDrawerButton() {
    await this.navDrawerButton.waitUntil(
      async () => {
        return await this.navDrawerButton.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected navDrawerButton to be displayed after 10s`,
      }
    )
    await this.navDrawerButton.click();
  }

  async clickNavDrawerSignInButton() {
    await this.navDrawerSignInButton.waitUntil(
      async () => {
        return await this.navDrawerSignInButton.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected navDrawerSignInButton to be displayed after 10s`,
      }
    )
    await this.navDrawerSignInButton.click();
  }

  async clickNavBackButton() {
    await this.navBackButton.waitUntil(
      async () => {
        return await this.navBackButton.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected navBackButton to be displayed after 10s`,
      }
    )
    await this.navBackButton.click();
  }

  async clickMapFilterButton() {
    await this.mapFilterButton.waitUntil(
      async () => {
        return await this.mapFilterButton.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected mapFilterButton to be displayed after 10s`,
      }
    )
    await this.mapFilterButton.click();
  }
  
  async clickMapBottomSearchBar() {
    await this.mapBottomSearchBar.waitUntil(
      async () => {
        return await this.mapBottomSearchBar.isDisplayed()
      },
      {
        timeout: 10000,
        timeoutMsg: `expected mapBottomSearchBar to be displayed after 10s`,
      }
    )
    await this.mapBottomSearchBar.click();
  }

  async getNumberOfSearchResults() {
    await this.client.pause(10000);
    this.searchManyResults = await this.client.$$(this.searchManyResultsLOC);
    return await this.searchManyResults.length;
  }
};
