
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

const slideList = [
  {
  id: 1,
  text: 'first slide',
  src: 'images/inside-a.png'
},
{
  id: 2,
  text: 'second slide',
  src: 'images/inside-b.png'
},
{
  id: 3,
  text: 'third slide',
  src: 'images/inside-c.png'
},
  {
  id: 4,
  text: 'fourth slide',
  src: 'images/inside-d.png'
},
]

let count = 0;
let numSlides = 4;


function increaseCount() { 
$('.next').click(function () { 
  count++
  console.log(count)
  if (count < numSlides) {
    renderSlide(count)
  } else { 
    count = 0
    renderSlide(count)
  }
})
return count

}
function decreaseCount() { 
$('.prev').click(function () { 

  if (count > 0) {
    count--
    renderSlide(count)
    console.log(count)
  }
  else {
    count = numSlides - 1
    renderSlide(count)
  }
})

return count

}

function renderSlide(count) { 
$('#slideContent').html(`
    <!-- id: ${slideList[count].id} -->
    <h2>${slideList[count].text}</h2>
    <img class="slideimg" src=${slideList[count].src}>
`)
}




$(decreaseCount())
$(increaseCount())


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  
  //when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);