<template>
  <div id="app">
    <h1>{{ heading }}</h1>
    
    <div>
      <h2>{{ heading_basic_list }}</h2>
      <ol>
        <li v-for="item in items">
          {{ item.name }}: {{ item.detail }}
        </li>
      </ol>
    </div>

    <div>
      <h2>{{ heading_handling_user_input }}</h2>
      <p>{{ handling_user_input_message }}</p>
      <button v-on:click="reverseMessage">Reverse message</button>
    </div>

    <div>
      <h2>{{ heading_handling_input_model }}</h2>
      <p>{{ handling_input_model_value }}</p>
      <input v-model="handling_input_model_value">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
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
      handling_input_model_value: 'Lorem ipsum dolor amen sit'
    }
  },
  methods: {
    reverseMessage: function () {
      this.handling_user_input_message = this.handling_user_input_message.split('').reverse().join('')
    }
  }
}
</script>

<!--
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
-->