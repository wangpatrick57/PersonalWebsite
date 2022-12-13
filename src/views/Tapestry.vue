<template>
  <div>
    <img id="bigBoy" src="../assets/tapesthree.png"/>
    <h1 id="title">TAPESTRY</h1>
    <p class="writeup">
      Tapestry is a computer science educational tool which analyzes Python code and generates an interactive memory diagram.
      For example, for this code below:<br>
      <span class="code">
        x = 1
      </span>
      it would generate a diagram like this:
      <span class="code">
        +---+<span style="visibility:hidden;">....</span>(---)<br>
        | x |--->| 1 |<br>
        +---+<span style="visibility:hidden;">....</span>(---)
      </span>
      Of course, it would generate an actual svg, not ASCII (which you can see for yourself below).<br>
      <video class="demoVid" controls>
        <source src="../assets/tapestryDemo.mp4" type="video/mp4"/>
      </video>
      I developed Tapestry with two friends of mine, <a class="link" target="_blank" href="https://ryanmohta.com">Ryan Mohta</a> and
      <a class="link" target="_blank" href="https://arthurlafrance.com">Arthur Lafrance</a>. We started Tapestry at HackUCI 2020, and we actually
      <a class="link" target="_blank" href="https://devpost.com/software/tapestry">won Best Entreprenurial Hack</a>! The photo shows Arthur, me, and Ryan left to right
      (the girl is just the HackUCI representative).
      <img class="photo" src="../assets/tapestryWin.jpg">
      <br>
      I do backend, which for this is mostly the program that analyzes the user's Python code and spits out a diagram. The main challenges I faced were researching
      all the edge cases that can possibly happen in Python. There are some really weird ones, like this one type of object which randomly moves around in memory.
      Our entire generator is based on identifying code objects from their location in memory, so I had to remake our identification system to accomodate this one object.<br>
      <br>
      Thanks for reading all the way through! <a target="_blank" class="link" href="https://github.com/tapestrylearn/Diagrammer">Here</a> is the repository.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Tapestry',
  data () {
    return {
      tapestryBlue: '#080717'
    }
  },
  created () {
    const oldTransition = document.body.style.transition
    document.body.style.transition = 'none'
    document.body.style.backgroundColor = this.tapestryBlue
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
  height: 52vw;
  background-color: #080717;
  object-fit: cover;
}
#title {
  position: absolute;
  top: 4vw;
  left: 0;
  width: 100%;
  color: #F3E8C5;
  text-align: center;
  font-size: 15vw;
}
.writeup {
  color: #F3E8C5;
}
.code {
  color: #AF770D;
  display: block;
  padding: 1vw 3vw;
  font-family: 'Courier New';
}
.inlineCode {
  font-family: 'Courier New';
}
.diagram {
  display: block;
  padding: 1vw 3vw;
}
.link {
  color: #AF770D;
}
.link:hover {
  color: #F3E8C5;
}
.photo {
  margin-top: 3vw;
  width: 100%;
  height: 55vw;
  object-fit: cover;
}
.ps {
  font-size: 1.8vw;
}
.demoVid {
  display: block;
  margin: 3vw 0vw;
  width: 100%;
  height: 39vw;
  object-fit: contain;
}
</style>
