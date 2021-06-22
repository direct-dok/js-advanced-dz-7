Vue.component('pagename', {
    props: ['name'], 
    template: `
    <section class="name-page">
            <div class="name-page__block-caption width-1600">
                <h1 class="name-page__main-caption">{{ name }}</h1>
            </div>
        </section>
    `
})