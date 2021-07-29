# resource-plugin

资源中心插件（资源查询+资源版本查询）

使用方法

安装引入

```
npm i resource-plugin
```

插件默认导出全局变量 可以通过 import 方式引入

```
import  自定义变量名 (SENSE_SPRING)  form 'resource-plugin'
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
  type:'',
  soluation:'',
  opeartion:'',
  resourceType:'',
  xxxxxxx
}
# 详细说明
  * type 页面路由，确定打开页面也就是弹窗类型  dataset、model、testTask、reflowDataset
  * resourceType 资源类型 , 也就是选择资源的类型  参数值:  'RAW_DATASET' 原始数据集、'ANNO_DATASET' 已标注数据集、'EVALUATION_REPORT'评测报告等...  详细参照内部文档
  xxxxxx
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
