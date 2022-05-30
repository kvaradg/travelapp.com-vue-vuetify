<template>
  <div>
    <v-app-bar
      dense
      dark
    
      height="100px"
      src="../assets/navbarpic.jpg"
    >
      <v-app-bar-nav-icon class=" white--text"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-h6 white--text">Travel App</v-toolbar-title>
      <v-spacer></v-spacer>
       <router-link to="/"><v-toolbar-title class="app-title">
         <v-btn>Travelling Form</v-btn>
       </v-toolbar-title></router-link>
       <router-link to="/alldetails"> <v-toolbar-title class="app-title">
         <v-btn>All Travellers Info</v-btn>
       </v-toolbar-title></router-link>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon class=" white--text">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon class=" white--text">mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class=" white--text"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    
  </div>

</template>

<script>
export default {

}
</script>

<style>
.app-title{
    margin-left: 10px;
    margin-right: 10px;
    color: aliceblue;
    /* font-weight: bold; */
}
</style>