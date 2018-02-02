// 显示加载中进度条
export function showLoading ({state, commit}) {
  commit('updateLoading', true)
}

// 隐藏加载中进度条
export function hideLoading ({state, commit}) {
  commit('updateLoading', false)
}

