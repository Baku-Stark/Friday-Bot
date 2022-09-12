module.exports = {
    name: 'clear',
    description: 'clear all the music in the queue',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `No music in the queue after the current one ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        await queue.clear();

        inter.reply(`A fila foi excluída, chefe 🗑️`);
    },
};