if (!SENSE_SPRING) {
  var SENSE_SPRING = (function () {
    return {
      init: function (container, host) {
        if (!window.postMessage) {
          alert('浏览器版本过低')
          return
        }
        return new SenseSpringPlugin(container, host)
      },
    }
  })()
}
function SenseSpringPlugin(container, host) {
  var that = this
  this.container = container
  this.frameName = 'spring_plugin_' + Math.floor(Math.random() * 10000)
  this.callback = {}
  this.host = 'http://127.0.0.1:28090'
  this.eventFunc = null
  if (host) {
    this.host = host
  }
}

SenseSpringPlugin.prototype.setCallback = function (name, func) {
  if (
    name != 'selected_callback' &&
    name != 'close_callback' &&
    name != 'open_callback'
  ) {
    alert('callback name not supported')
    return
  }
  this.callback[name] = func
}

SenseSpringPlugin.prototype.open = function (opt) {
  let router = {
    dataset: 'res/select-dataset',
    model: 'res/select-model',
    testTask: 'res/select-test-task',
    reflowDataset: 'res/select-reflow-dataset',
  }
  var iframeDom = document.createElement('iframe')
  iframeDom.style.border = '0'
  iframeDom.width = '100%'
  iframeDom.height = '100%'
  iframeDom.name = this.frameName
  iframeDom.id = 'frame_id_' + this.frameName
  iframeDom.allowtransparency = 'true'
  let src = ''
  Object.keys(opt).forEach((item, index) => {
    src =
      src + `${index === 0 ? '' : '&'}${item}=${encodeURIComponent(opt[item])}`
  })
  iframeDom.src = this.host + `/resource/${router[opt.type]}/?${src}`

  this.container.appendChild(iframeDom)
  if (this.callback.open_callback) {
    this.callback.open_callback('test open')
  }
  var that = this
  window.addEventListener(
    'message',
    (this.eventFunc = function (ev) {
      that.callbackMessage(ev)
    }),
    false
  )
}

SenseSpringPlugin.prototype.close = function () {
  this.container.removeChild(
    document.getElementById('frame_id_' + this.frameName)
  )
  if (this.callback.close_callback) {
    this.callback.close_callback('test close')
  }
  window.removeEventListener('message', this.eventFunc, false)
}

SenseSpringPlugin.prototype.callbackMessage = function (ev) {
  if (this.callback.selected_callback && typeof ev.data === 'string') {
    this.callback.selected_callback(JSON.parse(ev.data))
  }
}

export default SENSE_SPRING
