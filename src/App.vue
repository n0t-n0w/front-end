<template>    
    <NavBar/>
    <router-view></router-view>
    <Footer/>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"

export default {
    
    components: {
        NavBar, Footer
    },
    data() {
        return {
           
        }
    }
}

</script>

<style>

@font-face {
  font-family: "YagiUhfNo2";
  src: local("YagiUhfNo2"),
   url(./fonts/YagiUhfNo2.otf) format("truetype");
}

:root {
  --blue-color: #519bef;
  --dark-blue-color: #2e69ad;
  --green-color: #4dd698;
  --dark-green-color: #2d9465;
}

* {
    margin: 0;
    padding: 0;
        font-family: sans-serif;

    
}

html {

    width: 100%;
    max-width: 100%;
}

body {
    width: 100%;
    max-width: 100%;
    height: 1200px;
}

.center-feed {
    width: 70%;
    margin: 230px auto;
    min-height: 300px;

}
</style>