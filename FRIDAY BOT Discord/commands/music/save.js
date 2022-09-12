const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'save',
    description: 'save the current track!',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        inter.member.send({
            embeds: [
                new EmbedBuilder()
                    .setColor('Red')
                    .setTitle(`:arrow_forward: ${queue.current.title}`)
                    .setURL(queue.current.url)
                    .addFields(
                        { name: ':hourglass: Duration:', value: `\`${queue.current.duration}\``, inline: true },
                        { name: 'Song by:', value: `\`${queue.current.author}\``, inline: true },
                        { name: 'Views :eyes:', value: `\`${Number(queue.current.views).toLocaleString()}\``, inline: true },
                        { name: 'URL:', value: `\`${queue.current.url}\`` }
                    )
                    .setThumbnail(queue.current.thumbnail)
                    .setFooter({text:`Server: ${inter.member.guild.name}`, iconURL: inter.member.guild.iconURL({ dynamic: false })})
            ]
        }).then(() => {
            return inter.reply({ content: `Enviei o título da música por mensagem privada. ✅`, ephemeral: true });
        }).catch(error => {
            return inter.reply({ content: `Não foi possível enviar-lhe uma mensagem privada (o lerdo desabilitou convite para conversas no privado)... Tentar novamente? ❌`, ephemeral: true });
        });
    },
};