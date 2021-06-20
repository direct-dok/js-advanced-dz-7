let app = new Vue({
    el: '.app',
    data: {
        products: [],
        cartProduts: [
            {
                description: "A teen manga series by Eiichiro Oda, serialized in Weekly Shonen Jump (Shueisha).",
                id_product: 126,
                img: "https://a.lmcdn.ru/img600x866/P/U/PU053EMMJIW8_14094290_1_v2_2x.jpg",
                price: 3140,
                product_name: "Костюм спортивный ftblPLAY Tracksuit PUMA",
                quantity: 4
            },
            {
                description: "Evolved design ideal for sports or everyday wear. Outstanding quick-dry capability while remaining smooth to the touch.",
                id_product: 127,
                img: "https://a.lmcdn.ru/img600x866/M/P/MP002XM1HLCH_14423201_1_v1_2x.jpg",
                price: 1299,
                product_name: "Рубашка Zolla",
                quantity: 1
            },
            {
                description: "Combines a natural texture with comfort. Updated this T-shirt with details that make it even more flattering.UPF40",
                id_product: 130,
                img: "https://a.lmcdn.ru/img600x866/M/P/MP002XM249D2_8275579_1_v2.jpeg",
                price: 2990,
                product_name: "Брюки спортивные Jets",
                quantity: 1
            }, 
            {
                description: "Simple and versatile. Stays dry, giving it a comfortable and dry feeling against the skin.",
                id_product: 128,
                img: "https://a.lmcdn.ru/img600x866/M/P/MP002XM1ZROK_12855842_1_v1_2x.jpg",
                price: 2990,
                product_name: "Рубашка Bawer",
                quantity: 1
            }
        ],
        // cartProduts: [], 
        // countCartProducts: 0, 
        showNavigation: false
        // totalPrice: 0
    },
    methods: {
        getProducts: function (url) { // Получаем товары с сервера
            return fetch(url)
                .then(result => result.json());
        },
        addCartProducts: function (idProduct) { // Добавление товара в корзину, с проверкой наличия товара в корзине, если товар есть, то увеличиваем количество товара в массиве
            this.products.forEach(el => {
                if (el.id_product == idProduct) {
                    let resultCheck = this.checkItemCart(idProduct);
                    if (resultCheck.length) {
                        this.cartProduts[resultCheck[1]].quantity++;
                    } else {
                        el.quantity = 1;
                        this.cartProduts.push(el);
                        // this.countCartProducts = this.cartProduts.length;
                        // this.countGoods();
                    }
                }
            });

            console.log(this.cartProduts);
        },
        checkItemCart: function (idProduct) { // Проверяет, есть ли товар в корзине
            let result = [];
            this.cartProduts.forEach((el, index) => {
                if (el.id_product == idProduct) {
                    result.push(true);
                    result.push(index);
                }
            })
            return result;
        },
        controlCountBasket: function (action, id) {
            if (!+action) {
                this.cartProduts.forEach(el => {
                    if (el.id_product == id) {
                        (el.quantity < 2) ? false: el.quantity--
                    }
                })
            } else {
                this.cartProduts.forEach(el => {
                    if (el.id_product == id) {
                        el.quantity++
                    }
                })
            }
        }, 
        deleteProductBasket: function(id) { // функция для удаления продукта из корзины
            console.log(id)
            let arrPosition = this.searchElementId(id, this.cartProduts)
            this.cartProduts.splice(arrPosition, 1)
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
        countProductsBasket: function () {
            return this.cartProduts.length;
        },
        totalPrice: function () {
            console.log(this.cartProduts)
            if (!this.cartProduts.length == 0) {
                let result = 0;
                this.cartProduts.forEach(el => result += el.price * el.quantity)
                return result
            } else {
                return 0
            }

        }
    },
    mounted() {
        this.getProducts('https://raw.githubusercontent.com/direct-dok/json-fetch/main/products.json')
            .then(res => this.products = res);
    }
})