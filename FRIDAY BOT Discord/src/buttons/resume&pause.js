module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando no momento... Tentar novamente? ❌`, ephemeral: true });

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    

    return inter.reply({ content: `${success ? `Música atual ${queue.current.title} pausada ✅` : `Música atual ${queue.current.title} resumed ✅`}`, ephemeral: true});
}