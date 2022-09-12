module.exports = {
    name: 'resume',
    description: 'play the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música está tocando no momento ${inter.member}... Tentar novamente? ❌`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: 'A música está tocando!', ephemeral: true})

        if(!queue.connection.paused) return inter.reply({content: `A música já está em execução, ${inter.member}... Tentar novamente? ❌`, ephemeral: true})

        const success = queue.setPaused(false);
        
        return inter.reply({ content:success ? `A música atual ${queue.current.title} já está em execução ✅` : `Algo deu errado ${inter.member}... Tentar novamente? ❌`});
    },
};
