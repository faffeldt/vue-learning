<template>
  <v-app dark>
    <MyHeader />
    
    <v-main dark>

      <v-card class="mx-auto" tile>
        <v-card-title>{{ heading_past_spacex_launches }}</v-card-title>
        <v-list dense disabled>
          <v-list-item-group>
            <v-list-item v-for="launch in this.$parent.launches_past">
              <v-list-item-content>
                <v-list-item-title v-text="launch.name + ' - ' + launch.static_fire_date_utc"></v-list-item-title>
                <p>{{ launch.details }}</p>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-main>

    <MyFooter />
  </v-app>
</template>

<script>
import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter
  },
  data () {
    return {
      heading: 'Welcome to my learning Vue App',
      heading_basic_list: 'How to render a basic listing:',
      items: [
        { name: 'Brot', detail: 'Schwarzbrot, Graubrot, etc.' },
        { name: 'Nudeln', detail: 'Spaghetti, Spirelli, Lasagne, etc.' }
      ],
      heading_handling_user_input: 'How to handle user input and basic custom methods:',
      handling_user_input_message: 'Lorem ipsum dolor amen sit',
      heading_handling_input_model: 'How to handle input fields and model:',
      handling_input_model_value: 'Lorem ipsum dolor amen sit',
      heading_past_spacex_launches: 'Past 10 SpaceX launches:',
      launches_past: null,
      launches_upcoming: null
    }
  },
  methods: {
    reverseMessage: function () {
      this.handling_user_input_message = this.handling_user_input_message.split('').reverse().join('')
    }
  }
};
</script>