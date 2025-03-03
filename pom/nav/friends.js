module.exports = class Friends {
  constructor(client) {
    this.client = client;
    
    this.contactPermissionTitle = this.client.$$(
      `id:com.android.permissioncontroller:id/permission_message`
    );
    this.contactPermissionText = (
      `Allow TikTok to access your contacts?`
    );
    this.contactPermissionDeny = this.client.$(
      `id:com.android.permissioncontroller:id/permission_deny_button`
    );
    this.inviteFriendsTitle = this.client.$$(
      `id:com.zhiliaoapp.musically:id/fsr`
    );
    this.inviteFriendsButton = this.client.$(
      `//android.widget.Button[@text="Invite friends"]`
    );
    this.denyAllowAccessContacts = this.client.$(
      `id:com.android.permissioncontroller:id/permission_deny_button`
    );
    this.syncContactsTitle = this.client.$$(
      `id:com.zhiliaoapp.musically:id/d3q`
    );
    this.syncContactsDenyButton = this.client.$(
      `//android.widget.Button[@text="Don’t allow"]`
    );
    this.backButton = this.client.$(
      `~Back`
    );
  }
    
  async clickContactPermissionDeny() {
    if(this.contactPermissionTitle.length) {
      await this.contactPermissionDeny.click();
    }
  }

  async clickInviteFriends() {
    if(this.inviteFriendsTitle.length) {
      await this.inviteFriendsButton.click();
    }
  }

  async clickDenyAllowAccessContacts() {
    if(this.syncContactsTitle.length) {
      await this.syncContactsDenyButton.click();
    }
  }

  async clickBackButton() {
    await this.backButton.click();
  } 
};
