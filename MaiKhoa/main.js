currentTag = 'all'
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("all").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listAll;
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="details">
            <img class="avt-author" src="${video.avatar}" />
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99999 1.16666C3.79166 1.16666 1.16666 3.79166 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79166 10.2083 1.16666 6.99999 1.16666ZM5.71666 10.0917L3.26666 7.7L4.08332 6.88333L5.71666 8.45833L9.91666 4.31666L10.7333 5.13333L5.71666 10.0917Z"
                    fill="#606060"
                  />
                </svg>
              </p>
              <p>${video.view} lượt xem  • ${video.publish}</p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('all')
    });
    document.getElementById("list_sub").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listcombination;
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="">
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
              </p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('list_sub')
    });
    document.getElementById("music").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listMusic;
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="details">
            <img class="avt-author" src="${video.avatar}" />
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99999 1.16666C3.79166 1.16666 1.16666 3.79166 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79166 10.2083 1.16666 6.99999 1.16666ZM5.71666 10.0917L3.26666 7.7L4.08332 6.88333L5.71666 8.45833L9.91666 4.31666L10.7333 5.13333L5.71666 10.0917Z"
                    fill="#606060"
                  />
                </svg>
              </p>
              <p>${video.view} lượt xem  • ${video.publish}</p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('music')
    });
    document.getElementById("new").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listNew;
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="details">
            <img class="avt-author" src="${video.avatar}" />
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99999 1.16666C3.79166 1.16666 1.16666 3.79166 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79166 10.2083 1.16666 6.99999 1.16666ZM5.71666 10.0917L3.26666 7.7L4.08332 6.88333L5.71666 8.45833L9.91666 4.31666L10.7333 5.13333L5.71666 10.0917Z"
                    fill="#606060"
                  />
                </svg>
              </p>
              <p>${video.view} lượt xem  • ${video.publish}</p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('new')
    });
    document.getElementById("game").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listGame;
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="details">
            <img class="avt-author" src="${video.avatar}" />
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99999 1.16666C3.79166 1.16666 1.16666 3.79166 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79166 10.2083 1.16666 6.99999 1.16666ZM5.71666 10.0917L3.26666 7.7L4.08332 6.88333L5.71666 8.45833L9.91666 4.31666L10.7333 5.13333L5.71666 10.0917Z"
                    fill="#606060"
                  />
                </svg>
              </p>
              <p>${video.view} lượt xem  • ${video.publish}</p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('game')
    });
    document.getElementById("live").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listGame;
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="details">
            <img class="avt-author" src="${video.avatar}" />
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99999 1.16666C3.79166 1.16666 1.16666 3.79166 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79166 10.2083 1.16666 6.99999 1.16666ZM5.71666 10.0917L3.26666 7.7L4.08332 6.88333L5.71666 8.45833L9.91666 4.31666L10.7333 5.13333L5.71666 10.0917Z"
                    fill="#606060"
                  />
                </svg>
              </p>
              <p>${video.view} lượt xem  • ${video.publish}</p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('live')
    });
    document.getElementById("rap").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listMusic;
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="details">
            <img class="avt-author" src="${video.avatar}" />
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99999 1.16666C3.79166 1.16666 1.16666 3.79166 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79166 10.2083 1.16666 6.99999 1.16666ZM5.71666 10.0917L3.26666 7.7L4.08332 6.88333L5.71666 8.45833L9.91666 4.31666L10.7333 5.13333L5.71666 10.0917Z"
                    fill="#606060"
                  />
                </svg>
              </p>
              <p>${video.view} lượt xem  • ${video.publish}</p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('rap')
    });
    document.getElementById("nature").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listNew;
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="details">
            <img class="avt-author" src="${video.avatar}" />
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99999 1.16666C3.79166 1.16666 1.16666 3.79166 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79166 10.2083 1.16666 6.99999 1.16666ZM5.71666 10.0917L3.26666 7.7L4.08332 6.88333L5.71666 8.45833L9.91666 4.31666L10.7333 5.13333L5.71666 10.0917Z"
                    fill="#606060"
                  />
                </svg>
              </p>
              <p>${video.view} lượt xem  • ${video.publish}</p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('nature')
    });
    document.getElementById("upload").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listGame 
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="details">
            <img class="avt-author" src="${video.avatar}" />
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99999 1.16666C3.79166 1.16666 1.16666 3.79166 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79166 10.2083 1.16666 6.99999 1.16666ZM5.71666 10.0917L3.26666 7.7L4.08332 6.88333L5.71666 8.45833L9.91666 4.31666L10.7333 5.13333L5.71666 10.0917Z"
                    fill="#606060"
                  />
                </svg>
              </p>
              <p>${video.view} lượt xem  • ${video.publish}</p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('upload')
    });
    document.getElementById("seen").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listAll 
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="details">
            <img class="avt-author" src="${video.avatar}" />
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99999 1.16666C3.79166 1.16666 1.16666 3.79166 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79166 10.2083 1.16666 6.99999 1.16666ZM5.71666 10.0917L3.26666 7.7L4.08332 6.88333L5.71666 8.45833L9.91666 4.31666L10.7333 5.13333L5.71666 10.0917Z"
                    fill="#606060"
                  />
                </svg>
              </p>
              <p>${video.view} lượt xem  • ${video.publish}</p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('seen')
    });
    document.getElementById("request").addEventListener("click", function() {
        var videoList = document.getElementById("thumbs-list");
        videoList.innerHTML = ""; 
        var newVideos = listMusic 
        newVideos.forEach(function(video) {
            var listItem = document.createElement("div");
            listItem.innerHTML = `<article class="video-thumb">
            <div class="img">
                <img class="thumb" src="${video.image}" />
                <div class="time-vd">
                  <span >${video.time}</span>
                 </div>
             </div>
          <div class="details">
            <img class="avt-author" src="${video.avatar}" />
            <div class="infos">
              <h4>${video.title}</h4>
              <p>
              ${video.channel}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99999 1.16666C3.79166 1.16666 1.16666 3.79166 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79166 10.2083 1.16666 6.99999 1.16666ZM5.71666 10.0917L3.26666 7.7L4.08332 6.88333L5.71666 8.45833L9.91666 4.31666L10.7333 5.13333L5.71666 10.0917Z"
                    fill="#606060"
                  />
                </svg>
              </p>
              <p>${video.view} lượt xem  • ${video.publish}</p>
            </div>
          </div>
        </article>`;
            videoList.appendChild(listItem);
        });
        getSelect('request')
    });
});

