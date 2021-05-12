const Emitter = require("Emitter");
cc.Class({
  extends: cc.Component,

  properties: {
    mainScreen: cc.Node,
    playScreen: cc.Node,
  },

  // use this for initialization
  onLoad: function () {
    Emitter.instance = new Emitter();
    //   Emitter.instance.registerEvent('changeScreen', this.changeRoute.bind(this))
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onKeyDown(evt) {
    switch (evt.keyCode) {
      case cc.macro.KEY.a: {
        Emitter.instance.emit("onMoveLeft",evt.keyCode);
        break;
      }
      case cc.macro.KEY.d: {
        Emitter.instance.emit("onMoveRight",evt.keyCode);
        break;
      }
    }
  },
  onKeyUp() {
      Emitter.instance.emit('stopMove')
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
