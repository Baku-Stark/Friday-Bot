module.exports = {
    name: 'pause',
    description: 'pause the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: 'A música foi pausada!', ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `A música está atualmente pausada, ${inter.member}... Tentar novamente? ❌`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `A música ${queue.current.title} foi pausada ✅` : `Algo deu errado, chefe ${inter.member}... Tentar novamente? ❌` });
    },
};
