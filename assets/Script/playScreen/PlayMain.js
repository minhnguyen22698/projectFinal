// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        tank: cc.Node,
        bullet: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.Scheduler(() => {
            this.shoot();
        }, 5);
    },
    shoot() {
        cc.log(this.tank.position);
        let shoot = cc.instantiate(this.bullet);
        shoot.setPosition(0, -500);
        this.node.addChild(shoot);
        cc.tween(shoot)
            .to(3, { y: 0 })
            .call(() => {
                shoot.destroy();
            })
            .start();
    },

    start() {},

    update(dt) {},
});