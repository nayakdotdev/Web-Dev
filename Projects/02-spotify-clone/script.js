console.log("Let's Write JavaScript")

const ROOT = "http://127.0.0.1:3000/Projects/02-spotify-clone/songs/"
let currentFolder = "random"
let currentAudio = new Audio()
let currentIndex = 0
const seekRange = document.getElementById("seekRange")
let songs = []
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
async function getSongs(folder) {
    let a = await fetch(ROOT + folder + "/")
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let found = []
    for (let i = 0; i < as.length; i++) {
        const ele = as[i]
        if (ele.href.endsWith(".mp3")) {
            found.push(decodeURIComponent(ele.href).split(/[\\/]/).pop())
        }
    }
    return found
}
const playMusic = (fileName, autoplay = true) => {
    currentIndex = songs.indexOf(fileName)
    currentAudio.src = ROOT + currentFolder + "/" + encodeURIComponent(fileName)
    const { title, artist } = parseSong(fileName)
    document.querySelector(".songinfo").innerHTML = `${title} - ${artist}`
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
    seekRange.value = 0
    seekRange.style.setProperty("--fill", "0%")
    if (autoplay) {
        currentAudio.play()
        play.src = "assets/pause.svg"
    } else {
        play.src = "assets/play.svg"
    }
}
async function loadFolder(folder, autoplay = false) {
    currentFolder = folder
    songs = await getSongs(folder)
    const songUL = document.querySelector(".songList ul")
    songUL.innerHTML = ""
    if (songs.length === 0) {
        songUL.innerHTML = `<li class="empty">No songs found</li>`
        return
    }
    for (const song of songs) {
        const { title, artist } = parseSong(song)
        songUL.innerHTML += `<li><img class="invert" src="assets/music.svg" alt="">
                                <div class="info flex">
                                    <div>${title}</div>
                                    <div>${artist}</div>
                                </div>
                            <div class="playnow flex">
                                <span>Play Now</span>
                                <img class="invert" src="assets/play.svg" alt="playnow">
                            </div></li>`
    }
    document.querySelectorAll(".songList li").forEach((li, index) => {
        li.addEventListener("click", () => playMusic(songs[index]))
    })
    playMusic(songs[0], autoplay)
}
async function displayAlbums() {
    const res = await fetch(ROOT)
    const html = await res.text()
    const div = document.createElement("div")
    div.innerHTML = html
    const folders = []
    for (const a of div.getElementsByTagName("a")) {
        const href = decodeURIComponent(a.getAttribute("href") || "")
        const name = href.split(/[\\/]/).filter(Boolean).pop()
        if (name && !name.includes(".") && name !== "songs" && !folders.includes(name)) {
            folders.push(name)
        }
    }
    const container = document.querySelector(".cardContainer")
    container.innerHTML = ""
    for (const folder of folders) {
        try {
            const r = await fetch(ROOT + encodeURIComponent(folder) + "/info.json")
            if (!r.ok) continue                       // skip folders without info.json
            const info = await r.json()
            container.innerHTML += `
                <div data-folder="${folder}" class="card">
                    <div class="play">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                            <circle cx="32" cy="32" r="30" fill="#1ed760" />
                            <path d="M25 17.5 L47 32 L25 46.5 Z" fill="#000000" />
                        </svg>
                    </div>
                    <img src="${ROOT}${encodeURIComponent(folder)}/cover.jpg" alt="">
                    <h2>${info.title}</h2>
                    <p>${info.description}</p>
                </div>`
        } catch (err) {
            console.log("Skipped folder:", folder, err)
        }
    }
}
async function main() {
    await displayAlbums()
    play.addEventListener("click", () => {
        if (!currentAudio.src) return
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
            const p = (currentAudio.currentTime / currentAudio.duration) * 100
            seekRange.value = p
            seekRange.style.setProperty("--fill", p + "%")
        }
    })
    seekRange.addEventListener("input", e => {
        const p = Number(e.target.value)
        seekRange.style.setProperty("--fill", p + "%")
        if (!isNaN(currentAudio.duration)) {
            currentAudio.currentTime = (p / 100) * currentAudio.duration
        }
    })
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%"
    })
    previous.addEventListener("click", () => {
        if (songs.length === 0) return
        if (currentIndex - 1 >= 0)
            playMusic(songs[currentIndex - 1])
    })
    next.addEventListener("click", () => {
        if (songs.length === 0) return
        if (currentIndex + 1 < songs.length)
            playMusic(songs[currentIndex + 1])
    })
    const volRange = document.getElementById("volRange")
    const volIcon = document.getElementById("volIcon")
    let lastVolume = 50
    function applyVolume(v) {
        volRange.value = v
        currentAudio.volume = v / 100
        volRange.style.setProperty("--fill", v + "%")
        volIcon.style.opacity = v == 0 ? 0.4 : 1
    }
    volRange.addEventListener("input", e => {
        const v = Number(e.target.value)
        if (v > 0) lastVolume = v
        applyVolume(v)
    })
    volIcon.addEventListener("click", () => {
        if (currentAudio.volume > 0) applyVolume(0)
        else applyVolume(lastVolume)
    })
    applyVolume(50)
    document.querySelector(".cardContainer").addEventListener("click", async e => {
        const card = e.target.closest(".card")
        if (!card) return
        const clickedPlay = e.target.closest(".play") !== null
        await loadFolder(card.dataset.folder, clickedPlay)
    })
}
main()