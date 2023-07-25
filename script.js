let played_human = 0;
let played=0;
const bot_screen = document.getElementsByClassName("bot")[0];

function play(){
    if (played_human==0){
    var targetElement = document.querySelectorAll("section.game")[0];
    // console.log(document.querySelectorAll("section.game"));
    // console.log("target", targetElement);
    var iframe = document.createElement("iframe");
    iframe.setAttribute("height", "530px");
    iframe.setAttribute("width", "530px");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("id", "game");
    iframe.setAttribute("src", "https://supermario-game.com/mario-game/mobilemario.html");
    targetElement.appendChild(iframe);
    played_human=1;
    }

    if (played==0){
        //console.log("hii")
        //window.alert("Starting in 5 seconds.")
        setTimeout(function() {
            bot_screen.innerHTML='';
            const video = document.createElement("video");
            video.id = "bot_video";
            video.autoplay = true;
            // video.muted = true;
            // video.playsinline = true;
            // video.height = "530px";
            // video.width = "115%";
            video.id="video_bot_123";
            video.style.objectFit = "fill";

            const source1 = document.createElement("source");
            source1.src = "demo_video/Level1.mp4";
            source1.type = "video/mp4";
            
            console.log(video);
            video.appendChild(source1);
            bot_screen.appendChild(video);
            video.playbackRate = 0.65;
          }, 3000);
        
    }
    else if(played==1){
        setTimeout(function() {
            bot_screen.innerHTML='';
            const video = document.createElement("video");
            video.id = "bot_video";
            video.autoplay = true;
            video.muted = true;
            video.playsinline = true;
            video.height = "530px";
            video.width = "115%";
            video.style.objectFit = "fill";

            const source2 = document.createElement("source");
            source2.src = "demo_video/Level2.mp4";
            source2.type = "video/mp4";

            video.appendChild(source2);
            bot_screen.appendChild(video);
            played=2;
        }, 3000);
    }
}

video.addEventListener("ended", function() {
    played =1;
});

const startButton = document.getElementById("Start");
const refreshButton = document.getElementById("Refresh");

