Vue.component('filter-shop', {
    template: `
    <section class="catalog-filter">
            <div class="width-1600">
                <div class="catalog-filter__wrapper-filter">
                    <div class="catalog-filter__filter-category">
                        <div class="catalog-filter__name-filter">Filter</div>
                        <svg width="15" height="10" viewBox="0 0 15 10" xmlns="http://www.w3.org/2000/svg"
                            class="catalog-filter__icon-wrapper">
                            <path
                                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                fill="black" class="catalog-filter__icon-filter" />
                        </svg>
                        <div class="catalog-filter__submenu-category">
                            <ul class="catalog-filter__submenu-items">
                                <li class="catalog-filter__submenu-item">
                                    <div
                                        class="catalog-filter__submenu-caption catalog-filter__submenu-caption--active">
                                        Category</div>
                                    <ul class="catalog-filter__submenu-nav-items">
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">Accessories</a>
                                        </li>
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">Bags</a>
                                        </li>
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">Denim</a>
                                        </li>
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">Hoodies &
                                                Sweatshirts</a>
                                        </li>
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">Jackets & Coats</a>
                                        </li>
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">Polos</a>
                                        </li>
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">Shirts</a>
                                        </li>
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">Shoes</a>
                                        </li>
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">Sweaters & Knits</a>
                                        </li>
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">T-Shirts</a>
                                        </li>
                                        <li class="catalog-filter__submenu-nav-item">
                                            <a href="#" class="catalog-filter__submenu-nav-link">Tanks</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="catalog-filter__submenu-item">
                                    <div class="catalog-filter__submenu-caption">Brand</div>
                                </li>
                                <li class="catalog-filter__submenu-item">
                                    <div class="catalog-filter__submenu-caption">Designer</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="catalog-filter__filter-size product-info">
                        <div class="product-info__select-items catalog-filter__size-filter-wrapper">
                            <div class="product-info__select-item catalog-filter__select-item">Trending now</div>
                            <div class="product-info__select-item catalog-filter__select-item">
                                Size
                                <ul class="catalog-filter__list-check-size">
                                    <li class="catalog-filter__list-check-item">
                                        <input type="checkbox" name="XS" class=""><span>XS</span>
                                    </li>
                                    <li class="catalog-filter__list-check-item">
                                        <input type="checkbox" name="S" class=""><span>S</span>
                                    </li>
                                    <li class="catalog-filter__list-check-item">
                                        <input type="checkbox" name="M" class=""><span>M</span>
                                    </li>
                                    <li class="catalog-filter__list-check-item">
                                        <input type="checkbox" name="L" class=""><span>L</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-info__select-item catalog-filter__select-item">Price</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
})