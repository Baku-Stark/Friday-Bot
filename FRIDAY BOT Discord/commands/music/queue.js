const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'queue',
    description: 'Get the songs in the queue',
    voiceChannel: true,

    execute({ client, inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return  inter.reply({ content: `Não existe música futura. Erro no comando, chefe ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        const methods = ['', '🔁', '🔂'];

        const songs = queue.tracks.length;

        const nextSongs = songs > 5 ? `e **${songs - 5}** outras música(s)...` : `Na playlist **${songs}**...`;

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Solicitado por: ${track.requestedBy.username})`)

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setThumbnail(inter.guild.iconURL({ size: 2048, dynamic: true }))
        .setAuthor({name: `Fila do servidor - ${inter.guild.name} ${methods[queue.repeatMode]}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setDescription(`Atualmente ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`)
        .setTimestamp()
        .setFooter({ text: 'Não tenha vergonha do seu gosto musical. Apenas de ouvir Poesia Acústica.', iconURL: inter.member.avatarURL({ dynamic: true })})

        inter.reply({ embeds: [embed] });
    },
};