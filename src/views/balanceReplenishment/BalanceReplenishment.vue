<template>
  <div class="balance-replenishment">
    <router-link to="/">Back</router-link>
    <div class="balance-replenishment--container">
      <div class="balance-replenishment--info">
        <span class="balance-replenishment--operator">Operator: {{ currentOperator }}</span>
        <span class="balance-replenishment--balance">Balance: {{ currentBalance }}</span>
        Number: <input v-model="phone"/>
        Sum: <input v-model="sum">
        <button @click="handleClick">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";

export  default {
  name: 'BalanceReplenishment',

  data() {
    return {
      currentOperator: '',
      currentBalance: '000000',
      phone: '',
      sum: ''
    }
  },
  mounted() {
    this.currentOperator = this.$route.params.operator;
    Api.getBalance().then(res => this.currentBalance = res.data)
    .catch(e => console.log(e))
  },

  methods: {
    handleClick() {
      console.log(this.$)
      if (this.checkPhone(this.phone) && this.sum >= 1 && this.sum <= 1000) {
        const body = {
          phone: this.phone,
          sum: ''
        }
        Api.setBalance(body).then(this.$router.push('lul'))
        .catch(this.$router.replace('/'))
      }
      else alert('Проверьте правильность ввода номера или суммы')
    },
    checkPhone(str) {
      return !!str.match('^((\\+7|7|8)+([0-9]){10})$');
    }
  }
}
</script>

<style>
.balance-replenishment--container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.balance-replenishment--info {
  display: flex;
  flex-direction: column;
}

.balance-replenishment--operator,
.balance-replenishment--balance {
  margin-bottom: 10px;
}
</style>