<template>
  <div class="balance-replenishment">
    <router-link to="/">Back</router-link>
    <div class="balance-replenishment--container">
      <div class="balance-replenishment--info">
        <span class="balance-replenishment--operator">
          <img class="operator-logo" :src="currentOperator" />
        </span>
        <span class="balance-replenishment--balance">$ {{ currentBalance }}</span>
        <input class="balance-replenishment--number" placeholder="Enter number..." v-model="phone"/>
        <input class="balance-replenishment--amount" placeholder="Enter amount..." v-model="sum">
        <button @click="handleClick">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import Utils from "@/utils/utils";

export  default {
  name: 'BalanceReplenishment',

  data() {
    return {
      currentOperator: '',
      currentBalance: '1000000',
      phone: '',
      sum: ''
    }
  },
  mounted() {
    this.currentOperator = this.getLogoFromName(this.$route.params.operator);
    Api.getBalance().then(res => this.currentBalance = res.data)
    .catch(e => console.log(e))
  },

  methods: {
    handleClick() {
      console.log(Utils.checkNumber(this.sum))
      if (Utils.checkPhone(this.phone) && Utils.checkNumber(this.sum)) {

        const randomNumber = Math.floor(Math.random() * Math.floor(2));
        let textInModal = '';
        if(randomNumber === 1)
           textInModal = 'Оплата прошла удачно';
        else
          textInModal = 'Оплата прошла удачно'

        alert(textInModal);
        setTimeout(() => this.$router.replace('/'), 2000)

        //  const body = {
          //   phone: this.phone,
          //   sum: ''
          // }
        // Api.setBalance(body).then(this.$router.push('lul'))
        // .catch(this.$router.replace('/'))
      }
      else alert('Проверьте правильность ввода номера или суммы')
    },
    getLogoFromName(name) {
      switch (name){
        case 'mts':
          return require('../../assets/svg/MTS_(network_provider)-Logo.wine.svg');
        case 'beeline':
          return require('../../assets/svg/Beeline.svg')
        case 'megafon':
          return require('../../assets/svg/MegaFon_logo_without_text.svg')
      }
    }
  }
}
</script>

<style>
.balance-replenishment {
  padding: 20px;
  height: 100%;
}
.balance-replenishment--container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.balance-replenishment--info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: #ffd5c2;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
}

.balance-replenishment--operator,
.balance-replenishment--balance,
.balance-replenishment--number,
.balance-replenishment--amount {
  margin-bottom: 10px;
}

.balance-replenishment--operator,
.balance-replenishment--balance {
  color: brown;
}

.operator-logo {
  width: 150px;
  height: 150px;
}
</style>