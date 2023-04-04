<template >
  
  <div class="app">
    <header>
      <nav>
        <h1>Logotipo</h1>
        <div class="login">
          <router-link to="/login" class="enlace">
            <h3>Iniciar Sesion</h3>
          </router-link> 
          <router-link to="/login" class="enlace">
            <h3>Registrarse</h3>
          </router-link> 
        </div>
      </nav>
    </header>

    <router-view class="content"></router-view>

    <nav class="navegacion">
      <router-link to="/" class="enlace">
        <box-icon name='home' color='#f6f1f1' ></box-icon>
      </router-link>

      <router-link to="/perfil" class="enlace">
        <box-icon name='user' color='#f6f1f1' ></box-icon>
      </router-link> 

      <router-link to="/bolsa" class="enlace">
        <box-icon name='briefcase' type='solid' color='#f6f1f1' ></box-icon>
      </router-link> 
      <router-link to="/dashboard" class="enlace">
        <box-icon name='dashboard' type='solid' color='#f6f1f1' ></box-icon>
      </router-link> 
      
    </nav> 
  </div>
</template>
<script>
import 'boxicons'

export default {
  
}
</script>
<style lang="sass">
  $color-secundario: #146C94
  $blanco: #F6F1F1
  .app
    font-family: Arial, Helvetica, sans-serif
    margin: 0 auto
    box-sizing: border-box
    margin: 0
    padding: 0
    height: 90%
    position: relative
    h1 
      color: white
    header
      width: 100%
      height: 70px
      display: flex
      justify-content: space-between
      margin: 0 auto
      background: #222
      nav
        display: flex
        width: 80%
        margin: 0 auto
        justify-content: space-between
      .login
        width: 40%
        display: flex
        align-items: center
        .enlace
          text-decoration: none
          color: $blanco
          text-align: center
          text-justify: distribute
          margin-right: 10px
          padding: 0 3px
          transition: all 200ms
          &:hover
            background: #444
            border-radius: 5px
            transform: scale(1.05)
           

    .content
      display: flex
      flex-direction: column
      width: 90%
      height: 90% 
      margin: 0 auto
    .navegacion
      display: flex
      width: 50%
      height: 10%
      margin: 0 auto
      position: fixed 0
      border-top-left-radius:  30px 
      border-top-right-radius:   30px 
      border-bottom-left-radius: 10px
      border-bottom-right-radius: 10px
      align-items: center
      background: $color-secundario
      .enlace
        display: block
        padding: 10px
        margin: 3%
        background: $color-secundario
        text-decoration: none
        width: 60%
        text-align: center
        border-radius: 15px
        transition: all 400ms 
        
        &:hover
          background: #19A7CE
          width: 100%
          img
            background: $blanco

        
    
    
</style>