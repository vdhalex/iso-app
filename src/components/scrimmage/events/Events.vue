<template>
  <div id="events">
  <v-card class="mt-2 ml-2 translucentBackground scrimmageBorder" style="height:100%; overflow:scroll">
    <v-container class="pa-0" fluid>
      <h2 class="text-xs-center bottomScrimmageBorder py-2">Event log</h2>
        <Event v-for="(eventItem, i) in occurredEvents.slice().reverse()"
        :actionEntry="eventItem"
        :color="cardColor(i)"
        @remove-event="removeEventFromList($event)"/>
    </v-container>
  </v-card>
</div>
</template>

<script>
import Vue from 'vue'
import Event from './Event'

export default {
  name: 'events',
  components: {
    Event
  },
  props: {
    occurredEvents: Array,
  },
  methods: {
    cardColor: function(index) {
      if (index % 2 == 0) {
        return "grey darken-1";
      } else {
        return "grey darken-2";
      }
    },
    removeEventFromList: function(id) {
      console.log('removing event');
      const i = this.occurredEvents.map(function(x) {return x.id; }).indexOf(id);
      if (i != -1) this.occurredEvents.splice(i, 1);
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
    display: none;
}
</style>
