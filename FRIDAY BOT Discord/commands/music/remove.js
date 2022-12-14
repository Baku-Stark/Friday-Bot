const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'remove',
    description: "remove a song from the queue",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the name/url of the track you want to remove',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'the place in the queue the song is in',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const number =  inter.options.getNumber('number')
        const track = inter.options.getString('song');

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });
        if (!track && !number) inter.reply({ content: `Você precisa usar uma das opções para remover uma música ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        if (track) {

        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.remove(song)
                return inter.reply({ content: `${track} removido da fila ✅` });
            }

        }

        return inter.reply({ content: `Não consegui encontrar "${track} ${inter.member}" Tentar novamente com outra música? ❌`, ephemeral: true });    
        }

        if (number) {

            const index = number - 1
            const trackname = queue.tracks[index].title

            if (!trackname) return inter.reply({ content: `Esta faixa de música parece não existir ${inter.member}...  Tentar novamente?❌`, ephemeral: true });   

            queue.remove(index);
            
            return inter.reply({ content: `${trackname} foi removido da fila ✅` });
        }


         
    }
}