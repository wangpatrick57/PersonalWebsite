<template>
  <div>
    <img id="bigBoy" src="../assets/colorsseum.png"/>
    <p class="writeup">
      <span class="orange">
        I made Colorsseum because I wanted to like Smash Bros, but I felt the abilities were too hard to execute and too
        hard to remember. It takes months to get proficient at a single character, because there are about 20 different
        moves every character can do and half of them are different variations of punches. It's definitely a great game
        and I really enjoy playing Bowser, but it's not a good party game. Colorsseum it basically Smash Bros, but each
        character has four distinct, easy to use abilities, like a MOBA.<br>
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
        Download the game <a class="link" target="_blank" href="https://fishgoatman.itch.io/colorsseum">here</a>
      </span>
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
}
.writeup {
  font-size: 3vw;
  padding: 0 8vw;
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
  object-fit: cover;
}
.link {
  color: #1DB660;
}
.link:hover {
  color: #CA9B00;
}
</style>
