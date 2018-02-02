// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。

/* 导出actions方法 */
import {showLoading, hideLoading} from './widgetUi'

export default {
  // UI页面状态变更
  showLoading,
  hideLoading
}
