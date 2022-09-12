module.exports = {
    app: {
        token: 'MTAxNzg3NTQ0NDgzNTU0OTIzNA.GMLYcl.x148TLpvTnvTVpgOZ2dOa7SWypPYtYQw_1GckQ',
        playing: 'Esperando por um comando...',
        global: true,
        guild: 'XXX'
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
