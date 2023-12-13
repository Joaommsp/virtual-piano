const pianoKeys = document.querySelectorAll(".pianoKeys .key") 
const volumeSlider = document.querySelector(".volumeSlider input")
const keysCheck = document.querySelector(".keysCheck input")

let audio = new Audio()
let mapedKey = []

const playTune = (key) => {
  audio.src =`src/tunes/${key}.wav`
  audio.play()

  console.log(mapedKey)

  const clickedKey = document.querySelector(`[data-key="${key}"]`)
  clickedKey.classList.add("active")
  setTimeout(() => {
    clickedKey.classList.remove("active")
  }, 150)
}
 
pianoKeys.forEach((key) => {
  console.log(key.dataset.key)
  key.addEventListener("click", () => playTune(key.dataset.key))
  mapedKey.push(key.dataset.key)
})

document.addEventListener("keydown", (e) => {
  if(mapedKey.includes(e.key)) {
    playTune(e.key)
  }
})

const handleVolume = (e) => {
  audio.volume = e.target.value
}

const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume)

keysCheck.addEventListener("click", showHideKeys)