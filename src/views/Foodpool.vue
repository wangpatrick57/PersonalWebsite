<template>
  <div>
    <img id="bigBoy" src="../assets/foodpoolHero.png"/>
    <p class="writeup">
      Foodpool is a startup I cofounded with <a class="link" target="_blank" href="https://arthurlafrance.com">Arthur Lafrance</a>, <a class="link" target="_blank" href="https://kxvin.com">Kevin Xu</a>, and <a class="link" target="_blank" href="https://www.linkedin.com/in/sanghyun-byun/">Sanghyun Byun</a>.
      I was frustrated at how expensive normal food delivery was and wanted to make a cheaper alternative for college students using carpooling. Food delivery with
      Doordash or UberEats generally costs $10 on top of the food, but Foodpool's price was only $2 as we delivered everyone's food at the same time.
      We tried out a lot of different ways to do this over the months, but the most successful model was this: we deliver from a single restaurant
      each day, at 12pm and 6pm. For example, one week's menu looked like this:<br>
      <img id="exampleMenu" src="../assets/fpExampleMenu.png"/>
      On the business side, I recruited 2 employees, raised $10,000 through competitions, did 50 customer interviews over the course of the startup,
      averaged 10 orders a week, developed marketing material, and just generally made decisions on what to work on. On the technical side, I helped with
      architecting our backend (using experience from building networked games), and I developed half of the iOS app. Below is a demo.<br>
      <video class="demoVid" controls>
        <source src="../assets/fpDemo.mp4" type="video/mp4"/>
      </video>
      We later decided to get rid of the app in favor of a spreadsheet, which was the most important (good) decision I made since it allowed us to prototype much faster.
      After some prototyping, we found a model that got twice as many orders as the app, which was mind-blowing to us since we had spent about 50x less time developing the spreadsheet.
      Kevin developed this model into a website, which you can view <a class="link" target="_blank" href="https://foodpool.app">here.</a><br>
      <br>
      Just for fun, here's also an early marketing video we made. It explains an older carpooling model, but it's still a fun watch :).<br>
      <iframe class="youtubeVid" src="https://youtube.com/embed/dDkEbnI67gk"></iframe>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Foodpool',
  data () {
    return {
      colorsseumPurple: '#3fb975'
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
  height: 70vw;
  background-color: #1d1d1d;
  object-fit: cover;
}
#exampleMenu {
  width: 100%;
  height: 60vw;
  object-fit: contain;
  margin-top: 20px;
  margin-bottom: 20px;
}
.demoVid {
  display: block;
  margin: 3vw 0vw;
  width: 100%;
  height: 48vw;
  object-fit: contain;
}
.youtubeVid {
  display: block;
  margin: 3vw 0vw;
  width: 100%;
  height: 41vw;
  object-fit: contain;
}
.writeup {
    color: #FFFFFF;
}
.link {
  color: #1d1d1d;
}
.link:hover {
  color: #505050;
}
</style>
