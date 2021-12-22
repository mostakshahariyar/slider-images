const images = [
   'images/pic-1.jpg',
   'images/pic-2.jpg',
   'images/pic-3.jpg',
   'images/pic-4.jpg',
   'images/pic-5.jpg',
   'images/pic-6.jpg',
   'images/pic-7.jpg',
   'images/pic-8.jpg',
   'images/pic-9.jpg',
   'images/pic-10.jpg',
   'images/pic-11.jpg',
   'images/pic-12.jpg',
   'images/pic-13.jpg',
   'images/pic-14.jpg',
   'images/pic-15.jpg',
   'images/pic-16.jpg',
   'images/pic-17.jpg',
   'images/pic-18.jpg',
   'images/pic-19.jpg',
   'images/pic-20.jpg',
   'images/pic-21.jpg',
   'images/pic-22.jpg'
]
let imgIndex = 0;
const imagesId = document.getElementById('image-slider')
setInterval(() => {
    imgIndex++;
    if (imgIndex>=images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    // console.log(imgUrl);
    imagesId.setAttribute('src', imgUrl)
}, 2000);