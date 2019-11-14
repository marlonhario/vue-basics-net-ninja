// var data = {
//     name: 'Ambot'
// }


Vue.component('greeting', {
    template: '<p>Hey there, I am {{name}} . <button v-on:click="changeName">Change name</button></p>',
    data: function() {
        return {
            name: 'Oirah'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Hario';
        }
    }
});

new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        named: '',
        aged: '',
        available: false,
        nearby: false,
        error: false,
        success: false,
        a: 0,
        b: 0,
        job: 'Ninja',
        website: 'https://www.facebook.com/',
        websiteTag: '<a href="https://www.facebook.com">The Net Ninja Website</a>',
        age: 25,
        x: 0,
        y: 0,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Yoshi', age: 35},
            {name: 'Ken', age: 55},
        ],
        output: "Your fav food"
    },
    methods: {
        greet: function(time='Maawning') {
            return 'Good ' + time + ' ' + this.name;
        },
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(dc) {
            this.age -= dc; 
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You clicked me');
        },
        logName: function() {
            console.log('You enter your name.');
        },
        logAge: function() {
            console.log('You enter your age.');
        },
        readRefs: function() {
            console.log(this.$refs);
            this.output = this.$refs.inputref.value;
        }
        // addToA: function() {    
        //     console.log('addA');
        //     return this.a + this.age;
        // },
        // addToB: function() {
        //     console.log('addB');
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA: function() {    
            console.log('addA');
            return this.a + this.age;
        },
        addToB: function() {
            console.log('addB');
            return this.b + this.age;
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue app one'
    },
    methods: {
       
    },
    computed: {
       greet: function() {
            return 'Hello form app one';           
       }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue app two'
    },
    methods: {
        changeTitle: function() {
            one.title = "title changed one";
        }
    },
    computed: {
        greet: function() {
            return 'Hello form app two';           
        }
    }
});

two.title = "Changed frm outside";


var two = new Vue({
    el: '#vue-app-three'
});

var two = new Vue({
    el: '#vue-app-four'
});