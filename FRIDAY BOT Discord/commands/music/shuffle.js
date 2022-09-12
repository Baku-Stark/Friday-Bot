module.exports = {
    name: 'shuffle',
    description: 'shuffle the track',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `Nenhuma música na fila após a atual ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        await queue.shuffle();

        return inter.reply({ content:`Fila **${queue.tracks.length}** misturada! ✅`});
    },
};