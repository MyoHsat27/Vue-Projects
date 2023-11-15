<template>
  <div class="m-5 card p-4">
    <div class="d-flex justify-content-between">
      <h4>{{result}}</h4>
      <button @click="remove" class="btn btn-primary">Delete</button>
    </div>
    <div class="clickBoxContainer row justify-content-evenly">
      <div :class="[{pressed : v.isPress}, 'clickBox text-center col-3 m-3 card py-4']" @click="showVoice(v)" v-for="v in voices" :key="v.voice">{{v.voice}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      voices : [
        {voice: "we", isPress : false},
        {voice: "want", isPress : false},
        {voice: "our", isPress : false},
        {voice: "vote", isPress : false},
        {voice: "justice", isPress : false},
        {voice: "leader", isPress : false},
        {voice: "must", isPress : false},
        {voice: "respect", isPress : false},
        {voice: "democracy", isPress : false},
        {voice: "release", isPress : false},
        {voice: "need", isPress : false},
        {voice: "win", isPress : false},

      ],
      result: ""
    };
  },
  methods: {
    showVoice (v){
      if (v.isPress) {
        let newResult = this.result.split(" ").filter((el) => {
          if (el !== v.voice) {
            return el
          }
        })
        this.result =  newResult.join(" ") + " "
        v.isPress = false
      } else {
        this.result += v.voice + " "
        v.isPress = true
      }

    },
    remove() {
      this.result = ""
      this.voices.map((el) => {el.isPress = false})

    }
  }, 
  computed: {
  },
};

</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.clickBox {
  cursor:pointer;
  transition: all 0.1s;
}

.clickBox:hover{
  background-color: rgba(0, 0, 0, 0.07);
}

.clickBoxContainer .pressed {
  background-color: rgba(0, 0, 0, 0.2);
}

</style>
