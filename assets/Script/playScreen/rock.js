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
            type: cc.Integer,
            serializable: false,
        },
        dir: {
            default: 1,
            type: cc.Integer,
            serializable: false,
            notify: function () {
               this.getRand()
            },
        },
        maxScale: {
            default: 0.4
        }
    },
    getRand(){
        this.rand = Math.floor(Math.random() * 100)
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.getRand()
        this.status = stt.init;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.getColor()
    },

    start() {
        this.onFalling();
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
        var x = this.node.x;
        var y = this.node.y;
        cc.log(this.rand)
        if (Math.abs(this.node.x)>= cc.winSize.width / 2) {
            cc.log(this.dir)
            this.dir =this.dir*(-1)
        }

        var bezier = [cc.v2(0, 0), cc.v2(this.dir * this.rand, 300), cc.v2(this.dir * 200, 600)]
        var bezierBy = cc.bezierBy(2, bezier)
        var seq = cc.sequence(bezierBy, cc.callFunc(() => {
            this.status = true
            this.onFalling()
        }))
        this.node.runAction(seq)
    },
    onCollisionEnter: function (other, self) {
        if (other.node.group == "ground") {
            this.status = false;
            this.node.stopAllActions()
            this.onBounce();
        } else if ((other.node.group = "bullet")) {
            var dame = other.node.getComponent("bullet").getDame();

            if (this.maxScale >= dame / this.score) {
                this.node.scale -= dame / (this.score * 10)
            }
            this.score -= dame;
            if (this.score <= 0) {
                this.node.destroy();
            }
            this.node.children[0].getComponent(cc.Label).string = this.score;
            other.node.destroy();
        }
    },
    onFalling() {
        var bezier = [cc.v2(0, 0), cc.v2(this.dir* this.rand, -600), cc.v2(this.dir * this.rand, -1000)]
        var bezierBy = cc.bezierBy(3, bezier)
        this.node.runAction(bezierBy)
    },
    update(dt) { 
     
    },
});