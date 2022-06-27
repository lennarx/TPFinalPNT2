<template>
    <div style="width:100%;display: flex;justify-content: center;">
        <div style="width:66%;display: flex;justify-content: center;">
            <div>
                <div>
                    <h1 style="margin-top:5%;margin-bottom:5%;text-align:center">Happy Pets</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia quis sed unde dolores consequuntur hic ducimus, beatae nemo tempora distinctio, dolorem atque earum? Eligendi ipsum odit quo vitae minima doloremque animi, veniam labore earum!</p>
                </div>
                    <button style="width:128px;height:128px;" type="button" class="btn btn-outline-primary">
                        <i style="font-size:64px" class="bi bi-shop"></i>
                    </button>
                    <button style="width:128px;height:128px;" type="button" class="btn btn-outline-primary">
                        <i style="font-size:64px" class="bi bi-cart"></i>
                    </button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../reusable/Navbar.vue'

export default {
    
  name: 'Home',
  components:{
      Navbar
  },
}
</script>