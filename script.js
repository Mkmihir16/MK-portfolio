let ham = document.querySelector(".ham");
let menu = document.querySelector(".menu");
let hide = document.querySelector(".hide").classList;

function myfun() {
    hide.add("main2");
}
function myfun2() {
    hide.remove("main2")
}
let arr = [{
    info: "Microsoft Clone",
    img: "microsoft-new.webp",
    github: "",
    gitlive: ""
},
{
    info: "Weather App",
    img: "7477790.png",
    github: "",
    gitlive: ""
},
{
    info: "Tic-Tac Game", img: "tic-tac-toe-board-game-3d-illustration-png.webp",
    github: "",
    gitlive: ""
},
{
    info: "Amazon-Clone",
    img: "9041af7b-8621-4abc-80ce-7b628707510b.png",
    github: "",
    gitlive: ""
},
{
    info: "QR Generator",
    img: "qr.png",
    github: "",
    gitlive: ""
},
{
    info: "Meme Generator",
    img: "meme.png",
    github: "",
    gitlive: ""
}];
let addarr = document.querySelector(".projects");
let html = "";
arr.forEach((item) => {
    console.log(item)
    html += ` 
    <div class="project-list">
     <img src="${item.img}" alt="">
      <p>${item.info}</p> 
        <div class="btns">
            <a href="${item.github}"><button class="git">Git Hub</button></a>
            <a href="${item.gitlive}"><button class="live">Live <img src="icons8-linking-48.png" alt=""></button></a>
        </div>
    </div>`
})
addarr.innerHTML = html;