function getSelect(id) {
    var element = document.getElementById(currentTag);
    element.classList.remove("selected");
    const newElement = document.getElementById(id);
    newElement.classList.add("selected");
    if (newElement?.className === "") {
        newElement.className = "selected";
    } else {
        newElement.classList.add("selected");
    }    
    currentTag = id;
}
listAll = [
    {
        "image": "images/t01.png",
        "avatar": "images/a01.png",
        "time": "1:28:28",
        "title":"Nhạc Chill Vui Tươi Yêu Đời - Playlist Vui Vẻ Mang Năng Lượng Tích Cực Cho Ngày Mới - Iu Là Đây",
        "channel": "Iu Là Đây",
        "view": "233 N",
        "publish": "3 năm trước",
        "isLive": true
    },
    {
        "image": "images/t02.png",
        "avatar": "images/a02.png",
        "time": "6:28",
        "title":"GHÉ QUA | OFFICIAL MV | Dick x PC x Tofu",
        "channel": "BẠN CÓ TÀI MÀ",
        "view": "109 Tr",
        "publish": "6 năm trước",
        "isLive": false
    },
    {
        "image": "images/t03.png",
        "avatar": "images/a03.png",
        "time": "5:17",
        "title":"Cứ Chill Thôi - Chillies (Official Music Video) ft. Suni Hạ Linh & Rhymastic",
        "channel": "Chillies",
        "view": "108 Tr",
        "publish": "3 năm trước",
        "isLive": false
    },
    {
        "image": "images/t01.png",
        "avatar": "images/a01.png",
        "time": "1:28:28",
        "title":"Nhạc Chill Vui Tươi Yêu Đời - Playlist Vui Vẻ Mang Năng Lượng Tích Cực Cho Ngày Mới - Iu Là Đây",
        "channel": "Iu Là Đây",
        "view": "233 N",
        "publish": "3 năm trước",
        "isLive": true
    },
    {
        "image": "images/t02.png",
        "avatar": "images/a02.png",
        "time": "6:28",
        "title":"GHÉ QUA | OFFICIAL MV | Dick x PC x Tofu",
        "channel": "BẠN CÓ TÀI MÀ",
        "view": "109 Tr",
        "publish": "6 năm trước",
        "isLive": false
    },
    {
        "image": "images/t03.png",
        "avatar": "images/a03.png",
        "time": "5:17",
        "title":"Cứ Chill Thôi - Chillies (Official Music Video) ft. Suni Hạ Linh & Rhymastic",
        "channel": "Chillies",
        "view": "108 Tr",
        "publish": "3 năm trước",
        "isLive": false
    },
    {
        "image": "images/t01.png",
        "avatar": "images/a01.png",
        "time": "1:28:28",
        "title":"Nhạc Chill Vui Tươi Yêu Đời - Playlist Vui Vẻ Mang Năng Lượng Tích Cực Cho Ngày Mới - Iu Là Đây",
        "channel": "Iu Là Đây",
        "view": "233 N",
        "publish": "3 năm trước",
        "isLive": true
    },
    {
        "image": "images/t02.png",
        "avatar": "images/a02.png",
        "time": "6:28",
        "title":"GHÉ QUA | OFFICIAL MV | Dick x PC x Tofu",
        "channel": "BẠN CÓ TÀI MÀ",
        "view": "109 Tr",
        "publish": "6 năm trước",
        "isLive": false
    },
    {
        "image": "images/t03.png",
        "avatar": "images/a03.png",
        "time": "5:17",
        "title":"Cứ Chill Thôi - Chillies (Official Music Video) ft. Suni Hạ Linh & Rhymastic",
        "channel": "Chillies",
        "view": "108 Tr",
        "publish": "3 năm trước",
        "isLive": false
    },
    {
        "image": "images/t01.png",
        "avatar": "images/a01.png",
        "time": "1:28:28",
        "title":"Nhạc Chill Vui Tươi Yêu Đời - Playlist Vui Vẻ Mang Năng Lượng Tích Cực Cho Ngày Mới - Iu Là Đây",
        "channel": "Iu Là Đây",
        "view": "233 N",
        "publish": "3 năm trước",
        "isLive": true
    },
    {
        "image": "images/t02.png",
        "avatar": "images/a02.png",
        "time": "6:28",
        "title":"GHÉ QUA | OFFICIAL MV | Dick x PC x Tofu",
        "channel": "BẠN CÓ TÀI MÀ",
        "view": "109 Tr",
        "publish": "6 năm trước",
        "isLive": false
    },
    {
        "image": "images/t03.png",
        "avatar": "images/a03.png",
        "time": "5:17",
        "title":"Cứ Chill Thôi - Chillies (Official Music Video) ft. Suni Hạ Linh & Rhymastic",
        "channel": "Chillies",
        "view": "108 Tr",
        "publish": "3 năm trước",
        "isLive": false
    },
    {
        "image": "images/t01.png",
        "avatar": "images/a01.png",
        "time": "1:28:28",
        "title":"Nhạc Chill Vui Tươi Yêu Đời - Playlist Vui Vẻ Mang Năng Lượng Tích Cực Cho Ngày Mới - Iu Là Đây",
        "channel": "Iu Là Đây",
        "view": "233 N",
        "publish": "3 năm trước",
        "isLive": true
    },
    {
        "image": "images/t02.png",
        "avatar": "images/a02.png",
        "time": "6:28",
        "title":"GHÉ QUA | OFFICIAL MV | Dick x PC x Tofu",
        "channel": "BẠN CÓ TÀI MÀ",
        "view": "109 Tr",
        "publish": "6 năm trước",
        "isLive": false
    },
    {
        "image": "images/t03.png",
        "avatar": "images/a03.png",
        "time": "5:17",
        "title":"Cứ Chill Thôi - Chillies (Official Music Video) ft. Suni Hạ Linh & Rhymastic",
        "channel": "Chillies",
        "view": "108 Tr",
        "publish": "3 năm trước",
        "isLive": false
    },
]
listcombination = [
    {
        "image": "images/combine_1.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Surrender - Natalie Taylor",
        "channel": "Adele, Natalie Taylor, Rosa Linn và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_2.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Đen - Nấu ăn cho em ft. PiaLinh (M/V)",
        "channel": "Đen, PiaLinh, Cheng và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_3.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Nhạc Điện tử",
        "channel": "Sơn Tùng M-TP, Phương Ly, JustaTee và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_4.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – BÍCH PHƯƠNG - Gửi Anh Xa Nhớ [OFFICIAL M/V]",
        "channel": "Bích Phương, Sơn Tùng M-TP, Mỹ Tâm và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_5.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Từ Ngày Em Đến - Da LAB (Official MV)",
        "channel": "Da LAB, Tóc Tiên, Phương Ly và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_1.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Surrender - Natalie Taylor",
        "channel": "Adele, Natalie Taylor, Rosa Linn và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_2.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Đen - Nấu ăn cho em ft. PiaLinh (M/V)",
        "channel": "Đen, PiaLinh, Cheng và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_3.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Nhạc Điện tử",
        "channel": "Sơn Tùng M-TP, Phương Ly, JustaTee và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_4.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – BÍCH PHƯƠNG - Gửi Anh Xa Nhớ [OFFICIAL M/V]",
        "channel": "Bích Phương, Sơn Tùng M-TP, Mỹ Tâm và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_5.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Từ Ngày Em Đến - Da LAB (Official MV)",
        "channel": "Da LAB, Tóc Tiên, Phương Ly và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_1.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Surrender - Natalie Taylor",
        "channel": "Adele, Natalie Taylor, Rosa Linn và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_2.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Đen - Nấu ăn cho em ft. PiaLinh (M/V)",
        "channel": "Đen, PiaLinh, Cheng và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_3.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Nhạc Điện tử",
        "channel": "Sơn Tùng M-TP, Phương Ly, JustaTee và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_4.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – BÍCH PHƯƠNG - Gửi Anh Xa Nhớ [OFFICIAL M/V]",
        "channel": "Bích Phương, Sơn Tùng M-TP, Mỹ Tâm và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
    {
        "image": "images/combine_5.jpg",
        "avatar": "images/a03.png",
        "time": "Tuyển tập",
        "title":"Danh sách kết hợp – Từ Ngày Em Đến - Da LAB (Official MV)",
        "channel": "Da LAB, Tóc Tiên, Phương Ly và nhiều nghệ sĩ khác",
        "view": "108 Tr",   
        "publish": "3 năm trước"
    },
]
listMusic = [
    {
        "image": "images/music_1.png",
        "avatar": "images/avt_music_1.jpg",
        "time": "5:00",
        "title":"VẼ LẠI BỨC TRANH - Bùi Anh Tuấn | OST Lật Mặt 7: Một Điều Ước - ĐANG CHIẾU TẠI RẠP | OFFICIAL MV",
        "channel": "Ly Hai Production",
        "view": "1,5 Tr",
        "publish": "9 ngày trước",
        "isLive": true
    },
    {
        "image": "images/music_2.png",
        "avatar": "images/avt_music_2.jpg",
        "time": "11:54:57",
        "title":"Daily Work Space 📂 Lofi Deep Focus [chill lo-fi hip hop beats]",
        "channel": "𝗖𝗛𝗜𝗟𝗟 𝗩𝗜𝗟𝗟𝗔𝗚𝗘",
        "view": "1,1 Tr",
        "publish": "Phát trực tiếp 1 năm trước",
        "isLive": true
    },   
    {
        "image": "images/music_3.png",
        "avatar": "images/avt_music_3.jpg",
        "time": "5:00",
        "title":"[Playlist] Một Buổi Sáng Tràn Đầy Năng Lượng Cùng List Nhạc Acoustic 2 Tiếng Này",
        "channel": "The Hanoi Chamomile",
        "view": "3,7 Tr",
        "publish": "11 tháng trước",
        "isLive": true
    },   
    {
        "image": "images/music_1.png",
        "avatar": "images/avt_music_1.jpg",
        "time": "5:00",
        "title":"VẼ LẠI BỨC TRANH - Bùi Anh Tuấn | OST Lật Mặt 7: Một Điều Ước - ĐANG CHIẾU TẠI RẠP | OFFICIAL MV",
        "channel": "Ly Hai Production",
        "view": "1,5 Tr",
        "publish": "9 ngày trước",
        "isLive": true
    },
    {
        "image": "images/music_2.png",
        "avatar": "images/avt_music_2.jpg",
        "time": "11:54:57",
        "title":"Daily Work Space 📂 Lofi Deep Focus [chill lo-fi hip hop beats]",
        "channel": "𝗖𝗛𝗜𝗟𝗟 𝗩𝗜𝗟𝗟𝗔𝗚𝗘",
        "view": "1,1 Tr",
        "publish": "Phát trực tiếp 1 năm trước",
        "isLive": true
    },   
    {
        "image": "images/music_3.png",
        "avatar": "images/avt_music_3.jpg",
        "time": "5:00",
        "title":"[Playlist] Một Buổi Sáng Tràn Đầy Năng Lượng Cùng List Nhạc Acoustic 2 Tiếng Này",
        "channel": "The Hanoi Chamomile",
        "view": "3,7 Tr",
        "publish": "11 tháng trước",
        "isLive": true
    },   
]
listNew = [
    {
        "image": "images/new_1.png",
        "avatar": "images/avt_new_1.jpg",
        "time": "1:39:00",
        "title":"Trực tiếp Lễ kỷ niệm, diễu binh, diễu hành 70 năm Chiến thắng Điện Biên Phủ | VTV24",
        "channel": "VTV24",
        "view": "1,4 Tr",
        "publish": "Phát trực tiếp 1 ngày trước",
        "isLive": true
    },
    {
        "image": "images/new_2.png",
        "avatar": "images/avt_new_2.jpg",
        "time": "54:28",
        "title":"56 ngày đêm Điện Biên Phủ vang dội năm châu, chấn động địa cầu - VNews",
        "channel": "VNEWS - TRUYỀN HÌNH THÔNG TẤN",
        "view": "1,2 N",
        "publish": "14 giờ trước",
        "isLive": true
    },
]
listGame = [
    {
        "image": "images/game_1.png",
        "avatar": "images/avt_game_1.jpg",
        "time": "2:24:58",
        "title":"(Goose Goose Duck #70) Sư phụ Độ Mixi mukbang bất chấp, đánh mất chính mình trước đồ đệ Fat beso.",
        "channel": "MixiGaming",
        "view": "990 N",
        "publish": "1 ngày trước",
        "isLive": true
    },
    {
        "image": "https://i.ytimg.com/vi/DADJbw8sM5Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAa9naqQPFc5F3WUYksWen5-mpoMw",
        "avatar": "https://yt3.ggpht.com/6yySIxtIHDLdEfA9BhMhipmfbCakOV8Ippjf9nJxZjs-nvfGUYcijp5Y9Spp49VyVoPm81anWQ=s68-c-k-c0x00ffffff-no-rj",
        "time": "24:59",
        "title":"HIGHLIGHT | TL vs TES | MSI 2024 - Vòng Phân Nhánh | 07.05.2024",
        "channel": "Vietnam Championship Series - VODs and Highlights",
        "view": "59 N",
        "publish": "16 giờ trước",
        "isLive": true
    },
    {
        "image": "https://i.ytimg.com/vi/AXbyzbJJEko/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACKlOkVyEUtoiFMi6bejI24oLGyQ",
        "avatar": "images/avt_game_1.jpg",
        "time": "2:24:58",
        "title":"(Sea of Thieves 2024) Băng hải tặc Mixi siêu chiến &quot;đến là đón-đụng là trụng&quot; tiến vào Đại hải trình",
        "channel": "MixiGaming",
        "view": "537 N",
        "publish": "2 ngày trước",
        "isLive": true
    },
    {
        "image": "images/game_1.png",
        "avatar": "images/avt_game_1.jpg",
        "time": "2:24:58",
        "title":"(Goose Goose Duck #70) Sư phụ Độ Mixi mukbang bất chấp, đánh mất chính mình trước đồ đệ Fat beso.",
        "channel": "MixiGaming",
        "view": "990 N",
        "publish": "1 ngày trước",
        "isLive": true
    },
    {
        "image": "https://i.ytimg.com/vi/DADJbw8sM5Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAa9naqQPFc5F3WUYksWen5-mpoMw",
        "avatar": "https://yt3.ggpht.com/6yySIxtIHDLdEfA9BhMhipmfbCakOV8Ippjf9nJxZjs-nvfGUYcijp5Y9Spp49VyVoPm81anWQ=s68-c-k-c0x00ffffff-no-rj",
        "time": "24:59",
        "title":"HIGHLIGHT | TL vs TES | MSI 2024 - Vòng Phân Nhánh | 07.05.2024",
        "channel": "Vietnam Championship Series - VODs and Highlights",
        "view": "59 N",
        "publish": "16 giờ trước",
        "isLive": true
    },
    {
        "image": "https://i.ytimg.com/vi/AXbyzbJJEko/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACKlOkVyEUtoiFMi6bejI24oLGyQ",
        "avatar": "images/avt_game_1.jpg",
        "time": "2:24:58",
        "title":"(Sea of Thieves 2024) Băng hải tặc Mixi siêu chiến &quot;đến là đón-đụng là trụng&quot; tiến vào Đại hải trình",
        "channel": "MixiGaming",
        "view": "537 N",
        "publish": "2 ngày trước",
        "isLive": true
    },
]