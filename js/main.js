let app = new Vue({
    el: '.app', 
    data: {
        products: [],
        cartProduts: [], 
        countCartProducts: 0, 
        showNavigation: false
    }, 
    methods: {
        getProducts: function(url) { // Получаем товары с сервера
            return fetch(url)
                .then(result => result.json());
        },
        addCartProducts: function(idProduct) { // Добавление товара в корзину, с проверкой наличия товара в корзине, если товар есть, то увеличиваем количество товара в массиве
            this.products.forEach(el => {
                if(el.id_product == idProduct) {
                    let resultCheck = this.checkItemCart(idProduct);
                    if(resultCheck.length) {
                        this.cartProduts[resultCheck[1]].quantity++;
                    } else {
                        el.quantity = 1;
                        this.cartProduts.push(el);
                        this.countGoods();
                    }
                } 
            });

            console.log(this.cartProduts);
        }, 
        checkItemCart: function(idProduct) { // Проверяет, есть ли товар в корзине
            let result = [];
            this.cartProduts.forEach((el, index) => {
                if(el.id_product == idProduct) {
                    result.push(true);
                    result.push(index);
                }
            })
            return result;
        },
        countGoods: function() { // Считаем количество уникальных товаров в корзине
            this.countCartProducts = this.cartProduts.length;
        }
    }, 
    mounted() {
        this.getProducts('https://raw.githubusercontent.com/direct-dok/json-fetch/main/products.json')
            .then(res => this.products = res);
    }
})
