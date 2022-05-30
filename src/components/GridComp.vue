<template>
  <div>
      <h2>Grid-1</h2>
         <v-container>
            <!-- <v-row v-if="$vuetify.breakpoint.smAndDown">
              <v-col cols="8" >
                  <v-card class="pa-2 d-flex flex-column" height="400px" color="purple" outlined dark tile elevation="6">
                      item 1
                  </v-card>
              </v-col>
              <v-col cols="4">
                  <v-card class="pa-2" height="50%" color="orange"  outlined dark tile elevation="6">
                      item 2
                  </v-card>
                 <v-card class="pa-2" height="50%" color="blue"  outlined dark tile elevation="6">
                      item 3
                  </v-card>
              </v-col>
          </v-row> -->


              <v-row>
              <v-col cols="8" md="6" lg="8">
                  <v-card class="pa-2" height="400px" color="purple" outlined dark tile elevation="6">
                      item 1
                  </v-card>
              </v-col>
            
              <v-col cols="4" md="6" lg="4">
                  <v-card class="pa-2" height="50%" color="orange"  outlined dark tile elevation="6">
                      item 2
                  </v-card>
                 <v-card class="pa-2" height="50%" color="blue"  outlined dark tile elevation="6">
                      item 3
                  </v-card>
              </v-col>
          </v-row>
          <v-row>
              <v-col cols="12">
                  <v-card class="pa-2 ma-1" height="100px" outlined color="green" tile elevation="6">
                      item 4
                  </v-card>
              </v-col>
          </v-row>
         </v-container>
         <hr> 

             <h2>Grid-2</h2>

             <v-container>
             <v-row>
                 <v-col cols="3" sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 1
                     </v-card>
                 </v-col>
                  <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 2
                     </v-card>
                 </v-col>
                  <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 3
                     </v-card>
                 </v-col>
                  <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 4
                     </v-card>
                 </v-col>
             </v-row>

              <v-row>
                 <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 5
                     </v-card>
                 </v-col>
                  <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 6
                     </v-card>
                 </v-col>
                  <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 7
                     </v-card>
                 </v-col>
                  <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 8
                     </v-card>
                 </v-col>
             </v-row>

              <v-row>
                 <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 9
                     </v-card>
                 </v-col>
                  <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 10
                     </v-card>
                 </v-col>
                  <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px">
                         item 11
                     </v-card>
                 </v-col>
                  <v-col cols="3"  sm="12" md="6" lg="3">
                     <v-card border="bottom" color="indigo" dark height="60px" >
                        <v-card-content>
                            item 12
                        </v-card-content>
                     </v-card>
                 </v-col>
             </v-row>
         </v-container>

        <hr>
        
        <h2>Grid-3</h2>
        <v-container>

        </v-container>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#col2{
    border:2px solid red
}
</style>