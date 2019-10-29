<template>
  <div class="contact">
    <h2>Contact me:</h2>
    <ul class="contact-list">
      <li>
        <a href="mailto:zach.toben@gmail.com?Subject=Hello!">
          Email
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/zachary-toben-bbab4a84">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/ztoben">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://www.github.com/ztoben">
          Github
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style lang="scss" scoped>
.contact {
  max-width: 800px;
  min-height: 100px;
  color: yellow;
  margin-top: 30px;
  padding: 15px;
  text-align: center;
}

.contact-list {
  width: 200px;
  text-align: left;

  li {
    margin: 5px 0;
  }

  li:hover {
    background-color: yellow;
  }
}
</style>
