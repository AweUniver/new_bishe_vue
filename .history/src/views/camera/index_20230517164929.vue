<template>
  <div class="container">
    <div class="sidebar">
      <div class="sidebar-header">{{ station }}</div>
      <div class="block">
        <el-cascader
          placeholder="可搜索站台名称选择"
          :options="options"
          value="hrxiaxing"
          filterable
        ></el-cascader>
      </div>
      <div class="ischeck">
        <el-radio-group v-model="selectedOption" @change="handleOptionChange">
          <el-radio label="detected">已检测</el-radio>
          <el-radio label="undetected">未检测</el-radio>
        </el-radio-group>
      </div>

      <div class="toolbar">
        <el-button-group>
          <el-button
            v-for="pole in poles"
            :key="pole"
            @click="handleChangePole(pole)"
            >{{ pole }}</el-button
          >
        </el-button-group>
      </div>
    </div>
    <div class="main">
      <div class="header">
        <el-button-group>
          <el-button
            v-for="part in parts"
            :key="part"
            @click="currentPart = part"
            >{{ part }}</el-button
          >
        </el-button-group>
        <el-button-group>
          <el-button
            v-for="image in images[currentPoleIndex]"
            :key="image"
            @click="currentImage = image"
            >{{ image }}</el-button
          >
        </el-button-group>
        <div class="buttonBox">
          <router-link to="/home">
            <el-tooltip content="退出" placement="top">
              <el-button type="danger">退出</el-button>
            </el-tooltip>
          </router-link>
        </div>
      </div>
      <div class="canvas-container">
        <canvas
          ref="myCanvas"
          :width="canvasWidth"
          :height="canvasHeight"
        ></canvas>
      </div>
      <div class="footer">当前选择：{{ currentPole }} - {{ currentPart }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      station: '请选择站台:',
      options: [
        {
          value: 'hurong',
          label: '沪蓉线',
          children: [
            {
              value: 'hrshangxing',
              label: '上行'
            },
            {
              value: 'hrxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'huainan',
          label: '淮南正线',
          children: [
            {
              value: 'hnshangxing',
              label: '上行'
            },
            {
              value: 'hnxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'hefu',
          label: '合福高铁线',
          children: [
            {
              value: 'hfshangxing',
              label: '上行'
            },
            {
              value: 'hfxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'hehang',
          label: '合杭高铁线',
          children: [
            {
              value: 'hhshangxing',
              label: '上行'
            },
            {
              value: 'hhxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'anjiu',
          label: '安九高铁线',
          children: [
            {
              value: 'ajshangxing',
              label: '上行'
            },
            {
              value: 'ajxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'hean',
          label: '合安高铁线',
          children: [
            {
              value: 'hashangxing',
              label: '上行'
            },
            {
              value: 'haxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'ningxi',
          label: '宁西线',
          children: [
            {
              value: 'nxshangxing',
              label: '上行'
            },
            {
              value: 'nxxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'fuliu',
          label: '阜六上行线',
          children: [
            {
              value: 'flshangxing',
              label: '上行'
            },
            {
              value: 'flxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'hebeng',
          label: '合蚌线',
          children: [
            {
              value: 'hbshangxing',
              label: '上行'
            },
            {
              value: 'hbxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'zhengfu',
          label: '郑阜线',
          children: [
            {
              value: 'zfshangxing',
              label: '上行'
            },
            {
              value: 'zfxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'qingfu',
          label: '青阜线',
          children: [
            {
              value: 'qfshangxing',
              label: '上行'
            },
            {
              value: 'qfxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'jingjiu',
          label: '京九上行线',
          children: [
            {
              value: 'jjshangxing',
              label: '上行'
            },
            {
              value: 'jjxiaxing',
              label: '下行'
            }
          ]
        },
        {
          value: 'shanghang',
          label: '商杭高铁线',
          children: [
            {
              value: 'shshangxing',
              label: '上行'
            },
            {
              value: 'shxiaxing',
              label: '下行'
            }
          ]
        }
      ],
      poles: [
        '杆号01',
        '杆号02',
        '杆号03',
        '杆号04',
        '杆号05',
        '杆号06',
        '杆号07',
        '杆号08',
        '杆号09',
        '杆号10',
        '杆号11',
        '杆号12',
        '杆号13',
        '杆号14'
      ],
      parts: [
        '部位1',
        '部位2',
        '部位3',
        '部位4',
        '部位5',
        '部位6',
        '部位7',
        '部位8',
        '部位9',
        '部位10',
        '部位11',
        '部位12'
      ],
      images: {
        部位1: require('@/assets/images/p1.jpg'),
        部位2: require('@/assets/images/p2.jpg'),
        部位3: require('@/assets/images/p3.jpg'),
        部位4: require('@/assets/images/p4.jpg'),
        部位5: require('@/assets/images/p5.jpg'),
        部位6: require('@/assets/images/p6.jpg'),
        部位7: require('@/assets/images/p7.jpg'),
        部位8: require('@/assets/images/p8.jpg'),
        部位9: require('@/assets/images/p9.jpg'),
        部位10: require('@/assets/images/p10.jpg'),
        部位11: require('@/assets/images/p11.jpg'),
        部位12: require('@/assets/images/p12.jpg')
      },
      currentPart: '部位1',
      currentPole: '杆号1',
      canvasWidth: 1331,
      canvasHeight: 673,
      selectedOption: 'undetected',
      isDetected: false
    }
  },
  mounted () {
    this.drawCanvas()
  },
  computed: {
    currentPoleIndex () {
      return this.poles.indexOf(this.currentPole)
    },
    randomText () {
      return this.isDetected ? '已检测' : '未检测'
    }
  },
  methods: {
    // 是否检测
    handleOptionChange () {
      this.isDetected = this.selectedOption === 'detected'
    },
    // 绘图
    drawCanvas () {
      const canvas = this.$refs.myCanvas
      const ctx = canvas.getContext('2d')
      // Clear the canvas before drawing a new image
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const img = new Image()
      img.onload = function () {
        const canvasAspectRatio = canvas.width / canvas.height
        const imageAspectRatio = img.width / img.height
        let drawWidth = canvas.width
        let drawHeight = canvas.height
        if (canvasAspectRatio > imageAspectRatio) {
          drawHeight = canvas.width / imageAspectRatio
        } else {
          drawWidth = canvas.height * imageAspectRatio
        }
        ctx.drawImage(img, 0, 0, drawWidth, drawHeight)
      }
      // provide mock data for the image url
      const imageUrl = this.images[this.currentPart]
      // provide the image url to the img element
      img.src = imageUrl
    },
    handleChangePole (pole) {
      this.currentPole = pole
      const index = (this.poles.indexOf(pole) + 1) % 4
      this.currentPart = `部位${index + 1}`
      this.drawCanvas()
    }
  },
  watch: {
    currentPart () {
      this.drawCanvas()
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.sidebar {
  flex: 0 0 150px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dcdfe6;
  padding: 20px;
  padding-top: 50px;
}
.block {
  flex: 0;
  display: flex;
  padding-bottom: 15px;
}

.sidebar-header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.toolbar {
  margin-bottom: 20px;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
}

.canvas-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-button-group {
  margin-right: 10px;
}

.el-button--primary {
  background-color: #409eff;
  border-color: #409eff;
}

.el-button--primary:focus,
.el-button--primary:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

.el-tabs__item {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  margin-right: 10px;
}

canvas {
  max-width: 100%;
  max-height: 100%;
}
.buttonBox {
  position: fixed;
  top: 15px;
  right: 10px;
  z-index: 9999;
}
</style>
