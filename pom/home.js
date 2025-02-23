module.exports = class Home {
  constructor(client) {
    this.client = client;
    
    this.swipeUpForMore = this.client.$(
      `id:com.zhiliaoapp.musically:id/hyx`
    );
  
  }

  async swipeUp() {   
    await this.swipeUpForMore.dragAndDrop({ x: 500, y: -1000 });
    // await this.client.swipe({
    //   "from.x": 500,
    //   "to.y": 1000,
    // })
  }
    

};
