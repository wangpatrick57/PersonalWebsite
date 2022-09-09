<template>
  <div>
    <img id="bigBoy" src="../assets/colorsseum.png"/>
    <p class="writeup">
      <video class="demoVid" controls>
        <source src="../assets/colorsseumDemo.mp4" type="video/mp4"/>
      </video>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Tapestry',
  data () {
    return {
      colorsseumPurple: '#FFDBFF'
    }
  },
  created () {
    const oldTransition = document.body.style.transition
    document.body.style.transition = 'none'
    document.body.style.backgroundColor = this.colorsseumPurple
    /* eslint-disable-next-line */
    const trash = document.body.offsetHeight
    document.body.style.transition = oldTransition
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
#bigBoy {
  width: 100%;
  height: 57vw;
  background-color: #FFDBFF;
  object-fit: cover;
}
.writeup .orange {
  color: #CA9B00;
}
.writeup .green {
  color: #1DB660;
}
.writeup .blue {
  color: #2C95D1;
}
.demoVid {
  display: block;
  margin: 3vw 0vw;
  width: 100%;
  height: 48vw;
  object-fit: contain;
}
.link {
  color: #1DB660;
}
.link:hover {
  color: #CA9B00;
}
</style>
