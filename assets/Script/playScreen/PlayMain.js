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
        shootSpeed: 1,
        rock: cc.Prefab,
        _xSpeed: 0,
        _timer: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // this.shoot();
    },
    start() {
        this.dropTheRock()
    },

    dropTheRock() {

    },
    shoot() {
        let shoot = cc.instantiate(this.bullet);
        shoot.setPosition(this.tank.x, this.tank.y + 100);
        this.node.addChild(shoot);
        cc.tween(shoot)
            .to(1, { y: 640 })
            .call(() => {
                shoot.destroy();
            })
            .start();
    },

    update(dt) {
        this._xSpeed += dt
        this._timer += dt
        if (this._xSpeed >= this.shootSpeed / 3) {
            this.shoot()
            this._xSpeed = 0
        }
        // if (this._timer > 1) {
        //     var rocks = cc.instantiate(this.rock)
        //     rocks.getComponent('rock').setScore(20)
        //     cc.log(rocks)
        //     this.node.addChild(rocks)
        //     this._timer = 0
        // }
    },
});