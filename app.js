const thisUrl = this.document.URL;
console.log(thisUrl);
const app = Vue.createApp({
    // Function
    data() {
        return {
            url: thisUrl,
            showUser: false,
            users: [
                {
                    fullname: 'Kautsar Al Bana',
                    age: 20,
                    img: 'assets/avatar1.jpeg',
                    isFav: true
                },
                {
                    fullname: 'Fharhan Amrin',
                    age: 18,
                    img: 'assets/avatar2.jpeg',
                    isFav: false
                },
                {
                    fullname: 'Tobias Vincencius',
                    age: 19,
                    img: 'assets/avatar3.jpeg',
                    isFav: true
                }
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowUser() {
            this.showUser = !this.showUser
        },
        handleEvent(e, data) {
            // log if event has data
            if (data) {
                console.log(data);
            }
            // event type will always logged
            console.log(e.type);
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(user){
            // console.log(user);
            user.isFav = !user.isFav
        },
    }
})

app.mount('#app');