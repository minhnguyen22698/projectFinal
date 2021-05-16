const Emitter = require('Emitter')
cc.Class({
    extends: cc.Component,
    properties: {
        play: cc.Button,
        setting: cc.Button,
        leaderBoard: cc.Button,
        settingPopup: {
            default: null,
            type: cc.Node,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.settingPopup.active = false
        this.setting.node.on('click', this.showSetting.bind(this))
        this.play.node.on('click', this.onPlay.bind(this))
        this.leaderBoard.node.on('click', this.showLeaderBoard.bind(this))
    },

    start() {

    },
    onPlay() {
        Emitter.instance.emit('changeScreen', 'playScreen', true);
    },
    showSetting() {
        this.settingPopup.active = true;
    },
    showLeaderBoard() {
        Emitter.instance.emit('changeScreen', 'leaderBoardScreen');
    }

    // update (dt) {},
});