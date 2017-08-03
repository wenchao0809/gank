import {classifymutaions} from '../mutations/classifymutaions'

const classify = {
  state: {
    /**
     * 保存当前被选中的组件实例
     */
    currentSelectClassify: {},
    classifySelectClassifyString: ''
  },
  mutations: classifymutaions
}

export default classify
