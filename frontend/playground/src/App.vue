<template>
  <v-app>
    <v-main>
        <v-app-bar
        scroll-target="#scrolling-techniques-7"
        elevate-on-scroll
        >
            <v-app-bar-nav-icon
            v-if="$vuetify.breakpoint.mobile">
            </v-app-bar-nav-icon>
        </v-app-bar>
        <v-container>
          <v-sheet
          id="scrolling-techniques-7"
          class="overflow-y-auto"
          >
          <v-row>
          </v-row>
              <v-row>
                <v-col>
                  <h1 class="font-weight-bold text-h2 basil--text"
                  >
                  BASiL
                  </h1>
                </v-col>
                <v-col><v-spacer/></v-col>
                <v-col>
                    <v-tabs
                        v-model="tab"
                        background-color="transparent"
                        color="basil"
                        grow

                    >
                        <v-tab
                        v-for="item in items"
                        :key="item"
                        :to="item.to"
                        >
                        {{ item.title }}
                        </v-tab>
                    </v-tabs>
                </v-col>
              </v-row>
          <router-view/>
          </v-sheet>
      </v-container>
      <v-footer />
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  tab : true,
  data(){
     return {
        tab: null,
        items: [
          {
            title:'Home',
            to : '/',
          },
          {
            title:'자유게시판',
            to : '/freeBoard'
          }
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
  },
};
</script>

<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
