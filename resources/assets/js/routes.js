import Dashboard from './components/pages/Dashboard.vue';
import Cliente from './components/pages/cliente/Cliente';
import ListaCliente from './components/pages/cliente/Listar.vue';
import CrearCliente from './components/pages/cliente/Crear.vue';
import Eventos from './components/pages/eventos/Eventos.vue';
import ListarEventos from './components/pages/eventos/Listar.vue';

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
        },{
            path: 'crear',
            component: CrearCliente
        }]
    },{
        path : '/eventos',
        component : Eventos,
        children: [{
            path: '/',
            component: ListarEventos
        }]
    }
];