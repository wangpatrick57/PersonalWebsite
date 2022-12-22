<template>
  <div>
    <img id="bigBoy" src="../assets/colorsseum.png"/>
    <p class="writeup">
      BLANT, which stands for Basic Local Alignment of Network Topology, is an algorithm I developed while doing research with Professor Wayne Hayes as an undergraduate at UC Irvine. That sentence needs some
      disambiguation: BLANT is the name of repository with a long history, but BLANT the algorithm is the local alignment algorithm. I also didn't develop it from scratch, parts of the first phase of the
      algorithm were developed by a student named Henry Ye who graduated before I joined the group. After I joined though, I was a solo researcher.<br>
      The goal of BLANT is to find sections of similarity between two large simple graphs (about 10000 nodes) using only the topology of the two graphs. This is problem is NP-hard, but we sought to make a
      heuristic algorithm to solve it. Some alignment algorithms use information external to topology, such as node annotations. For example, if every node represented a user in a social network, an algorithm
      that used external information might align two nodes in two networks with similar usernames.<br>

      At the time, this project was the most difficult technical system I'd worked with. For previous projects, I was able to explicitly work out how all the mechanics interacted and hold the whole map
      in my head. For this project though, it was impossible to exactly simulate how the thousands of parallel walks the algorithm performed would work on graphs of over 10,000 nodes, so I had to learn
      how to use intuition and metrics to slowly iterate the algorithm to be better and better.

      Here is a link to the paper we currently have under review at VLDB 2023.
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
