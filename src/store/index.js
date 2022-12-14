import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [
            {
                id: 1,
                name: "Canadian Logo Patch Cap - Blue",
                price: 210,
                shortdesc: "Canadian logo patch cap",
                url: "images/canadian_logo_cap.png"
            },
            {
                id: 2,
                name: "Tigers Print GG Supreme baseball cap - Neutrals",
                price: 350,
                shortdesc: "Tiger Print Supreme",
                url: "images/baseball_cap.png"
            },
            {
                id: 3,
                name: "Watch",
                price: 2500,
                shortdesc: "Elegance built in",
                url: "images/watch.png"
            },
            {
                id: 4,
                name: "adidas-Sneakers",
                price: 80,
                shortdesc: "Cool, light, Clean",
                url: "images/Sneakers.png"
            },
            {
                id: 5,
                name: "Men's Leather Clutch Bag",
                price: 750,
                shortdesc: "Fabulous, Comfortable",
                url: "images/clutch_bag.png"
            },
            {
                id: 6,
                name: "Gucci Double G snake buckle belt - Black",
                price: 690,
                shortdesc: "Neet, Awesome",
                url: "images/belt.png"
            }
        ],
        cart: []
    },

    mutations: {
        addCartItem(state, item) {
            item.quantity = 1;
            state.cart.push(item);
        },

        updateCartItem(state, updatedItem) {
            state.cart = state.cart.map((cartItem) => {
                if (cartItem.id == updatedItem.id) {
                    return updatedItem;
                }

                return cartItem;
            })
        },

        removeCartItem(state, item) {
            state.cart = state.cart.filter((cartItem) => {
                return cartItem.id != item.id;
            })
        }
    }
})