<template>
    <div class="col-md-12">
        <!-- general form elements -->
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Crear cliente</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form ref="form" role="form" @submit.prevent="submit">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="nombre">Nombre</label>
                                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingrese nombre" :value="formitems.nombre" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="apellido">Apellido</label>
                                <input type="text" class="form-control" id="apellido" name="apellido" placeholder="Ingrese apellido" :value="formitems.apellido" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Ingrese email" :value="formitems.email" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="telefono">Teléfono</label>
                                <input type="text" class="form-control" id="telefono" name="telefono" placeholder="Ingrese teléfono" :value="formitems.telefono" required>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                    <div class="float-right">
                        <button type="submit" class="btn btn-primary"><i class="fa fa-save"></i> Guardar</button>
                        <router-link to="/cliente" class="btn btn-danger"><i class="fa fa-times"></i> Cancelar</router-link>
                    </div>
                </div>
            </form>
        </div>
        <!-- /.card -->
    </div>
</template>

<script>
export default {
    name : 'Crear',

    data() {
        return {
            formitems : {
                nombre: null,
                apellido: null,
                email: null,
                telefono: null
            }
        }
    },

    methods : {
        submit(){
            const me = this;
            const form = me.$refs.form;

            console.log(formSerialize(form, {hash: true}));

            console.log('submiting form....');
        }
    }
}
</script>
