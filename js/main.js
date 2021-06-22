let app = new Vue({
    el: '.app',
    data: {
        products: [],
        cartProduts: []
    },
    methods: {
        getProducts: function(url) { // Получаем товары с сервера
            return fetch(url)
                .then(result => result.json());
        },
        checkStorage: function() {
            if(!localStorage.getItem('products')) {
                this.getProducts('https://raw.githubusercontent.com/direct-dok/json-fetch/main/products.json')
                    .then(res => {
                        localStorage.setItem('products', JSON.stringify(res))
                        this.products = JSON.parse(localStorage.getItem('products'))
                    });
                
            } else {
                this.products = JSON.parse(localStorage.getItem('products'))
            }

            if(!localStorage.getItem('cartProducts')) {
                this.getProducts('https://raw.githubusercontent.com/direct-dok/json-fetch/main/cartProducts.json')
                    .then(res => {
                        localStorage.setItem('cartProducts', JSON.stringify(res))
                        this.cartProduts = JSON.parse(localStorage.getItem('cartProducts'))
                    });
                
            } else {
                this.cartProduts = JSON.parse(localStorage.getItem('cartProducts'))
            }
        },
        getStorageCartProduct: function() { // Получить товары корзины из LocalStorage
            return JSON.parse(localStorage.getItem('cartProducts'))
        },
        StorageCartProduct: function(str) { // Записать обновленный список товаров в LocalStorage
            localStorage.setItem('cartProducts', str)
        },
        addCartProducts: function (idProduct) { // Добавление товара в корзину, с проверкой наличия товара в корзине, если товар есть, то увеличиваем количество товара в массиве
            let cartStorage = JSON.parse(localStorage.getItem('cartProducts'))
            let noProduct = true;
            cartStorage.forEach(el => {
                if (el.id_product == idProduct) {
                    let resultCheck = this.checkItemCart(cartStorage, idProduct);
                    if (resultCheck.length) {
                        cartStorage[resultCheck[1]].quantity++;
                        this.StorageCartProduct(JSON.stringify(cartStorage))
                        this.cartProduts = this.getStorageCartProduct()
                        noProduct = false
                    } 
                }
            });

            if(noProduct) {
                this.products.forEach(el => {
                    if(el.id_product == idProduct) {
                        el.quantity = 1;
                        cartStorage.push(el);
                        this.StorageCartProduct(JSON.stringify(cartStorage))
                        this.cartProduts = this.getStorageCartProduct()
                    }
                })
            }
            console.log(cartStorage)
            console.log(this.cartProduts);
        },
        checkItemCart: function (arr, idProduct) { // Проверяет, есть ли товар в корзине
            let result = [];
            arr.forEach((el, index) => {
                if (el.id_product == idProduct) {
                    result.push(true);
                    result.push(index);
                }
            })
            return result;
        },
        controlCountBasket: function (action, id) {
            let cartStorage = JSON.parse(localStorage.getItem('cartProducts'))

            if (!+action) {
                cartStorage.forEach(el => {
                    if (el.id_product == id) {
                        (el.quantity < 2) ? false: el.quantity--
                    }
                })
                this.StorageCartProduct(JSON.stringify(cartStorage))
                this.cartProduts = this.getStorageCartProduct()
            } else {
                cartStorage.forEach(el => {
                    if (el.id_product == id) {
                        el.quantity++
                    }
                })
                this.StorageCartProduct(JSON.stringify(cartStorage))
                this.cartProduts = this.getStorageCartProduct()
            }
        }, 
        deleteProductBasket: function(id) { // функция для удаления продукта из корзины
            let cartStorage = JSON.parse(localStorage.getItem('cartProducts')) // Получаем список товаров корзины из LocalStorage
            let arrPosition = this.searchElementId(id, cartStorage) // Получаем позицию товара в массиве товаров из LocalStorage
            console.log(cartStorage[arrPosition])
            cartStorage.splice(arrPosition, 1)
            console.log(cartStorage)
            this.StorageCartProduct(JSON.stringify(cartStorage))
            this.cartProduts = this.getStorageCartProduct()
        },
        searchElementId(id, arr) { // Функция хелпер, для нахождения номера элемента в массиве
            let result = null;
            arr.forEach((el, index) => {
                (el.id_product == id) ? result = index : false;
            })
            return result;
        }
    },
    computed: {
        
    },
    mounted() {
        this.checkStorage()
    }
})