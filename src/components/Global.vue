<script>
  import Vue from 'vue'
  import {Toast} from 'mint-ui';
  import axios from 'axios'

  let isDev = true;

  /**
   * http请求 post
   * @param httpURL
   * @param data
   * @param fn
   */
  function Post(httpURL, data, fn) {
    axios.post(httpURL, data).then(res => {
      fn(res.data);
    }).catch(function (error) {
      Toast({message: "网络异常，请稍后重试", position: 'bottom', duration: 1500});
    });
  }

  // 底部toast提示
  function MToast(msg) {
    if (!msg) msg = "";
    return Toast({message: msg, position: 'bottom', duration: 1500});
  }

//  function console_(msg) {
//    if (isDev) console.log(msg);
//  }

  export default
  {
    Post, MToast
  }
</script>



