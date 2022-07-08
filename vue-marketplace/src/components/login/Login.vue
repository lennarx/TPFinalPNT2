<template>
    <div class="container">
        <div class="row justify-content-center" style=" margin-left: 15%; margin-right: 10%;">
            <div class="col-6">
                <form v-on:submit.prevent="onSubmit" style="width: 25%%">
                    <div style="display: block; margin-top: 10rem">
                        <label for="user" class="form-label" style="display:contents">
                            Usuario    
                            <input id="user" type ="text" class="form-control" style="width: 70%" v-model="this.usuario.name"/>
                        </label>
                        <label for="password" class="form-label" style="display:contents">
                            Contraseña
                            <input id="password" type="password" class="form-control" style="width: 70%" v-model="this.usuario.password"/>
                        </label>
                        <div class="d-grip gap-2" style="margin-top: 2%">
                            <input class="btn btn-info text-white" type="submit" value="Login"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import router from '@/router'

export default {
    name: "Login",
    data(){
        return{
            usuario: {
                name : null,
                password : null
            },
            logged : 0,
            role: "",
            usuarios : []
        }
    },
    methods: {        
        onSubmit(){
            const usuarioLogueado = this.usuarios.find(usuario => usuario.name === this.usuario.name && usuario.password === this.usuario.password)
            if(usuarioLogueado){
                this.logged = 1
                this.role = usuarioLogueado.role
                sessionStorage.logged = this.logged
                sessionStorage.role = this.role
                router.push({path:'/home', replace: true})
            }            
        }
    },
    created(){       
       axios.get("https://625df5ed6c48e8761ba34b95.mockapi.io/api/v1/usuarios")
            .then(res => {
                      this.usuarios = res.data
                     }).catch(error => {
                        console.log(error)
                        })
    }
}
</script>
