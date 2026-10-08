function createCard(title,thumbnailLink,cName,views,monthsOld,duration){
    if(views>=1000)
        views=Math.floor(views/1000)+"K"
    const newCard=document.createElement("div")
    newCard.classList.add("card")
    newCard.innerHTML=`<div class="thumbnail">
                <img src="${thumbnailLink}" alt="thumbnail">
                <div class="duration">${duration}</div>
            </div>
            <div class="content">
                <h3>${title}</h3>
                <p>${cName} • ${views} views • ${monthsOld} months ago</p>
            </div>`
    document.querySelector(".container").append(newCard)
}
createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBN31a8sOnPAnEuvlpME-PMXo_01w","CodeWithHarry",524000,2,"28:31")
createCard("MOST UNEXPECTED ENTRY...😳 Virat & Samay SLAMS Fake News 😡 Messi & Ronaldo, Dhruv Rathee, Elon Musk |","https://i.ytimg.com/vi/-P9KtfMdQrw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD9yL-xCrAJEhixGGjUN0-ivg5fNg","Neon Man",15211,3,"12:28")