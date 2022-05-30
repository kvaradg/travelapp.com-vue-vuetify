<template>
  <v-app>
     <NavbarComponent/>
  <v-container>
          <router-view></router-view>
      </v-container>
      <v-bottom-navigation
    :value="value"
    color="teal"
    grow
  >
    <v-btn>
      <span class="black--text">Recents</span>

      <v-icon class="black--text">mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span class="black--text">Favorites</span>

      <v-icon class="black--text"> mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span class="black--text">Nearby</span>

      <v-icon class="black--text">mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>

</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
export default {
    data() {
        return {};
    },
    components: { NavbarComponent}
}
</script>

<style>

</style>