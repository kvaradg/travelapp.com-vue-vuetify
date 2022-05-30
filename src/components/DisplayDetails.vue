<template>
  <div>
    <h1>All Travellers Details</h1>

    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      >
      </v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="allData" :search="search">
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.age }}</td>
          <td>{{ row.item.gender }}</td>
          <td>{{ row.item.dob }}</td>
          <td>{{ row.item.address }}</td>
          <td>{{ row.item.city }}</td>
          <td>{{ row.item.state }}</td>
          <td>{{ row.item.country }}</td>
          <td>{{ row.item.destination }}</td>
          <td><DialogComponent :send="row.item.id"  /></td>
          <td>
            <v-icon @click="edit(row.item.id)">mdi-pencil</v-icon>
          </td>
          <td>
            <router-link to="/"
              ><v-icon @click="remove(row.item.id)"
                >mdi-delete</v-icon
              ></router-link
            >
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
import DialogComponent from "./DialogComponent.vue";
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          filterable: true,
          value: "name",
        },
        { text: "Age", value: "age" },
        { text: "Gender", value: "gender" },
        { text: "Dob", value: "dob" },
        { text: "Address", value: "address" },
        { text: "City", value: "city" },
        { text: "State", value: "state" },
        { text: "Country", value: "country" },
        { text: "Destination", value: "destination" },
        { text: "Show", value: "show" },

        { text: "Actions", value: "actions", sortable: false },
      ],
      allData: [{}],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/travellers")
        .then(response => {
          console.log(response.data), (this.allData = response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    edit(num) {
      console.log(num);
      this.$router.push(`/edit-details/${num}`);
    },
    remove(num) {
      axios.delete(`http://localhost:3000/travellers/${num}`);
      alert("Data Deleted");
    },
  },
  components: { DialogComponent },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
