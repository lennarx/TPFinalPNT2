<template>
    <div class="container">
        <div class="row justify-content-center" style="margin-top: 12%; margin-left: 15%; padding-block: 2%; margin-right: 10%;">
            <div class="col-6">
                <form v-on:submit.prevent="onSubmit" style="width: 25%%">
                    <div style="display: block">
                        <label for="user" class="form-label" style="display:contents">
                            Usuario    
                            <input id="user" type ="text" class="form-control" style="width: 70%"/>
                        </label>
                        <label for="password" class="form-label" style="display:contents">
                            Contraseña
                            <input id="password" type="password" class="form-control" style="width: 70%"/>
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
import { axios } from 'axios'
import router from '@/router'

export default {
    name: "Login",
    methods: {
        onSubmit(){
            router.push({path:'/home', replace: true})
            router.replace({path: '/home'})
        }
    }
}
</script>
