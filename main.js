const app = Vue.createApp({
    data() {
        return {
            product: 'Köle',
            brand: 'KOLEMDES',
            description: 'Her yaştan her iş yapan köle',
            selectedProduct: 0,
            url: 'https://alpguler.gq/onlyfans.html',
            cart: 0,
            experiences: ['8 yıl tecrübe', 'İtalyan ve Türk Mutfağı', 'Türkçe, Almanca ve Azerice konuşabilme', 'Tam 200 cümle kurabiliyor'],
            variants: [
                { id: 2234, name:'Alp' , hairColor: '#ffd09e', onSale:true , inStock:5 , image: './assets/images/kole1.jpg' },
                { id: 2235, name:'Vin' , hairColor: '#bf0016',onSale:true , inStock:3 , image: './assets/images/kole2.jpg' },
                { id: 2236, name:'Erhan' ,hairColor: 'pink', onSale:false ,inStock:7 , image: './assets/images/kole3.jpg' },
            ],
            furryStyles: ['Neko 🐈', 'Kitsune 🦊', 'Canine 🐕', 'Dragon 🐉'],
        }
    },
    methods: {
        addToCart() {
            this.cart++
            this.available--
        },
        updateProduct(index) {
            this.selectedProduct = index
            console.log(index)
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart--
                this.available++
            }
        }
    },
    computed:{
        title(){
            return this.brand + ' ' +  this.product
        },
        image(){
            return this.variants[this.selectedProduct].image
        },
        available(){
            return this.variants[this.selectedProduct].inStock
        },
        onSale(){
            if(this.variants[this.selectedProduct].onSale){
                return this.product + ' ' + this.brand + ' ' + this.variants[this.selectedProduct].name + ' indirimde !'
            }
            return null
        }
    }
})