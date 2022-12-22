<template>
  <div>
    <img id="bigBoy" src="../assets/colorsseum.png"/>
    <p class="writeup">
      Foodpool is a startup I made with three friends which provided a carpooling food delivery service to college students. Food delivery with
      Doordash or UberEats generally costs $10 on top of the food, but Foodpool's price was only $2 as we delivered everyone's food at the same time.
      We tried out a lot of different ways to do this over the months, but the most successful model was this: we deliver from a single restaurant
      each day, at 12pm and 6pm. For example, one week's menu looked like this:<br>

      On the business side, I did about 100 customer interviews in total, recruited team members (2 developers, 1 designer, 1 social media manager),
      raised $10,000 through competitions, and just generally decided what we were doing at any given time. On the technical side, I helped with
      architecting our backend (using experience from building networked games), and I developed half of the iOS app.<br>

      Just for fun, here's an early marketing video I made. It uses an old on-demand carpooling model, but it's still a fun watch :).

      You can also check out our ordering website here.
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
