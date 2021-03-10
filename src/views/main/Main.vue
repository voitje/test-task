<template>
  <div class="main">
    <span class="main--title">Select operator</span>
    <div class="main--list-operators">
      <router-link to="balance-replenishment/mts">
        <img class="mts-logo" :src="mtsLogo"/>
      </router-link>
      <router-link to="balance-replenishment/beeline">
        <img class="beeline-logo" :src="beelineLogo"/>
      </router-link>
      <router-link to="balance-replenishment/megafon">
        <img class="megafon-logo" :src="megafonLogo"/>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {
      mtsLogo: require('../../assets/svg/MTS_(network_provider)-Logo.wine.svg'),
      beelineLogo: require('../../assets/svg/Beeline.svg'),
      megafonLogo: require('../../assets/svg/MegaFon_logo_without_text.svg')
    }
  }
}
</script>

<style>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main--title {
  margin-bottom: 50px;
}

a {
  margin-right: 10px;
}


@media (max-width: 510px) {
  .main--list-operators {
    display: flex;
    flex-direction: column;
  }
}
</style>