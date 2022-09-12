const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'filter',
    description: 'add a filter to your track',
    voiceChannel: true,
    options: [
        {
            name: 'filter',
            description: 'filter you want to add',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [...Object.keys(require("discord-player").AudioFilters.filters).map(m => Object({ name: m, value: m })).splice(0, 25)],
        }
    ],


    async execute({ inter, client }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        const actualFilter = queue.getFiltersEnabled()[0];

        const infilter = inter.options.getString('filter');


        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === infilter.toLowerCase());

        if (!filter) return inter.reply({ content: `Este tipo de filtração não exite ${inter.member}... Tentar novamente? ❌\n${actualFilter ? `Filter currently active ${actualFilter}.\n` : ''} Lista de filtrações ${filters.map(x => `**${x}**`).join(', ')}.`, ephemeral: true });

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        inter.reply({ content: `Filtração ${filter} está **${queue.getFiltersEnabled().includes(filter) ? 'enabled' : 'disabled'}** ✅\n*Lembre-se que, quanto mais longa for a música, mais tempo levará.*` });
    },
};