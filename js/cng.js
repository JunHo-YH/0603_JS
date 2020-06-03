const image = document.querySelector(".target")
// image.src="../3.jpg"
let imagesrc = Math.floor(Math.random()*(5)+1); // 1 ~ 5까지

image.src = `../${imagesrc}.jpg` // 새로고침 할 때 마다 이미지 변경

image.style.opacity = "0.1";    // 이미지를 흐리게





