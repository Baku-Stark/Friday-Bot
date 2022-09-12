module.exports = {
    name: 'skip',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `A música ${queue.current.title} foi pulada ✅` : `Algo deu errado, chefe ${inter.member}... Tentar novamente? ❌`});
    },
};