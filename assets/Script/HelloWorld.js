const Emitter = require('Emitter')
cc.Class({
    extends: cc.Component,

    properties: {
        mainScreen: cc.Node,
        playScreen: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        Emitter.instance = new Emitter()
     //   Emitter.instance.registerEvent('changeScreen', this.changeRoute.bind(this))
        cc.SystemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.moveLeft.bind(this))
       cc.SystemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.moveRight.bind(this))
    },
    moveLeft(){
        cc.log('moveLeft')
       // Emitter.instance.emit('moveLeft')
    },
    moveRight(){
        cc.log('moveRight')
       // Emitter.instance.emit('moveRight')
    },
    changeRoute(arg) {
        cc.log(this.screen)
        switch (arg) {
            case 'mainScreen': {
                this.mainScreen.active = true;
                this.playScreen.active = false;
            }
            case 'playScreen': {
                this.mainScreen.active = false;
                this.playScreen.active = true
            }
        }
    },
    // called every frame
    update: function (dt) {
    },
});
