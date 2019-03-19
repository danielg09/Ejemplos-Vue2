Vue.component('saludo', {
    template: //html
   `
    <div>    
        <h1>{{saludo}}</h1>
        <h3>flksdj</h3>
    </div>
    `,
    data () {
        return {
            saludo: 'Hola desde componente'
        }
    }
})