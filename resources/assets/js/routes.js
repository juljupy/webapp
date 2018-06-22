import Dashboard from './components/pages/Dashboard.vue';
import Cliente from './components/pages/cliente/Cliente';
import ListaCliente from './components/pages/cliente/Listar';

export default [
    {
        path : '/',
        name : 'Dashboard',
        component: Dashboard
    },{
        path : '/cliente',
        component : Cliente,
        children: [{
            path: '/',
            component: ListaCliente
        }]
    }
];