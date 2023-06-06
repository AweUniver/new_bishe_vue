<template>
  <div class="maintenancePlanAdd">
    <div class="child-panel-title">
      <h2>图形标注</h2>
    </div>
    <div class="panel-body">
      <div class="demo">
        <canvas id="canvas" :width="width" :height="height"></canvas>
        <div class="draw-btn-group">
          <div :class="{active:drawType==''}" title="自由选择" @click="drawTypeChange('')">
            <i class="draw-icon icon-mouse"></i>
          </div>
          <div :class="{active:drawType=='text'}" title="文本输入框" @click="drawTypeChange('text')">
            <i class="draw-icon icon-2"></i>
          </div>
          <div :class="{active:drawType=='rectangle'}" title="画矩形" @click="drawTypeChange('rectangle')">
            <i class="draw-icon icon-4"></i>
          </div>
          <div @click="save" title="保存">
            <i class="draw-icon icon-save"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- <input type="file" @change="uploadImgChange" id="imgInput" accept="image/*" />
    <img id="img" :src="imgSrc" /> -->
  </div>
</template>
<script>
import { fabric } from 'fabric'
export default {
  name: 'App',
  data () {
    return {
      width: 1280,
      height: 720,
      rect: [],
      canvas: {},
      showMenu: false,
      x: '',
      y: '',

      mouseFrom: {},
      mouseTo: {},
      drawType: null, // 当前绘制图像的种类
      canvasObjectIndex: 0,
      textbox: null,
      rectangleLabel: 'warning',
      drawWidth: 2, // 笔触宽度
      color: '#E34F51', // 画笔颜色
      drawingObject: null, // 当前绘制对象
      moveCount: 1, // 绘制移动计数器
      doDrawing: false, // 绘制状态

      // polygon 相关参数
      polygonMode: false,
      pointArray: [],
      lineArray: [],
      activeShape: false,
      activeLine: '',
      line: {},

      delectKlass: {},
      imgFile: {},
      imgSrc: ''
    }
  },
  watch: {
    drawType () {
      this.canvas.selection = !this.drawType
    },
    width () {
      this.canvas.setWidth(this.width)
    },
    height () {
      this.canvas.setHeight(this.height)
    }
  },
  methods: {
    // 保存当前画布为png图片
    save () {
      const canvas = document.getElementById('canvas')
      let imgData = canvas.toDataURL('png')
      imgData = imgData.replace('image/png', 'image/octet-stream')

      // 下载后的问题名，可自由指定
      const filename = 'drawingboard_' + (new Date()).getTime() + '.' + 'png'
      this.saveFile(imgData, filename)
    },
    saveFile (data, filename) {
      // eslint-disable-next-line camelcase
      const save_link = document.createElement('a')
      save_link.href = data
      save_link.download = filename
      const event = document.createEvent('MouseEvents')
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      save_link.dispatchEvent(event)
    },
    uploadImg () {
      document.getElementById('imgInput').click()
    },
    // 从已渲染的DOM元素加载图片至canvas
    loadExpImg () {
      const imgElement = document.getElementById('expImg') // 声明我们的图片
      const imgInstance = new fabric.Image(imgElement, {
        selectable: false
        // zIndex:-99,
      })
      this.canvas.add(imgInstance)
    },
    // 从文件加载图片至canvas
    uploadImgChange () {
      // 获取文件
      const eleImportInput = document.getElementById('imgInput')
      this.imgFile = eleImportInput.files[0]
      // 从reader中获取选择文件的src
      if (/\.(jpe?g|png|gif)$/i.test(this.imgFile.name)) {
        const reader = new FileReader()
        const _this = this
        reader.addEventListener(
          'load',
          function () {
            _this.imgSrc = this.result
          },
          false
        )
        reader.readAsDataURL(this.imgFile)
      }
      const imgElement = document.getElementById('img') // 声明我们的图片

      imgElement.onload = () => {
        this.width = imgElement.width
        this.height = imgElement.height
        const imgInstance = new fabric.Image(imgElement, {
          zIndex: -1,
          selectable: false
        })
        this.canvas.add(imgInstance)
      }
    },
    // 开始绘制时，指定绘画种类
    drawTypeChange (e) {
      this.drawType = e
      this.canvas.skipTargetFind = !!e
      if (e === 'pen') {
        // isDrawingMode为true 才可以自由绘画
        this.canvas.isDrawingMode = true
      } else {
        this.canvas.isDrawingMode = false
      }
    },
    // 鼠标按下时触发
    mousedown (e) {
      // 记录鼠标按下时的坐标
      const xy = e.pointer || this.transformMouse(e.e.offsetX, e.e.offsetY)
      this.mouseFrom.x = xy.x
      this.mouseFrom.y = xy.y
      this.doDrawing = true
      if (this.drawType === 'text') {
        this.drawing()
      }

      if (this.textbox) {
        this.textbox.enterEditing()
        this.textbox.hiddenTextarea.focus()
      }
    },
    // 鼠标松开执行
    mouseup (e) {
      const xy = e.pointer || this.transformMouse(e.e.offsetX, e.e.offsetY)
      this.mouseTo.x = xy.x
      this.mouseTo.y = xy.y
      this.drawingObject = null
      this.moveCount = 1
      if (this.drawType !== 'polygon') {
        this.doDrawing = false
      }
    },

    // 鼠标移动过程中已经完成了绘制
    mousemove (e) {
      if (this.moveCount % 2 && !this.doDrawing) {
        // 减少绘制频率
        return
      }
      this.moveCount++
      const xy = e.pointer || this.transformMouse(e.e.offsetX, e.e.offsetY)
      this.mouseTo.x = xy.x
      this.mouseTo.y = xy.y
      // 多边形与文字框特殊处理
      if (this.drawType !== 'text') {
        this.drawing(e)
      }
    },
    deleteObj () {
      // eslint-disable-next-line array-callback-return
      this.canvas.getActiveObjects().map(item => {
        this.canvas.remove(item)
      })
    },
    transformMouse (mouseX, mouseY) {
      return { x: mouseX / 1, y: mouseY / 1 }
    },
    addPoint (e) {
      const random = Math.floor(Math.random() * 10000)
      const id = new Date().getTime() + random
      const circle = new fabric.Circle({
        radius: 5,
        fill: '#ffffff',
        stroke: '#333333',
        strokeWidth: 0.5,
        left: (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
        top: (e.pointer.y || e.e.layerY) / this.canvas.getZoom(),
        selectable: false,
        hasBorders: false,
        hasControls: false,
        originX: 'center',
        originY: 'center',
        id: id,
        objectCaching: false
      })
      if (this.pointArray.length === 0) {
        circle.set({
          fill: 'red'
        })
      }
      // eslint-disable-next-line no-var
      var points = [
        (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
        (e.pointer.y || e.e.layerY) / this.canvas.getZoom(),
        (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
        (e.pointer.y || e.e.layerY) / this.canvas.getZoom()
      ]

      this.line = new fabric.Line(points, {
        strokeWidth: 2,
        fill: '#999999',
        stroke: '#999999',
        class: 'line',
        originX: 'center',
        originY: 'center',
        selectable: false,
        hasBorders: false,
        hasControls: false,
        evented: false,

        objectCaching: false
      })
      if (this.activeShape) {
        const pos = this.canvas.getPointer(e.e)
        // eslint-disable-next-line no-var, no-redeclare
        var points = this.activeShape.get('points')
        points.push({
          x: pos.x,
          y: pos.y
        })
        // eslint-disable-next-line no-var
        var polygon = new fabric.Polygon(points, {
          stroke: '#333333',
          strokeWidth: 1,
          fill: '#cccccc',
          opacity: 0.3,

          selectable: false,
          hasBorders: false,
          hasControls: false,
          evented: false,
          objectCaching: false
        })
        this.canvas.remove(this.activeShape)
        this.canvas.add(polygon)
        this.activeShape = polygon
        this.canvas.renderAll()
      } else {
        const polyPoint = [
          {
            x: (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
            y: (e.pointer.y || e.e.layerY) / this.canvas.getZoom()
          }
        ]
        // eslint-disable-next-line no-var, no-redeclare
        var polygon = new fabric.Polygon(polyPoint, {
          stroke: '#333333',
          strokeWidth: 1,
          fill: '#cccccc',
          opacity: 0.3,

          selectable: false,
          hasBorders: false,
          hasControls: false,
          evented: false,
          objectCaching: false
        })
        this.activeShape = polygon
        this.canvas.add(polygon)
      }
      this.activeLine = this.line

      this.pointArray.push(circle)
      this.lineArray.push(this.line)
      this.canvas.add(this.line)
      this.canvas.add(circle)
    },

    drawing (e) {
      if (this.drawingObject) {
        this.canvas.remove(this.drawingObject)
      }
      let canvasObject = null
      const left = this.mouseFrom.x
      const top = this.mouseFrom.y
      const mouseFrom = this.mouseFrom
      const mouseTo = this.mouseTo
      switch (this.drawType) {
        case 'rectangle': // 长方形
          // 按shift时画正方型
          if (e.e.shiftKey) {
            mouseTo.x - left > mouseTo.y - top ? mouseTo.y = top + mouseTo.x - left : mouseTo.x = left + mouseTo.y - top
          }
          // eslint-disable-next-line no-var, no-redeclare
          var path =
            'M ' +
            mouseFrom.x +
            ' ' +
            mouseFrom.y +
            ' L ' +
            mouseTo.x +
            ' ' +
            mouseFrom.y +
            ' L ' +
            mouseTo.x +
            ' ' +
            mouseTo.y +
            ' L ' +
            mouseFrom.x +
            ' ' +
            mouseTo.y +
            ' L ' +
            mouseFrom.x +
            ' ' +
            mouseFrom.y +
            ' z'
          canvasObject = new fabric.Path(path, {
            left: left,
            top: top,
            stroke: this.color,
            strokeWidth: this.drawWidth,
            fill: 'rgba(255, 255, 255, 0)',
            hasControls: false
          })
          // 也可以使用fabric.Rect
          break
        case 'text': // 文本框
          this.textbox = new fabric.Textbox('', {
            left: mouseFrom.x,
            top: mouseFrom.y - 10,
            // width: 150,
            fontSize: 16,
            borderColor: this.color,
            fill: this.color,
            hasControls: false
          })
          this.canvas.add(this.textbox)
          this.textbox.enterEditing()
          this.textbox.hiddenTextarea.focus()
          break

        default:
          break
      }

      if (canvasObject) {
        // canvasObject.index = getCanvasObjectIndex();\
        this.canvas.add(canvasObject) // .setActiveObject(canvasObject)
        this.drawingObject = canvasObject
      }
    }
  },
  mounted () {
    this.canvas = new fabric.Canvas('canvas', {

    })
    this.canvas.selectionColor = 'rgba(0,0,0,0.05)'
    this.canvas.on('mouse:down', this.mousedown)
    this.canvas.on('mouse:move', this.mousemove)
    this.canvas.on('mouse:up', this.mouseup)

    document.onkeydown = e => {
      // 键盘 delect删除所选元素
      if (e.keyCode === 46) {
        this.deleteObj()
      }
      // ctrl+z 删除最近添加的元素
      if (e.keyCode === 90 && e.ctrlKey) {
        this.canvas.remove(
          this.canvas.getObjects()[this.canvas.getObjects().length - 1]
        )
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  flex-direction: column;
}
img,
input {
  display: none;
}
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
canvas {
  border: 1px dashed black;
}
.draw-btn-group {
  // width: 1270px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > div {
    background: #fafafa;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
    i {
      display: flex;
      background-repeat: no-repeat;
      background-size: 80%;
      background-position: 50% 50%;
      height: 30px;
      width: 30px;
    }

    .icon-2 {
      background-image: url("@/assets/icons/draw/2.png");
    }

    .icon-4 {
      background-image: url("@/assets/icons/draw/4.png");
      background-size: 75%;
    }
    .icon-5 {
      background-image: url("@/assets/icons/draw/5.png");
      background-size: 70%;
    }

    .icon-save {
      background-image: url("@/assets/icons/draw/save.png");
      background-size: 80%;
    }
    .icon-mouse {
      background-image: url("@/assets/icons/draw/mouse.png");
      background-size: 60%;
    }
  }
  .active {
    background: #eee;
  }
}
</style>
