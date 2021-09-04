const app = Vue.createApp({
    data() {
        return {
            product: 'Köleler',
            description: 'Her yaştan her iş yapan köle',
            image: './assets/images/kole1.jpg',
            url: 'https://alpguler.gq/onlyfans.html',
            available: 0,
            discount: true,
            experiences: ['8 yıl tecrübe', 'İtalyan ve Türk Mutfağı', 'Türkçe, Almanca ve Azerice konuşabilme', 'Tam 200 cümle kurabiliyor'],
            variants: [
                { id: 2234, age: '23' },
                { id: 2235, age: '21' }
              ],
            furryStyles: ['Neko 🐈', 'Kitsune 🦊', 'Canine 🐕', 'Dragon 🐉'],
        }
    }
})