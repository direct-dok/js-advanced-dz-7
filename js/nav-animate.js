const navigation = document.querySelector('.navigation');
const closeNav = document.querySelector('.navigation__close-nav');
const openNavIcon = document.querySelector('.header__button-menu');

openNavIcon.addEventListener('click', function() {
    navigation.classList.add('navigation__open-navigation');
});

closeNav.addEventListener('click', function() {
    navigation.classList.remove('navigation__open-navigation');
})



