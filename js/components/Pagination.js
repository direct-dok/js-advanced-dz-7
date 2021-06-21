Vue.component('pagination-shop', {
    template: `
    <section class="catalog-pagination">
            <div class="width-1600">
                <div class="catalog-pagination__wrapper">
                    <ul class="catalog-pagination__items">
                        <li class="catalog-pagination__item">
                            <span
                                class="catalog-pagination__item-number catalog-pagination__item-number--active">1</span>
                        </li>
                        <li class="catalog-pagination__item">
                            <span class="catalog-pagination__item-number">2</span>
                        </li>
                        <li class="catalog-pagination__item">
                            <span class="catalog-pagination__item-number">3</span>
                        </li>
                        <li class="catalog-pagination__item">
                            <span class="catalog-pagination__item-number">4</span>
                        </li>
                        <li class="catalog-pagination__item">
                            <span class="catalog-pagination__item-number">5</span>
                        </li>
                        <li class="catalog-pagination__item">
                            <span class="catalog-pagination__item-number">6</span>
                        </li>
                        <li class="catalog-pagination__item catalog-pagination__item--dotted">
                            <span class="catalog-pagination__item-number">.....</span>
                        </li>
                        <li class="catalog-pagination__item">
                            <span class="catalog-pagination__item-number">20</span>
                        </li>
                    </ul>
                    <div class="catalog-pagination__arrow catalog-pagination__arrow--left">
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z"
                                fill="black" />
                        </svg>
                    </div>
                    <div class="catalog-pagination__arrow catalog-pagination__arrow--right">
                        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
                                fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    `
})