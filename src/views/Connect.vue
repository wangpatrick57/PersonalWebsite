<template>
  <div>
    <input id="invisible" value="wang.patrick57@gmail.com"/>
    <h1 id="title">Connect</h1>
    <h2 id="subtitle">Shoot me an email or check out my Github and resume!</h2>
    <div id="iconContainer">
      <div class="icon tooltip" @click="copy()" @mouseleave="clicked = false">
        <MailIcon/>
        <span class="tooltiptext mail">
          {{ clicked ? 'Copied!' : 'Click to copy' }}
        </span>
      </div>
      <a href="https://github.com/wangpatrick57" class="icon tooltip">
        <GitIcon/>
        <span class="tooltiptext git">
          Click to visit
        </span>
      </a>
      <a href="https://docs.google.com/document/d/1H8cShRo04JB_OBaw_JGbTYfAyZvWSEYw27ROTOlJKco/edit?usp=sharing" class="icon tooltip">
        <PDFIcon/>
        <span class="tooltiptext pdf">
          Click to view
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import MailIcon from '../assets/MailIcon.vue'
import PDFIcon from '../assets/PDFIcon.vue'
import GitIcon from '../assets/GitIcon.vue'

export default {
  name: 'Connect',
  data () {
    return {
      clicked: false
    }
  },
  methods: {
    copy () {
      this.clicked = true
      const copyText = document.querySelector('#invisible')
      copyText.select()
      document.execCommand('copy')
    }
  },
  components: {
    MailIcon,
    PDFIcon,
    GitIcon
  }
}
</script>

<style scoped>
#invisible {
  position: absolute;
  top: -10vw;
  left: -10vw;
}
#title {
  text-align: center;
  font-size: 5.5vw;
  margin-bottom: 1vw;
}
#subtitle {
  text-align: center;
  font-size: 2vw;
  margin-bottom: 2vw;
}
#iconContainer {
  display: flex;
  justify-content: center;
}
.icon {
  margin: 0vw 2vw;
  width: 3.5vw;
  height: 3.5vw;
}
.tooltip {
  position: relative;
  cursor: pointer;
}
.tooltip .tooltiptext.mail {
  width: 6vw;
  top: 100%;
  left: 50%;
  margin-left: -3vw; /* Use half of the width (140/2 = 60), to center the tooltip */
}
.tooltip .tooltiptext.git {
  width: 6vw;
  top: 115%;
  left: 50%;
  margin-left: -3vw; /* Use half of the width (140/2 = 60), to center the tooltip */
}
.tooltip .tooltiptext.pdf {
  width: 6vw;
  top: 115%;
  left: 50%;
  margin-left: -3vw; /* Use half of the width (140/2 = 60), to center the tooltip */
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 6vw;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 0.25vw 0;
  border-radius: 0.3vw;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}
.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  bottom: 100%;  /* At the top of the tooltip */
  left: 50%;
  margin-left: -0.25vw;
  border-width: 0.25vw;
  border-style: solid;
  border-color: transparent transparent black transparent;
}
/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltip .tooltiptext {
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip:hover .tooltiptext {
  opacity: 1;
}
</style>
