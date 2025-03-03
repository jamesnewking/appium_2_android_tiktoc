module.exports = class Home {
  constructor(client) {
    this.client = client;
    
    this.swipeUpForMore = this.client.$(
      `id:com.zhiliaoapp.musically:id/hyx`
    );
    
    this.bottomNavBarHome = this.client.$(
      `~Home`
    );

    this.bottomNavBarFriends = this.client.$(
      `~Friends`
    );

    this.bottomNavBarShop = this.client.$(
      `~Shop`
    );

    this.bottomNavBarCreate = this.client.$(
      `~Create`
    );

    this.bottomNavBarInbox = this.client.$(
      `~Inbox`
    );

       this.bottomNavBarProfile = this.client.$(
      `~Profile`
    ); //accessibility ID
  }

  async swipeUp() {   
    await this.swipeUpForMore.dragAndDrop({ x: 500, y: -1000 });
    // await this.client.swipe({
    //   "from.x": 500,
    //   "to.y": 1000,
    // })
  }
    
  async clickBottomNavHome() {
    await this.bottomNavBarHome.click();
  }

  async clickBottomNavFriends() {
    await this.bottomNavBarFriends.click();
  }

  async clickBottomNavShop() {
    await this.bottomNavBarShop.click();
  }

  async clickBottomNavCreate() {    
    await this.bottomNavBarCreate.click();
  }

  async clickBottomNavInbox() {   
    await this.bottomNavBarInbox.click();
  }

  async clickBottomNavProfile() {
    await this.bottomNavBarProfile.click();
  }
};
