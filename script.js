// لیست ویدیوها را اینجا دستی وارد کن
let playlist = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4"
];

let index = 0;
let player = document.getElementById("player");

function playVideo(i) {
    player.src = "videos/" + playlist[i];
    player.play();
}

player.addEventListener("ended", function() {
    index = (index + 1) % playlist.length;
    playVideo(index);
});

playVideo(index);
