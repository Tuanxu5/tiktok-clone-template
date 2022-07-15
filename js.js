//Danh sách video tiktok
const data = [
  {
    name: "Evon.devvv",
    nickname: "Evon.dev",
    text: "Để trở thành frontend developer thì cần học những gì?",
    hagtag: "#learnontiktok #evondev #laptrinh #frontend #it #dev",
    music: "evon.dev",
    avatar: "photo/evondev.jpg",
    video: "./video/video1.mp4",
  },
  {
    name: "ngockemm",
    nickname: "Ngọc Kem",
    text: "Anh zì ơiii",
    hagtag: "",
    music: "ctri",
    avatar: "photo/ngockem.jpg",
    video: "./video/video2.mp4",
  },
  {
    name: "nmisw",
    nickname: "Ngọc Mỹ",
    text: "Chết toi roi .....",
    hagtag: "#meme #xuhuong",
    music: "Thanh Danh",
    avatar: "photo/thuan2004.jpg",
    video: "./video/video3.mp4",
  },
  {
    name: "oreoratngon",
    nickname: "con nho xau tinh",
    text: "",
    hagtag: "",
    music: "Cool For Summer - Tik Tok",
    avatar: "photo/video4.jpg",
    video: "./video/video4.mp4",
  },
  {
    name: "hkl2009",
    nickname: "Hồ Khánh Linh",
    text: "",
    hagtag: "#xuhuong",
    music: "Ngày đầu tiên remix - ⚜️ 𝐿𝑒̂ 𝑇ℎ𝑎𝑛ℎ 𝑆𝑜̛𝑛 ⚜️",
    avatar: "photo/video5.jpg",
    video: "./video/video5.mp4",
  },
];

//Hiện thị danh sách video
const playlistvideo = document.getElementById("playlistvideo");
data.forEach((item, index) => {
  playlistvideo.insertAdjacentHTML(
    "beforeend",
    `
    <div class="content-right">
                <div class="avatar">
                  <img src="${item.avatar}" width="55px" alt="">
                </div>
                <div class="content-playlist">
                  <div class="playlist-info">
                    <div class="playlist-info-name">
                      <div class="name-user">${item.name} <img src="photo/tichxanh.jpg" width="13px" height="13px" alt=""><div class="nickname">${item.nickname}</div></div>
                    </div>
                    <button class="subscribe">Subscribe</button>
                    <div class="info-video">
                      <span>${item.text}<span class="hagtag">${item.hagtag}</span>
                      </span>
                    </div>
                    <div class="link-music">
                      <i class="fas fa-music"></i>
                      <span>&nbsp;nhạc nền - ${item.music}</span>
                    </div>
                  </div>
                  <div class="playlist-video">
                    <div class="video-tiktok">
                      <video height="500px" controls="playlist">
                        <source src="${item.video}" type="video/mp4">
                      </video>
                    </div>
                    <div class="interactive">
                      <div class="heart" id ="heart1" onclick="clickheart()">
                        <i class="fas fa-heart"></i>
                      </div>
                      <span>10.0M</span>
                      <div class="comment">
                        <i class="fas fa-comment-dots"></i>
                      </div>
                      <span>200.3K</span>
                      <div class="share">
                        <i class="fas fa-share"></i>
                      </div>
                      <span>10.5K</span>
                    </div>
                  </div>
                </div>
              </div>
    `
  );
});
