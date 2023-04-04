<template >
    <div class="button" :style="{background: color}">
        <router-link to="/" class="red">
            <div class="logo">
                <box-icon class="logo" :type="tipo" :name="nombre" color='#fff' ></box-icon>
            </div> 
           
                <h3 class="texto">{{texto}}</h3>
           
        </router-link> 
    </div>
</template>
<script>

export default {
    props:{
        tipo:{
            type:String,
            default:''
        },
        nombre:{
            type:String,
            default:''
        },
        texto:{
            type: String,
            default:''
        },
        color:{
            type:String,
            default: '#fff'
        }
    }
    
}
</script>

<style lang="sass" scoped>
$blanco: #F6F1F1  
.button
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    width: 40%
    border-radius: 20px
    padding: 0px
    margin-bottom: 5%
    .red
        display: flex
        align-items: center
        justify-content: center
        width: 90%
        .logo
            margin-right: 10px
            transform: scale(1.2)
        .texto
            color: $blanco
            text-decoration: none
        
</style>