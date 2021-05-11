// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const Emitter = require('Emitter')
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Emitter.instance.registerEvent('moveLeft', this.onMoveLeft.bind(this))
        Emitter.instance.registerEvent('moveRight', this.onMoveRight.bind(this))
    },
    onMoveLeft() {
        var action=cc.moveBy(0.5,50,0)
        this.node.runAction(action)
    },
    onMoveRight() {
        var action=cc.moveBy(0.5,-50,0)
        this.node.runAction(action)
    },
    start() {

    },

    // update (dt) {},
});
