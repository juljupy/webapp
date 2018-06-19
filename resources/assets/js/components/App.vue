<template>
    <div id="app" class="wrapper">
        <NavBar></NavBar>
        <Menu></Menu>
        <Control></Control>
        <Content></Content>
        <Footer></Footer>
    </div>    
</template>

<script>
    import NavBar from './NavBar.vue';
    import Menu from './Menu.vue';
    import Control from './Control.vue';
    import Content from './Content.vue';
    import Footer from './Footer.vue';

    export default {
        name : 'App',

        components: {
            NavBar,
            Menu,
            Control,
            Content,
            Footer
        }
    }
</script>
