<template >
    <div class="operacion" :style="{background: color}">
        <box-icon class="logo" :type="tipo" :name="nombre" color='#fff' ></box-icon>
        <h3>{{texto}}</h3>
    </div>
</template>
<script>
export default {
    props:{
        texto:{
            type: String,
            default: ''
        },
        tipo:{
            type:String,
            default:''
        },
        color:{
            type:String,
            default:''
        },
        nombre:{
            type:String,
            default:''
        }
    }
}
</script>
<style lang="sass" scoped>
    $color-secundario: #146C94
    .operacion
        display: flex
        width: 150px
        height: 150px
        flex-direction: column
        border-radius: 10px
        align-items: center
        justify-content: center
        box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2)
        h3
            color: #fff
        .log
            margin: 0 auto
           
        

</style>