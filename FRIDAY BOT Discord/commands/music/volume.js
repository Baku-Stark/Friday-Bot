const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'adjust',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'the amount volume',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.volume === vol) return inter.reply({ content: `O volume não será alterado (mesmo valor do atual) ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `O volume foi modificado para **${vol}**/**${maxVol}**% 🔊` : `Algo deu errado, chefe ${inter.member}... Tentar novamente? ❌`});
    },
};