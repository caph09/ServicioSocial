<template >
    <div>
        <div class="container">
            <div class="head">
                <h1 class="titulo">Iniciar Sesion</h1>

            </div>
            <form action="">
                <input type="text" placeholder="Usuario">
                <input type="text" placeholder="Contraseña">
                
                
                <button>
                    <router-link to="/" class="enlace">
                        <box-icon name='log-in' color='#f6f1f1' ></box-icon>
                    </router-link> 
                </button>
                <hr>
                <div class="redes">
                    <BotonRedSocial color="#ea4335" tipo="logo" nombre="google" texto="Continuar con Google"></BotonRedSocial>

                    <BotonRedSocial color="#1877f2" tipo="logo" nombre="facebook" texto="Continuar con Facebook"></BotonRedSocial>

                    <BotonRedSocial color="#14171a" tipo="logo" nombre="twitter" texto="Continuar con Twitter"></BotonRedSocial>
                    
                   
                </div>
                
            </form>
        </div>
    </div>
</template>
<script>
import BotonRedSocial from '@/components/BotonRedSocial.vue';
export default {
    components:{
        BotonRedSocial
    }
}
</script>
<style lang="sass" scoped>
    $color-secundario: #146C94
    $blanco: #F6F1F1  
    .container
        width: 70%
        margin: auto auto
        height: 90%
        box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2)
        border-radius: 20px
        .head
            background-color: $color-secundario
            width: 100%
            height: 10%
            border-bottom-left-radius: 50%
            border-top-right-radius: 20px
            border-top-left-radius: 20px
            text-align: center
            margin-bottom: 30px
            .titulo
                height: 100%
                padding-top: 10px
                margin: auto 0
                color: $blanco   
        form
            width: 95%
            display: flex
            flex-direction: column
            margin: 0 auto
            input
                width: 80%
                margin: 0 auto
                border-radius: 10px
                padding: 10px
                border: 1px solid #eee
                background: #eee
                margin-bottom: 20px
                outline: none
                &:focus    
                    border: 2px  solid  $color-secundario  
                    
                &:hover
                    transform: scale(1.05)
            button
                background: $color-secundario
                width: 30%
                margin: 0 auto
                border-radius: 20px
                border: none
                padding: 10px 0
                margin-bottom: 10px
            hr
                width: 90%
            .redes
                display: flex
                flex-direction: column
                margin: 0 auto
                width: 80%
                margin-top: 20px
                align-items: center
                

                        

                                 
</style>