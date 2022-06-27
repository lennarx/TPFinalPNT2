<template>
    <div style="width:100%;display: flex;justify-content: center;">
        <div style="width:66%;display: flex;justify-content: center;">
            <div>
                <div>
                    <h1 style="margin-top:5%;margin-bottom:5%;text-align:center">Happy Pets</h1>
                    <p> El amor de tu mascota no tiene precio, los productos para hacerlo feliz si.</p>
                    <p> Encontra todo lo que buscas en nuestra tienda!</p>  
                </div>
                    <button style="width:128px;height:128px;" type="button" class="btn btn-outline-primary">
                        <router-link class="home-link active" to="/marketplace"> <i style="font-size:64px" class="bi bi-shop"></i> </router-link>
                    </button>

                    <button style="width:128px;height:128px;" type="button" class="btn btn-outline-primary">
                        <router-link class="home-link active" to="/cart"> <i style="font-size:64px" class="bi bi-cart"></i></router-link>
                
                    </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
  name: 'Home-item',
 
}
</script>