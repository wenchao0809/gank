import {classifymutaions} from '../mutations/classifymutaions'
import {classifyActions} from '../actions/classifyactions'

const classify = {
  state: {
    /**
     * 保存当前被选中的组件实例
     */
    currentSelectClassify: {},
    selectedClassifyData: [],
    classifySelectClassifyString: 'all',
    moreData: 'false',
    // 请求第几页默认第一页
    refreshPage: 1,
    loadPage: 2
  },
  mutations: classifymutaions,
  actions: classifyActions
}

export default classify
