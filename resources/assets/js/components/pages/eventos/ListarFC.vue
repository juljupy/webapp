<template>
    <div class="col-md-12">
        <div class="card card-primary">
            <div class="card-body p-0">
                <full-calendar :events="events" :config="{locale: 'es'}"></full-calendar>
            </div>
        </div>
    </div>
</template>

<script>
    import 'fullcalendar/dist/locale/es'
    export default {
        data () {
            return {
                events: []
            }
        },

        mounted(){
            const me = this;

            axios.get('/eventos')
                .then((response) => {
                    response.data.data.forEach( (item) => {
                        me.events.push({
                            title: item.titulo,
                            start: item.fecha_inicio,
                            end: item.fecha_fin,
                            desc: item.descripcion
                        });
                    });
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