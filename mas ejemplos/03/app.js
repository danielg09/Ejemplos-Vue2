const app = new Vue({
    el: '#app',
    data: {
        titulo : 'Mis frutas preferidas',
        frutas : [
            {nombre: 'Sandia', cantidad: 10},
            {nombre: 'Melon', cantidad: 0},
            {nombre: 'Pera', cantidad: 15}
        ],
        nuevaFruta: '',
        total : 0
    },
    methods: {
        agregarFruta () {
            this.frutas.push(
                {nombre: this.nuevaFruta, cantidad: 0 }
            );
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarTotal () {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return this.total;
        }

    } 

})