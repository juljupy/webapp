<template>
    <div class="col-md-12">
        <div class="card card-primary">
            <div class="card-body p-0">
                <vue-event-calendar :events="events"></vue-event-calendar>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                events: [],
                demoEvents: [{
                    date: '2018/07/06', // Required
                    title: 'Foo' // Required
                }, {
                    date: '2018/07/07',
                    title: 'Bar',
                    desc: 'description',
                    customClass: 'disabled highlight' // Custom classes to an calendar cell
                }]
            }
        },

        mounted(){
            const me = this;

            axios.get('/eventos')
                .then((response) => {
                    response.data.data.forEach( (item) => {
                        me.events.push({
                            title: item.titulo,
                            date: item.fecha_inicio_vc,
                            desc: item.descripcion
                        });
                    });
                    // for(let i of response.data.data){
                    //     me.events.push({
                    //         title: i.titulo,
                    //         date: i.fecha_inicio,
                    //         desc: i.descripcion
                    //     });
                    // }
                    console.log(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>

</style>