module.exports = {
    app: {
        token: '---',
        playing: 'Esperando por um comando...',
        global: true,
        guild: '---'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: ['play', 'pause']
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
