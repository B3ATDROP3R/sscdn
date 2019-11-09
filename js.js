var images = ["url('https://cdn.jsdelivr.net/gh/B3ATDROP3R/sscdn@master/images/1.jpg')","url('../jcss/images/2.jpg')","url('../jcss/images/3.jpg')","url('../jcss/images/4.jpg')","url('../jcss/images/5.jpg')","url('../jcss/images/6.png')","url('../jcss/images/7.jpg')","url('../jcss/images/8.jpg')","url('../jcss/images/9.jpg')","url('../jcss/images/10.jpg')","url('../jcss/images/11.png')","url('../jcss/images/12.jpg')","url('../jcss/images/13.png')","url('../jcss/images/15.jpg')","url('../jcss/images/17.jpg')","url('../jcss/images/18.png')","url('../jcss/images/21.jpg')","url('../jcss/images/22.jpg')","url('../jcss/images/23.jpg')"];
var size = images.length
var x = Math.floor(size*Math.random())
document.body.style.backgroundImage = images[x];
