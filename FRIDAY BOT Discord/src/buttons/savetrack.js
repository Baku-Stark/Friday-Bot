const { EmbedBuilder } = require('discord.js')

module.exports = async ({ inter, queue }) => {
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando no momento... Tentar novamente? ❌`, ephemeral: true });

    inter.member.send({
        embeds: [
            new EmbedBuilder()
                .setColor('Red')
                .setTitle(`:arrow_forward: ${queue.current.title}`)
                .setURL(queue.current.url)
                .addFields(
                    { name: ':hourglass: Duração:', value: `\`${queue.current.duration}\``, inline: true },
                    { name: 'Música por:', value: `\`${queue.current.author}\``, inline: true },
                    { name: 'Visualização :eyes:', value: `\`${Number(queue.current.views).toLocaleString()}\``, inline: true },
                    { name: 'URL:', value: `\`${queue.current.url}\`` }
                )
                .setThumbnail(queue.current.thumbnail)
                .setFooter({ text: `from the server ${inter.member.guild.name}`, iconURL: inter.member.guild.iconURL({ dynamic: false }) })
        ]
    }).then(() => {
        return inter.reply({ content: `Enviei o título da música por mensagem privada ✅`, ephemeral: true });
    }).catch(error => {
        return inter.reply({ content: `Não foi possível enviar uma mensagem privada... Tentar novamente? ❌`, ephemeral: true });
    });


}
