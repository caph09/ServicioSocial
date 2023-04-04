<template >
    <div class="proveedor">
        <img :src="imagen" alt="">
        <div class="proveedor_info">
            <h3>{{ nombre }}</h3>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        imagen:{
            type: String,
            default: ''
        },
        nombre:{
            type: String,
            default: '' 
        },

    }
}
</script>
<style lang="sass">
    .proveedor
        background: #333
        border-radius: 20PX
        color: #fff
        text-align: center
        img
            width: 100%
            border-radius: 20px
</style>