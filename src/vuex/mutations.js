// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// this.$store.commit(method, params)

import store from './'

export default {
  updateLoading (state, status) {
    // clearTimeout(state.loadingTimer);
    // state.loadingTimer = setTimeout(() => {
    state.isLoading = status
    // }, 10)
  },
}

