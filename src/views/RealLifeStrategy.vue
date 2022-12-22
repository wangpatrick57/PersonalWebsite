<template>
  <div>
    <img id="bigBoy" src="../assets/rlsHero.png"/>
    <p class="writeup">
      Real Life Strategy was a strategy game I made that took place in the real world. People would run around at a park or a college
      campus with some sort of way to do combat in the real world, like water guns, sock balls on strings, or cameras (take a photo of someone to "eliminate" them). However,
      the strategic aspects would be enhanced by phones, which showed people the locations of players on their team as well as the locations of opposing players,
      if they got close enough.<br>
      <br>
      The idea behind having combat in the real world was that it would create a lot more strategic depth than in video games. For example,
      one combat encounter I remember well was when I saw my friend behind a pillar by looking at a mirror, and I threw my sock ball around the pillar
      by letting the string curl it around. Also, it's just fun to run around :).
      <video class="demoVid" controls>
        <source src="../assets/rlsPhone.mp4" type="video/mp4"/>
      </video>
      The first video shows a demo of how the game looks in the phone. The main challenge was building a server which received constant, concurrent location
      updates from players, dealt with drops in phone signal gracefully, and didn't crash. I originally used Firebase for the project, but had to build to my own
      in-memory "key-value store" instead as Firebase only gave enough free writes to play for an hour a month. I also built an iOS client, but it was technically much simpler.
      <video class="demoVid" controls>
        <source src="../assets/rlsRealLife.mp4" type="video/mp4"/>
      </video>
      The second video shows how the game looks in real life, with sock balls. It looks very different with water guns (we put phones in plastic bags), or cameras.
    </p>
  </div>
</template>

<script>
export default {
  name: 'RealLifeStrategy',
  data () {
    return {
      colorsseumPurple: '#CBCDD1'
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
