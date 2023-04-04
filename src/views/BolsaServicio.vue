<template >
    <div class="container">
        <ProveedorCard nombre="Nom1" imagen="http://placekitten.com/200/300">asdad</ProveedorCard>
        <ProveedorCard nombre="Nom1" imagen="http://placekitten.com/200/300">asdad</ProveedorCard>
        <ProveedorCard nombre="Nom1" imagen="http://placekitten.com/200/300">asdad</ProveedorCard>
        <ProveedorCard nombre="Nom1" imagen="http://placekitten.com/200/300">asdad</ProveedorCard>
        <ProveedorCard nombre="Nom1" imagen="http://placekitten.com/200/300">asdad</ProveedorCard>
        <ProveedorCard nombre="Nom1" imagen="http://placekitten.com/200/300">asdad</ProveedorCard>
    </div>
</template>

<script>
import ProveedorCard from '@/components/ProveedorCard.vue';
export default {
    components:{
        ProveedorCard
    }
}

</script>
<style lang="sass" scoped >
    .container
        display: grid
        grid-template-columns: repeat(3, 1fr)
        margin: 0 auto
        justify-items: center
        align-items: center
        
        

</style>