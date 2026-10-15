console.log("Let's Write JavaScript")

const BASE = "http://127.0.0.1:3000/Projects/02-spotify-clone/songs/"
let currentAudio = new Audio()
function parseSong(fileName) {
    const clean = fileName.replace(/\.mp3$/i, "")
    const i = clean.indexOf("-")
    if (i === -1) return { title: clean.trim(), artist: "Unknown Artist" }
    return {
        title: clean.slice(0, i).trim(),
        artist: clean.slice(i + 1).trim()
    }
}
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00"
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}
async function getSongs() {
    let a = await fetch(BASE)
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let i = 0; i < as.length; i++) {
        const ele = as[i]
        if (ele.href.endsWith(".mp3")) {
            const name = decodeURIComponent(ele.href).split(/[\\/]songs[\\/]/)[1]
            songs.push(name)
        }
    }
    return songs
}
const playMusic = (fileName, autoplay = true) => {
    currentAudio.src = BASE + encodeURIComponent(fileName)
    const { title, artist } = parseSong(fileName)
    document.querySelector(".songinfo").innerHTML = `${title} - ${artist}`
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
    if (autoplay) {
        currentAudio.play()
        play.src = "assets/pause.svg"
    } else {
        play.src = "assets/play.svg"
    }
}
async function main() {
    let songs = await getSongs()
    console.log(songs)
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        const { title, artist } = parseSong(song)
        songUL.innerHTML += `<li>
            <img class="invert" src="assets/music.svg" alt="">
            <div class="info flex">
                <div>${title}</div>
                <div>${artist}</div>
            </div>
            <div class="playnow flex">
                <span>Play Now</span>
                <img class="invert" src="assets/play.svg" alt="playnow">
            </div>
        </li>`
    }
    playMusic(songs[0], false)
    document.querySelectorAll(".songList li").forEach((li, index) => {
        li.addEventListener("click", () => {
            console.log("Playing:", songs[index])
            playMusic(songs[index])
        })
    })
    play.addEventListener("click", () => {
        if (currentAudio.paused) {
            currentAudio.play()
            play.src = "assets/pause.svg"
        }
        else {
            currentAudio.pause()
            play.src = "assets/play.svg"
        }
    })
    currentAudio.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML =
            `${secondsToMinutesSeconds(currentAudio.currentTime)} / ${secondsToMinutesSeconds(currentAudio.duration)}`
        if (!isNaN(currentAudio.duration)) {
            document.querySelector(".circle").style.left =
                (currentAudio.currentTime / currentAudio.duration) * 100 + "%"
        }
    })
    document.querySelector(".seekbar").addEventListener("click", e => {
        const bar = e.currentTarget
        const rect = bar.getBoundingClientRect()
        let percent = (e.clientX - rect.left) / rect.width
        percent = Math.min(Math.max(percent, 0), 1)
        if (!isNaN(currentAudio.duration)) {
            currentAudio.currentTime = percent * currentAudio.duration
        }
        document.querySelector(".circle").style.left = percent * 100 + "%"
    })
}
main()