
function toggleIcon() {
    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.menu-mobile').slideToggle(300);
    })
}

function closeMobileMenu(){
    $('.menu-mobile').on('click', 'a', function(){
        $('.icon').trigger('click');
    })
}

function changeImage(imagePath) {
    $("#main-image").attr("src", imagePath);
  }
  
  function toggleDropdown() {
    $(".dropdown-content").slideToggle();
  }

  var navItems = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() {
      this.classList.add("active");
   });
}

$('.my-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3500,
  infinite:true,
  dots:true,
  draggable:false,
})

  
  //when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);