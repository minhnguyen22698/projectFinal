// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const Emitter = require("Emitter");
cc.Class({
  extends: cc.Component,

  properties: {
    accLeft: false,
    speed: 0,
    accRight: false,
    accel: 0,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    Emitter.instance.registerEvent("onMoveLeft", this.onMoveLeft.bind(this));
    Emitter.instance.registerEvent("onMoveRight", this.onMoveRight.bind(this));
    Emitter.instance.registerEvent("stopMove", this.onStop.bind(this));
  },
  onMoveLeft(keycode) {
    cc.log("Move left " + keycode);
    var moveLeft = cc.moveBy(0.5, -50, 0);
    this.node.runAction(moveLeft);
  },
  onMoveRight(keycode) {
    cc.log("Move rigth " + keycode);
    var moveLeft = cc.moveBy(0.5,50, 0);
    this.node.runAction(moveLeft);
  },
  onStop() {
    this.node.stopAllActions();
  },
  start() {},

  update(dt) {
    // if (this.accLeft) {
    //     this.xSpeed -= this.accel * dt;
    // } else if (this.accRight) {
    //     this.xSpeed += this.accel * dt;
    // }
    // if ( Math.abs(this.xSpeed) > this.maxMoveSpeed ) {
    //     this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    // }
    // this.node.x += this.xSpeed * dt;
  },
});
