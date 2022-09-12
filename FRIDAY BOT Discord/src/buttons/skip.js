module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando no momento... Tentar novamente? ❌`, ephemeral: true });
    
    const success = queue.skip();

    return inter.reply({ content: success ? `Música atual ${queue.current.title} pulada ✅` : `Algo deu errado ${inter.member}... Tentar novamente? ❌`, ephemeral: true});
}