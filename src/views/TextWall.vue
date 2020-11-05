<template>
  <div id="main">
    <h1 id="title">Text Wall</h1>
    <h2>Tools and Languages</h2>
    <ul>
      <li>Python</li>
      <ul>
        <li>Wrote Tapestry in Python</li>
        <li>I do all my Leetcode problems in Python</li>
        <li>Python Programming with Libraries (ICS 32A)</li>
        <li>Intermediate Python Programming (ICS 33)</li>
      </ul>
      <li>C++/C</li>
      <ul>
        <li>My research on network databases is in C/C++</li>
        <li>C++ as a Second Language (ICS 45C)</li>
        <li>Data Structures and Algorithms where we use C++ (ICS 46)</li>
        <li>Same Computer Architecture class where we use C (ICS 53)</li>
      </ul>
      <li>Shell Script</li>
      <ul>
        <li>Played Bandit OverTheWire (a CTF site)</li>
        <li>DevOps Internship with a lot of scripting</li>
        <li>Computer Architecture class where we learn about the terminal (ICS 53)</li>
      </ul>
      <li>Javascript</li>
      <ul>
        <li>In my internship at Happs we used Vue JS for frontend and Javascript for backend</li>
      </ul>
      <li>Firestore</li>
      <ul>
        <li>Backend for Happs</li>
        <li>Backend for Real Life Strategy</li>
      </ul>
      <li>Game Maker Language (GML)</li>
      <ul>
        <li>Colorsseum</li>
        <li>Robotics Simulation</li>
        <li>Other random games in GameMaker Studio</li>
      </ul>
      <li>HTML/CSS</li>
      <ul>
        <li>Happs</li>
        <li>This website</li>
        <li>Tapestry's website</li>
      </ul>
      <li>Swift</li>
      <ul>
        <li>From making Real Life Strategy frontend</li>
      </ul>
      <li>Golang</li>
      <ul>
        <li>Real Life Strategy server</li>
      </ul>
      <li>Java</li>
      <ul>
        <li>AP Computer Science (APCS)</li>
        <li>Wrote Superior Senso in Java</li>
        <li>Did some USACO problems in Java</li>
      </ul>
      <li>C#</li>
      <ul>
        <li>Made the 3D robotics simulation in Unity, using C#</li>
      </ul>
      <li>Blender (3D Modeling)</li>
      <ul>
        <li>Made 3D Tapestry logo</li>
        <li>Made a few 3D art pieces</li>
        <li>Modeled the rockets and stuff in the 3D robotics simulation</li>
      </ul>
      <li>Inkscape (Making SVGs)</li>
      <ul>
        <li>Made a Chinese New Year's poster for VMware</li>
        <li>Made the plaques on this website</li>
      </ul>
    </ul>
    <h2>School</h2>
    <ul>
      <li>University of California, Irvine</li>
      <ul>
        <li>GPA: 4.0</li>
        <li>HackUCI 2020: Best Entreprenurial Hack</li>
        <li>Cyber @ UCI</li>
        <li>Tabletop Games Club</li>
        <li>Researching Network Databases</li>
      </ul>
      <li>Cupertino High School</li>
      <ul>
        <li>GPA: 3.9</li>
        <li>ACT: 36</li>
        <li>Co-Founder of Game Dev Club</li>
        <li>PR Officer of Tabletop Games Club</li>
        <li>CHS Robotics</li>
      </ul>
    </ul>
    <h2>Random Achievements</h2>
    <ul>
      <li>Eagle Scout of Troop 74</li>
      <li>CM Level 10 Piano</li>
      <li>1st Place Engineering Notebook and 3rd Place Engineering Process in the 2016 Tech Challenge</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TextWall',
  created () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
#title {
  text-align: center;
  font-size: 3vw;
}
h2 {
  font-size: 2vw;
  margin-bottom: 0;
  margin-top: 3vw;
}
ul {
  margin: 0.3vw 0vw;
}
li {
  font-size: 1.2vw;
}
#main {
  margin-left: 1vw;
  margin-bottom: 1.5vw;
}
</style>
