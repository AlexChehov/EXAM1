let burger = document.querySelector('.menu-burger')
let menuList = document.querySelector('.menu-list')
burger.addEventListener('click', (e) => {
    burger.classList.toggle('active-burger')
    menuList.classList.toggle('list-active')
})

$('.team_team_team').slick({
    arrows:false,
    dots:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
});
    

$('.futer-slick').slick({
    arrows:false,
    dots:true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3

});
