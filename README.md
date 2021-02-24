# resource-manager-plugins

资源中心插件（资源查询+资源版本查询）

使用方法

安装引入

```
npm i resource-manager-plugins
```

插件默认导出全局变量 可以通过 import 方式引入

```
import  自定义变量名 (SENSE_SPRING)  form 'resources-manager-plugins'
```

方法 1. 初始化

```
SENSE_SPRING.init(
      document.getElementsByClassName('plugin_body')[0],  插件放入容器
      host  引入插件的ipPort
    )
```

方法 2. 打开插件

```
SENSE_SPRING.open(
  opt   需要传入的插件需要使用信息
)

opt:object = {
  type:  string          打开弹窗的类型(必填项)
  resourceType: string   资源类型(选填)
  algorithmType: string  资源算法类型(选填)
  creator: string        创建资源的用户名 使用resource资源选择单选插件时必填
  others: {              自定义参数(选填) 其他内容 -->  业务逻辑需要与资源中心确定
    fromModel: 'panorama',  string  // 来自的模块
    content: 类型需要与资源中心确定 //  内容
  }
}
# 详细说明
  * type 页面路由，确定打开页面也就是弹窗类型   参数值:  'resource' 资源选择(单选)  、 'version'  版本选择(单选) 、'mutipleversions'  版本选择(多选)  请根据业务场景确定使用
  * resourceType 资源类型 , 也就是选择资源的类型  参数值:  'RAW_DATASET' 原始数据集、'ANNO_DATASET' 已标注数据集、'EVALUATION_REPORT'评测报告等...  详细参照内部文档
  * algorithmType 算法类型                     参数值:  CLASSIFICATION 、 DETECTION 、 SEMANTIC_SEGMENTATION
  * creator 创建者  type为resource时，插件有创建资源的功能，必须传递创建者参数
  * others 其他参数  为了区分不同模块的不同需求，固定格式参考以上， eg:评测中心的限制选择数量   others:{fromModel:'evaluate',content:5}  content为数值类型
```

方法 3. 关闭插件

```
SENSE_SPRING.close()
```

方法 4. 插件设置返回值的回调

```
SENSE_SPRING.setCallback('close_callback',close_callback)
function close_callback(res){
}
```

方法 5. 插件打开的回调

```
SENSE_SPRING.setCallback('open_callback',open_callback)
function open_callback(res){
}
```

方法 6. 插件关闭的回调

```
SENSE_SPRING.setCallback('selected_callback',selected_callback)
function selected_callback(res){
}
```
