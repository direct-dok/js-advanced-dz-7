let filterButton = document.querySelector('.catalog-filter__filter-category'), 
    submenuBlock = document.querySelector('.catalog-filter__submenu-category'), 
    listFilterSize = document.querySelectorAll('.catalog-filter__select-item');

listFilterSize.forEach((elem) => {
    elem.addEventListener('click', function(e) {
        // console.log(elem.querySelector('.catalog-filter__list-check-size'));
        try{
            if(e.target.tagName == 'DIV') {
                this.querySelector('.catalog-filter__list-check-size').classList.toggle('display__block');
            }
        } catch {}
    });
});

filterButton.addEventListener('click', function() {
    submenuBlock.classList.toggle('display__block');
    filterButton.classList.toggle('color-pink__active-icon');
});