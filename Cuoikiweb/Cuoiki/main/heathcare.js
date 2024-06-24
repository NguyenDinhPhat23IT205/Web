document.addEventListener("DOMContentLoaded", function() {
    // Toggle menu
    let menuBtn = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.header .navbar');

    menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        menuBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    };

    // Dropdown functionality
    const dropdownImg = document.querySelector('.dropdown-img');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdownImg && dropdownMenu) {
        dropdownImg.addEventListener('click', function() {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    
        window.addEventListener('click', function(event) {
            if (!event.target.matches('.dropdown-img')) {
                if (dropdownMenu.style.display === 'block') {
                    dropdownMenu.style.display = 'none';
                }
            }
        });
    }

    // Slideshow functionality
    let slideIndexTrangchu = 0;
let slideIndexGiuong = 0;

function showSlidesTrangchu() {
  let i;
  let slides = document.querySelectorAll(".Trangchu .mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexTrangchu++;
  if (slideIndexTrangchu > slides.length) { slideIndexTrangchu = 1 }
  slides[slideIndexTrangchu - 1].style.display = "block";
  setTimeout(showSlidesTrangchu, 2000); // Change image every 2 seconds
}

function showSlidesGiuong() {
  let i;
  let slides = document.querySelectorAll(".giuong .mySlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexGiuong++;
  if (slideIndexGiuong > slides.length) { slideIndexGiuong = 1 }
  slides[slideIndexGiuong - 1].style.display = "block";
  setTimeout(showSlidesGiuong, 2000); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", function() {
  showSlidesTrangchu();
  showSlidesGiuong();
});

});
