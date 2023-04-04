<template >
    <div class="container">
        <nav class="sidebar">
            <div class="imagen">
                <img src="http://placekitten.com/200/300" alt="">
            </div>
            <h2>Nombre</h2>
            <div class="usuario_info">
                Datos del usuario
            </div>
        </nav>
        <div class="menu">
            <OperacionesCard class="operaciones" color="#146C94" texto="Operacion 1" nombre="notepad" tipo="solid"></OperacionesCard>
            <OperacionesCard class="operaciones" color="#F66927" texto="Operacion 2" nombre="notepad" tipo="solid"></OperacionesCard>
            <OperacionesCard class="operaciones" color="#146C94" texto="Operacion 3" nombre="notepad" tipo="solid"></OperacionesCard>
            <OperacionesCard class="operaciones" color="#146C94" texto="Operacion 4" nombre="notepad" tipo="solid"></OperacionesCard>
            <OperacionesCard class="operaciones"  color="#F66927" texto="Operacion 5" nombre="notepad" tipo="solid"></OperacionesCard>
            <OperacionesCard class="operaciones" color="#146C94" texto="Operacion 6" nombre="notepad" tipo="solid"></OperacionesCard>
        </div>
    </div>
</template>

<script>
import OperacionesCard from '@/components/OperacionesCard.vue';
export default {
    components:{
        OperacionesCard
    }
}
</script>
<style lang="sass" scoped>
    $color-secundario: #146C94
    .container
        box-sizing: border-box
        display: grid
        width: 100%
        grid-template-columns: 20% 80%
        
        .sidebar
            display: flex
            flex-direction: column
            width: 100%
            background: #222
            color: #fff
            align-items: center
            border-bottom-right-radius: 20px
            .imagen
                margin: 0 auto
                margin-top: 10px
                border-radius: 20px
        
                img
                    border-radius: 20px
                    width: 95%
                    
        .menu
            display: grid
            grid-template-columns: repeat(3, 1fr)
            align-content: space-evenly
            width: 80%
            margin: 0 auto
            align-items: center
            .operaciones
                cursor: pointer
                transition: all 200ms
                &:hover
                    transform: scale(1.05)
                    border: 1px solid #000
       

</style>