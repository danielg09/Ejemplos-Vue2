const app = new Vue({
    el: '#app',
    data: {
        titulo : 'Mis frutas preferidas',
        frutas : [
            {nombre: 'Sandia', cantidad: 10},
            {nombre: 'Melon', cantidad: 0},
            {nombre: 'Pera', cantidad: 15}
        ],
        nuevaFruta: ''
    },
    methods: {
        agregarFruta () {
            this.frutas.push(
                {nombre: this.nuevaFruta, cantidad: 0 }
            )
            this.nuevaFruta = ''
        }
    } 

})