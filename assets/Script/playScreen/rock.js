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
    init: true,
};
const colorarr = [
    { r: 225, g: 97, b: 63 },
    { r: 50, g: 255, b: 0 },
    { r: 39, g: 105, b: 231 },
    { r: 223, g: 31, b: 229 },
];
cc.Class({
    extends: cc.Component,

    properties: {
        score: {
            default: 99,
            type: Number,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.status = stt.init;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.getColor()
    },

    start() {
        cc.log(this.node.position);
        cc.log(this.score);
        // this.onFalling();
    },
    setScore(val) {
        cc.log(val + "here");
        this.score = val;
        this.node.children[0].getComponent(cc.Label).string = this.score;
    },
    getColor() {
        var rand = Math.floor(Math.random() * 4);
        this.node.color = new cc.Color(colorarr[rand])
    },
    onBounce() {
        cc.tween(this.node)
            .by(1, { position: cc.v2(0, 600) })
            .call(() => {
                this.status = true;
            })
            .start();
    },
    onCollisionEnter: function(other, self) {
        if (other.node.group == "ground") {
            this.status = false;
            this.onBounce();
        } else if ((other.node.group = "bullet")) {
            var dame = other.node.getComponent("bullet").getDame();
            this.score -= dame;
            if (this.score <= 0) {
                this.node.destroy();
            }
            this.node.children[0].getComponent(cc.Label).string = this.score;
            other.node.destroy();
        }
    },
    onFalling() {
        this.node.y -= 10;
        this.node.x -= 1;
        // cc.log("haha");
    },
    update(dt) {
        this.onFalling();
    },
});