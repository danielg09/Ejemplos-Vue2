const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'hola soy daniel',
        contador: 0
    },
    computed:{
        invertido () {
            return this.mensaje.split('').reverse().join('');
        },
        color () {
            return {
                'bg-success' : this.contador >0 && this.contador <=33,
                'bg-warning' : this.contador  >= 34 && this.contador <=66,
                'bg-danger'  : this.contador >= 67 && this.contador <=100
            }
        }
    }

})