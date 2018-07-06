<template>
    <router-view></router-view>
</template>

<script>
export default {
    name : 'Content',

    mounted(){
        // setTimeout(
        //     () => {
        //         this.$loadScript('dist/js/pages/dashboard2.js')
        //         .then(() => { console.log('Script loaded from component...') })
        //         .catch(() => {});
        //     }
        // , 2000)
    }
}
</script>
