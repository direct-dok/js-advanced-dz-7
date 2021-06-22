Vue.component('basket-total-price', {
    props: ['cartpsroducts'], 
    computed: {
        totalPrice: function () {
            if (!this.cartpsroducts.length == 0) {
                let result = 0;
                this.cartpsroducts.forEach(el => result += el.price * el.quantity)
                return result
            } else {
                return 0
            }

        }
    },
    template: `
    <div class="cart__form-adress-total-price">
                <form action="#" class="cart__form-adress">
                    <fieldset>
                        <legend class="cart__form-caption">Shipping adress</legend>
                        <div class="cart__wrapper-field-form">
                            <label class="cart__label-form">Indicate your country</label>
                            <input type="text" name="country" placeholder="Bangladesh" class="cart__input-form">
                        </div>
                        <div class="cart__wrapper-field-form">
                            <label class="cart__label-form">State</label>
                            <input type="text" name="state" placeholder="State" class="cart__input-form">
                        </div>
                        <div class="cart__wrapper-field-form">
                            <label class="cart__label-form">Postcode / Zip</label>
                            <input type="text" name="postcode" placeholder="Postcode / Zip" class="cart__input-form">
                        </div>
                        <div class="cart__wrapper-button-form">
                            <button type="submit" class="cart__submit-button-form">Get a quote</button>
                        </div>
                    </fieldset>
                </form>

                <div class="cart__total-price">
                    <div class="cart__total-info">
                        <div class="cart__sub-total">
                            <span class="cart__sub-property">Sub total</span>
                            <span class="cart__sub-value">{{ totalPrice }} &#36;</span>
                        </div>
                        <div class="cart__grand-total">
                            <span class="cart__grand-property">Grand total</span>
                            <span class="cart__grand-value">{{ totalPrice }} &#36;</span>
                        </div>
                    </div>
                    <button class="cart__checkout-button">Proceed to checkout</button>
                </div>
            </div>
    `
})


Vue.component('basket-form', {
    props: [], 
    template: `
    
    `
})