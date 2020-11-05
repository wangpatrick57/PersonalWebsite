<template>
  <div>
    <div id="bigBoy">
      <div/>
    </div>
    <h1 id="title">ROBOTICS<br>SIMULATION</h1>
    <p class="writeup">
      Some backstory: my high school robotics team had not gone to Worlds for the first 15 years of its existence, until
      the year before I joined. The older members told me all about how their driver William Fang carried our team to Worlds. Our robot was nothing
      special, but William was able to weave around other robots and score five gears when other robots could only score three.<br>
      <br>
      I wanted to help us get to Worlds again, but I'm not a hardware guy. Software was important to the robot of course but it
      wasn't game breaking, and I wanted to make something truly impactful. (It didn't work out in the end but it was still fun :)<br>
      <br>
      Anyways, my idea was pretty ambitious. Since the quality of the driver was just as if not more important than the quality of the
      robot, what if we could build ourselves a great driver instead of a great robot? This was something I could affect, because I
      could use software to make a training simulation.<br>
      <br>
      William was good because he'd driven for four years, but he graduated so we now had a completely fresh driver. We had him drive
      circles around cones but the only realistic practice he would get would be during the competition, which is kind of studying for
      your final while taking it.<br>
      <br>
      So, I proposed a training simulation that would connect to the driver's joystick. The other five robots in the game would be controlled
      using mouse or keyboard by random members, just to provide a realistic game situation. Below is a demonstration of what I came up with
      at the end of the season:
      <video class="demoVid" controls>
        <source src="../assets/roboticsDemo.mp4" type="video/mp4"/>
      </video>
      Even though it wasn't used for training in the end because it wasn't realistic enough, I'm still very proud of what I created. I designed
      a modular networking system so that a game could be joined by any number of computers, each with any number of robots on them. You could
      even have a computer with zero robots which would just be a spectator. As you can see in the video, we split it up into two computers each
      with three computers. I set up a booth at the competition where people could play my game, and below is a photo!
      <img class="photo" src="../assets/roboticsPhoto.jpg"/>
      <span class="ps">Disclaimer: the cover photo is the simulation I made the year after, which was in 3D but was singleplayer</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Robotics',
  data () {
    return {
      roboticsRed: '#7A2C28'
    }
  },
  created () {
    const oldTransition = document.body.style.transition
    document.body.style.transition = 'none'
    document.body.style.backgroundColor = this.roboticsRed
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
  background: url('../assets/robotics.png');
  background-color: #7A2C28;
  background-size: cover;
  position: relative;
}
#bigBoy > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(122, 44, 40, 0.7);
}
#title {
  margin: 0;
  position: absolute;
  top: 7vw;
  left: 0px;
  width: 100%;
  color: #FFFFFF;
  text-align: center;
  font-size: 14vw;
}
.writeup {
  color: #C8726E;
  margin-bottom: 0;
}
.ps {
  font-size: 1.8vw;
}
.demoVid {
  display: block;
  margin: 3vw 0vw;
  width: 100%;
  height: 53vw;
  object-fit: contain;
}
.link {
  color: #1DB660;
}
.link:hover {
  color: white;
}
.photo {
  margin-top: 3vw;
  width: 100%;
  height: 60vw;
  object-fit: cover;
}
</style>
