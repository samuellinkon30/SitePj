<template>
  <footer class="footer">
    <label class=" footer-left">POLI JÚNIOR ENGENHARIA © {{now}}</label>
    <label class="footer-right">DEVELOPED WITH
      <icon class="footer-icon" name="code" label="Source Code" scale="0.8"></icon>AND
      <icon class="footer-icon" name="heart" scale="0.7"></icon>
    </label>
  </footer>
</template>

<script>
import moment from 'moment';
const now = moment().year();
export default {
  data() {
    return {
      now,
    };
  },
};
</script>

<style scoped>
  .footer {
    padding: 15px 30px 0;
    background-color: #1b1b1e;
    color: #fefefe;
    text-align: center;
    width: 100%;
    height: 50px;
    bottom:0;
    left:0;
  }
  .footer-left,
  .footer-right {
    font-size: 0.75em;
  }
  .footer-right {
    display: none;
  }
  .footer-icon {
    margin: 0 5px;
  }
  @media screen and (min-width: 700px) {
    .footer{
      padding: 15px 30px 5px;
    }
    .footer-left {
      float: left;
    }
    .footer-right {
      display: block;
      float: right;
    }
  }
</style>
