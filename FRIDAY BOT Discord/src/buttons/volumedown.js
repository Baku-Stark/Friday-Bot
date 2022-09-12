const maxVol = client.config.opt.maxVol;

module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando no momento... Tentar novamente? ❌`, ephemeral: true });

        const vol = Math.floor(queue.volume - 5)

        if (vol < 0 ) return inter.reply({ content: `Eu não posso abaixar mais o volume ${inter.member}... Tentar novamente? ❌`, ephemeral: true })
        
        if (queue.volume === vol) return inter.reply({ content: `O volume não será alterado porque esse é o valor atual ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `O volume foi alterado para **${vol}**/**${maxVol}**% 🔊` : `Algo deu errado ${inter.member}... Tentar novamente? ❌`, ephemeral: true});
}