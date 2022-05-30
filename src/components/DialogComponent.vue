<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          @click="popUpData"
        >
          Details
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Name: {{ poppedData.name }}
        </v-card-title>
        <v-card-text>
          <v-list class="list-items">
            Age:{{ poppedData.age }}
            <v-divider class="divider"></v-divider>
            Gender: {{ poppedData.gender }}
            <v-divider class="divider"></v-divider>
            DOB: {{ poppedData.dob }}
            <v-divider class="divider"></v-divider>
            Address: {{ poppedData.address }}

            <v-divider class="divider"></v-divider>
            City: {{ poppedData.city }}

            <v-divider class="divider"></v-divider>
            State: {{ poppedData.state }}

            <v-divider class="divider"> </v-divider>
            Country: {{ poppedData.country }}

            <v-divider class="divider"></v-divider>
            Destination: {{ poppedData.destination }}
            <v-divider class="divider"></v-divider>
          </v-list>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="black white--text" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["send"],
  data() {
    return {
      dialog: false,
      poppedData: [{}],
    };
  },
  methods: {
    popUpData() {
      axios
        .get(`http://localhost:3000/travellers/${this.send}`)
        .then(response => {
          console.log(response.data);
          this.poppedData = response.data;
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<style scoped>
.list-items {
  margin: 20px;
}
.divider {
  margin: 10px;
}
</style>
>
