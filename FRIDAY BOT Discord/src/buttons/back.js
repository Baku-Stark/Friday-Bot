module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música está tocando no momento... Tentar novamente? ❌`, ephemeral: true });

    if (!queue.previousTracks[1]) return inter.reply({ content: `Não há música antes ${inter.member}... Tentar novamente? ❌`, ephemeral: true });

    await queue.back();

    inter.reply({ content:`Tocando música **anterior**  ✅`, ephemeral: true});
}
