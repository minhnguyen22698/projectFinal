const Emitter = require('Emitter')
cc.Class({
    extends: cc.Component,
    properties: {
        play: cc.Button,
        setting: cc.Button,
        qa: cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.play.node.on('click',this.onPlay.bind(this))
    },
    onPlay(){
        Emitter.instance.emit('changeScreen','playScreen')
    },
    start() {

    },

    // update (dt) {},
});
