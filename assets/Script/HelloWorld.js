const Emitter = require("Emitter");
cc.Class({
  extends: cc.Component,

  properties: {
    mainScreen: cc.Node,
    playScreen: cc.Node,
    _LastScene:''
  },

  // use this for initialization
  onLoad: function () {
    Emitter.instance = new Emitter();
    //   Emitter.instance.registerEvent('changeScreen', this.changeRoute.bind(this))
    // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onKeyDown(evt) {
    Emitter.instance.emit("onMove",evt.keyCode);
  },
  onKeyUp(evt) {
      Emitter.instance.emit('stopMove',evt.keyCode)
  },
  changeRoute(arg) {
    cc.log(this.screen);
    switch (arg) {
      case "mainScreen": {
        this.mainScreen.active = true;
        this.playScreen.active = false;
      }
      case "playScreen": {
        this.mainScreen.active = false;
        this.playScreen.active = true;
      }
    }
  },
  update: function (dt) {},
});
