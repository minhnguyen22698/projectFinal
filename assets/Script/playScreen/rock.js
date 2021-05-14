// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const stt = {
    init: true
}
cc.Class({
    extends: cc.Component,

    properties: {
        score: 99
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.onFalling()
        this.status = stt.init
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    },

    start() {

    },
    onBounce() {
        cc.tween(this.node)
            .by(1, { position: cc.v2(0, 600) }).
            call(() => {
                cc.log('bay len lai')
                this.status = true
                this.onFalling()
            })
            .start()
    },
    onCollisionEnter: function (other, self) {

        if (other.node.group == 'ground') {
            this.status = false
            this.onBounce()
        } else
            if (other.node.group = 'bullet') {
                var dame = other.node.getComponent('bullet').getDame()
                this.node.children[0].getComponent(cc.Label).string -= dame
                other.node.destroy();
            }
    },
    onFalling() {
        // this.node.y -= 10
        // this.node.x -= 1
        cc.log('haha')
        var action = cc.bezierBy(5, cc.v2(0, -1280))
        this.node.runAction(action)
    },
    update(dt) {
        // if (this.status) {
        //     this.onFalling()
        // }
        if (this.score == 0) {
            this.node.destroy()
        }
    },
});
