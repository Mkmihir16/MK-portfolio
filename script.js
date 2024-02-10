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
    github: "https://github.com/Mkmihir16/Microsoft-Clone",
    gitlive: "https://mkmihir16.github.io/Microsoft-Clone/"
},
{
    info: "Weather App",
    img: "7477790.png",
    github: "https://github.com/Mkmihir16/Weather-webpage",
    gitlive: "https://mkmihir16.github.io/Weather-webpage/"
},
{
    info: "Tic-Tac Game", img: "tic-tac-toe-board-game-3d-illustration-png.webp",
    github: "https://github.com/Mkmihir16/tic-tac-toe",
    gitlive: "https://mkmihir16.github.io/tic-tac-toe/"
},
{
    info: "Amazon-Clone",
    img: "9041af7b-8621-4abc-80ce-7b628707510b.png",
    github: "https://github.com/Mkmihir16/Amazon-Clone",
    gitlive: "https://mkmihir16.github.io/Amazon-Clone/"
},
{
    info: "QR Generator",
    img: "qr.png",
    github: "https://github.com/Mkmihir16/QR-generator",
    gitlive: "https://mkmihir16.github.io/QR-generator/"
},
{
    info: "Meme Generator",
    img: "meme.png",
    github: "https://github.com/Mkmihir16/Meme-Generator",
    gitlive: "https://mkmihir16.github.io/Meme-Generator/"
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
var tl=gsap.timeline();
var tl1=gsap.timeline();
gsap.from(".rightnav h1",{
    y:-50,
    scale:0.5,
    duration:1.2,
    scale:0.5,
    delay:1
})
gsap.from(".rightnav img",{
    scale:0,
    // rotate:360,
    duration:1.2,
    delay:1
})
tl.from(".leftnav ul li",{
    y:-50,
    scale:2,
    stagger:0.8
})
tl1.from("main h1",{
scale:0,
duration:1,
delay:0.5
})
tl1.from(".absolute",{
    x:-80,
})
// tl1.to(".hero1 h2",{
//     scale:0.5,
//     duration:1,
//     scrollTrigger:{
//         trigger:".hero1 h2",
//         scroller:"body",
//         // rotation:250,
//         opacity:0
        
//     }
// })
gsap.from(".hero1 h2", {
    scrollTrigger: {
        trigger: ".hero1 h2",
        scroller: "body"
    },
    y:-20,
    scale:0.2,
    // scale: 0.5,
    // opacity: 0,
    markers: true,
    duration:1
});
gsap.from(".hero1para", {
    scrollTrigger: {
        trigger: ".hero1para",
        scroller: "body"
    },
    scale: 0.2,
    opacity: 0,
    markers: true,
    duration:1
});
gsap.from(".project-list",{
    markers:true,
    scrollTrigger: {
        trigger: ".project-list",
        scroller: "body"
    },
    scale:0,
    opacity:0,
    stagger:0.6
})
