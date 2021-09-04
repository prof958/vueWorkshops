const app = Vue.createApp({
    data() {
        return {
            product: 'Köleler',
            description: 'Her yaştan her iş yapan köle',
            image: './assets/images/kole1.jpg',
            url: 'https://alpguler.gq/onlyfans.html',
            available: 0,
            discount: true,
            cart: 0,
            experiences: ['8 yıl tecrübe', 'İtalyan ve Türk Mutfağı', 'Türkçe, Almanca ve Azerice konuşabilme', 'Tam 200 cümle kurabiliyor'],
            variants: [
                { id: 2234, hairColor: '#ffd09e', image: './assets/images/kole1.jpg' },
                { id: 2235, hairColor: '#bf0016', image: './assets/images/kole2.jpg' }
            ],
            furryStyles: ['Neko 🐈', 'Kitsune 🦊', 'Canine 🐕', 'Dragon 🐉'],
        }
    },
    methods: {
        addToCart() {
            this.cart++
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart--
            }
        }
    }
})