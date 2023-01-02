<template>
  <div>
    <img id="bigBoy" src="../assets/colorsseum.png"/>
    <p class="writeup">
      <span class="orange">
        In 7th grade, I took Yearbook as an elective, which was my favorite class in middle school. It was both because
        I liked being a Yearbook photographer and because, since I was a photographer, I had nothing to do in class so I
        played games with my friend every day. Our favorite game was <i>Test Subject Arena 2</i>, which was a platform fighter
        with one melee guy, six guys that shoot bullets which go straight, and one guy that throws a ball that rolls and has
        gravity.<br>
        <br>
        I felt like there was so much potential with this game that it hadn't tapped into, considering six of the characters
        literally did the same thing, so in high school I made my own version of this game. It's a platform fighter based on
        ranged attacks with various types of projectiles and mobility abilities, quite similar to a MOBA. The video below
        shows a match between the rogue, who specializes in mobility and precise close range attacks, and the caster, who has
        the most difficult projectiles to master.
      </span>
      <video class="demoVid" controls>
        <source src="../assets/colorsseumDemo.mp4" type="video/mp4"/>
      </video>
      <span class="orange">
        I have been dreaming of making a video game since I was 5, and I've been trying since I was 12. Colorsseum will
        always hold a special place in my heart because it is the first video game I'd ever finished. I went through two
        complete redesigns, and in both I rethought my entire ability format as well as my internal projectile and physics
        systems.<br>
      </span>
      <video class="demoVid" controls>
        <source src="../assets/colorsseumGameplay.mp4" type="video/mp4"/>
      </video>
      <span class="orange">
        Colorsseum started one Friday when I made the mage (the orange one) who could fly by pressing 2 and shoot
        balls by pressing 1. That was the first version: every character had two keys. After a few months though, I wanted
        to make the game more dynamic so I added in mouse input. I split characters in "mouse" and "keyboard" characters;
        mouse characters had two abilities but had a cursor to work with, while keyboard characters had four abilities.
        In the end though, I made all the characters into "keyboard" ones for consistency, and here we are!<br>
      </span>
      <br>
      <span class="orange">
        You can download the game <a class="link" target="_blank" href="https://fishgoatman.itch.io/colorsseum">here.</a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Colorsseum',
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
