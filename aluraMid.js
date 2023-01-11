const teclasTeclado = [...document.getElementsByTagName("button")]
const audio = document.getElementsByTagName("audio")

teclasTeclado.forEach(teclasTeclado => {
    const tecla = teclasTeclado.outerText.toLowerCase()
    const idAudio = `som_tecla_${tecla}`

    teclasTeclado.addEventListener("click", () => {
        const audioTecla = document.getElementById(idAudio)
        audioTecla.play()
    })
})
