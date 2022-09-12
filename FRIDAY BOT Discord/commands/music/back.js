module.exports = {
    name: 'back',
    description: "Go back the song before",
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        if (!queue.previousTracks[1]) return inter.reply({ content: `Não há música antes da atual ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        await queue.back();

        inter.reply({ content:`Tocando música **anterior** ✅`});
    },
};