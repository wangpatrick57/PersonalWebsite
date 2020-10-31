<template>
  <div>
    <div id="bigBoy">
      <div/>
    </div>
    <h1 id="title">GAME DEV CLUB</h1>
    <p class="writeup">
      I co-founded Game Dev Club in my senior year of high school, with my good friend Ethan Soo. I had been thinking about
      making a game development club at my school because I was into both the "game dev" and "club" aspects of it. In my
      senior year, I decided it was now or never, and started planning the club that summer.<br>
      <video class="demoVid" controls>
        <source src="../assets/gdcPromo.mp4" type="video/mp4"/>
      </video>
      Above is the first promo video that our other friend, Julia Shuieh, created, showcasing some games that me and Ethan had made.
      It sounds cheesy but that video really convinced me that I'd made the right choice in starting Game Dev Club. It was magical
      the first time I watched it. Fun fact: me closing the computer at the end is actually the reversed clip of me opening the computer.<br>
      <video class="demoVid" controls>
        <source src="../assets/firstShowcase.mp4" type="video/mp4"/>
      </video>
      This is our first game showcase, which is my second favorite memory from Game Dev Club. It was amazing, really really cool, both to play
      the games our members made and to see how many other people were interested. The club is still going and I'm super proud of the new
      officers; you can check them out <a class="link" target="_blank" href="https://www.facebook.com/Cupertino-Game-Development-Club-515386358867050">here</a>!<br>
    </p>
  </div>
</template>

<script>
export default {
  name: 'GameDevClub',
  data () {
    return {
      gdcGray: '#222222'
    }
  },
  created () {
    const oldTransition = document.body.style.transition
    document.body.style.transition = 'none'
    document.body.style.backgroundColor = this.gdcGray
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
  height: 55vw;
  background: url('../assets/gdc.jpg');
  background-color: #222222;
  background-size: cover;
  position: relative;
}
#bigBoy > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.8);
}
#title {
  margin: 0;
  position: absolute;
  top: 6vw;
  left: 0px;
  width: 100%;
  color: #FFFFFF;
  text-align: center;
  font-size: 15vw;
}
.writeup {
  font-size: 3vw;
  padding: 0 8vw;
  color: white;
}
.demoVid {
  display: block;
  margin: 3vw 0vw;
  width: 100%;
  height: 44vw;
  object-fit: cover;
}
.link {
  color: #1DB660;
}
.link:hover {
  color: white;
}
</style>
