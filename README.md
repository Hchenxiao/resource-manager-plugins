# resource-manager-plugin

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
  resourceType: string  资源类型 创建资源参数
  algorithmType: string  资源算法类型  CLASSIFICATION || DETECTION || SEMANTIC_SEGMENTATION
  type:  string         打开弹窗的类型(必填项)  resource 资源选择   version 版本选择
  creator: string       创建资源的用户名
}
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
