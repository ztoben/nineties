<template>
  <div id="app">
    <h1 class="header">Zach Toben</h1>
    <ul class="links-container">
      <li>
        <router-link to="/about">
          About
        </router-link>
      </li>
      <li>
        <router-link to="/resume">
          Resume
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          Contact
        </router-link>
      </li>
    </ul>
    <img
      src="./assets/flamingline.gif"
      alt="flaming_line"
      class="flaming-line"
    />
    <router-view></router-view>
    <div class="footer">
      <img src="./assets/under_construction_1.gif" alt="construction_1" />
      <img src="./assets/under_construction_2.gif" alt="construction_2" />
      <img src="./assets/under_construction_1.gif" alt="construction_3" />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  align-items: center;
  color: rgb(255, 0, 0);
  background: url("./assets/bg_stars.gif");
  display: flex;
  flex-grow: 1;
  height: calc(100vh - 60px);
  flex-direction: column;
  padding-top: 60px;

  a {
    color: rgb(255, 0, 0);
    text-decoration: underline;

    &:visited {
      color: rgb(255, 0, 0);
    }
  }

  .header {
    font-size: 10vw;
    font-weight: normal;
    width: 100%;
    text-align: center;
    margin: 0 60px;

    &:before {
      content: "";
      background: url("./assets/goldstar.gif") 50% / contain no-repeat;
      position: absolute;
      height: 10vw;
      width: 10vw;
      margin-left: -10vw;
    }

    &:after {
      content: "";
      background: url("./assets/goldstar.gif") 50% / contain no-repeat;
      position: absolute;
      height: 10vw;
      width: 10vw;
    }
  }

  .links-container {
    display: inline-flex;
    list-style-type: none;
    padding: 0;

    li {
      margin: 10px;
    }
  }

  .footer {
    display: inline-flex;
    margin-top: 30px;
    align-items: center;
    height: 150px;
    max-width: 400px;
    width: 80%;

    img {
      width: 50%;
    }

    img:first-of-type {
      width: 25%;
    }

    img:last-of-type {
      width: 25%;
    }
  }

  .flaming-line {
    max-width: 600px;
    width: 80%;
  }
}

body {
  margin: 0;
}
</style>
