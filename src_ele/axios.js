/**
 * Created by zjy on 2017/7/31.
 */
import axios from 'axios'
export default{
  install(vue){;
  var iAxios = axios.create({
    baseURL:"http://cangdu.org:8001",
  });
    vue.prototype.$http = axios;
  }
}
