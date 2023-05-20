<template>
  <div class="container">
    <div class="sidebar">
      <div class="thecover">
        <el-button @click="drawer = true" style="margin-left: 0px; width: ">
          查看检测覆盖程度
        </el-button>
        <el-drawer
          title="线路检测覆盖程度"
          :visible.sync="drawer"
          :with-header="false"
          direction="ltr"
        >
          <div class="drawer-content">
            <p
              class="centered-text"
              style="font-weight: bold; font-size: 1.5rem"
            >
              线路检测覆盖程度
            </p>
            <p class="centered-text" style="color: red">未检测线路(重要)：</p>
            <p class="centered-text">沪蓉线 上行</p>
            <p class="centered-text">合福高铁线 上行</p>
            <p class="centered-text">合杭高铁线 上行</p>

            <p class="centered-text">合安高铁线 上行</p>
            <p class="centered-text">宁西线 下行</p>
            <p class="centered-text">阜六线 下行</p>
            <p class="centered-text">合蚌线 上行</p>
            <p class="centered-text">郑阜线 下行</p>
            <p class="centered-text">青阜线 上行</p>
            <p class="centered-text">商杭高铁线 上行</p>
            <p class="centered-text" style="color: green">已检测线路：</p>
            <p class="centered-text">沪蓉线 下行</p>
            <p class="centered-text">淮南正线 上行</p>
            <p class="centered-text">淮南正线 下行</p>
            <p class="centered-text">合福高铁线 下行</p>
            <p class="centered-text">合杭高铁线 下行</p>
            <p class="centered-text">安九高铁线 上行</p>
            <p class="centered-text">安九高铁线 下行</p>
            <p class="centered-text">合安高铁线 下行</p>
            <p class="centered-text">宁西线 上行</p>
            <p class="centered-text">阜六线 上行</p>
            <p class="centered-text">合蚌线 上行</p>
            <p class="centered-text">郑阜线 上行</p>
            <p class="centered-text">青阜线 上行</p>
            <p class="centered-text">京九线 上行</p>
            <p class="centered-text">京九线 下行</p>
            <p class="centered-text">商杭高铁线 上行</p>
            <p class="centered-text">合蚌线 上行</p>
            <p class="centered-text">合蚌线 下行</p>
          </div>
        </el-drawer>
      </div>
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
        <div class="buttonBox" style="width: 110px; text-align: center">
          <router-link to="/home">
            <el-tooltip content="退出" placement="top">
              <el-button type="danger" style="width: 110px; text-align: center"
                >退出</el-button
              >
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
      station: '请选择线路:',
      options: [
        {
          value: 'hurong',
          label: '沪蓉线',
          children: [
            {
              value: 'hrshangxing',
              label: '上行',
              children: [
                {
                  value: 'sd',
                  label: '三河-敦义堂'
                },
                {
                  value: 'dt',
                  label: '敦义堂-天堂寨'
                },
                {
                  value: 'jd',
                  label: '金寨-独山'
                },
                {
                  value: 'dl',
                  label: '独山-六安'
                },
                {
                  value: 'jh',
                  label: '集贤线路所-合肥南'
                },
                {
                  value: 'ch',
                  label: '巢北-黄庵'
                },
                {
                  value: 'hq',
                  label: '黄庵-全椒'
                },
                {
                  value: 'qt',
                  label: '全椒-亭子山'
                },
                {
                  value: 'qp',
                  label: '亭子山-浦口'
                }
              ]
            },
            {
              value: 'hrxiaxing',
              label: '下行',
              children: [
                {
                  value: 'pt',
                  label: '浦口-亭子山'
                },
                {
                  value: 'tq',
                  label: '亭子山-全椒'
                },
                {
                  value: 'qh',
                  label: '全椒-黄庵'
                },
                {
                  value: 'hc',
                  label: '黄庵-巢北'
                },
                {
                  value: 'hj',
                  label: '合肥南-集贤线路所'
                },
                {
                  value: 'hd',
                  label: '六安-独山'
                },
                {
                  value: 'dj',
                  label: '独山-金寨'
                },
                {
                  value: 'td',
                  label: '天堂寨-敦义堂'
                },
                {
                  value: 'ds',
                  label: '敦义堂-三河'
                }
              ]
            }
          ]
        },
        {
          value: 'huainan',
          label: '淮南正线',
          children: [
            {
              value: 'hnshangxing',
              label: '上行',
              children: [
                {
                  value: 'pt',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'tq',
                  label: '裕溪口 桐城闸'
                },
                {
                  value: 'qh',
                  label: ' 桐城闸 东关'
                },
                {
                  value: 'hc',
                  label: '东关双刘'
                },
                {
                  value: 'hj',
                  label: '双刘巢湖'
                },
                {
                  value: 'hd',
                  label: '六安-独山'
                },
                {
                  value: 'dj',
                  label: '独山-金寨'
                },
                {
                  value: 'td',
                  label: '天堂寨-敦义堂'
                },
                {
                  value: 'ds',
                  label: '敦义堂-三河'
                }
              ]
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
          label: '阜六线',
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
          label: '京九线',
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
        },
        {
          value: 'shuanglei',
          label: '双雷线',
          children: [
            {
              value: 'slshangxing',
              label: '上行'
            },
            {
              value: 'slxiaxing',
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
        '部位12',
        '部位13',
        '部位14',
        '部位15',
        '部位16'
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
        部位12: require('@/assets/images/p12.jpg'),
        部位13: require('@/assets/images/p6.jpg'),
        部位14: require('@/assets/images/p7.jpg'),
        部位15: require('@/assets/images/p8.jpg'),
        部位16: require('@/assets/images/p9.jpg')
      },
      currentPart: '部位1',
      currentPole: '杆号1',
      canvasWidth: 1331,
      canvasHeight: 673,
      selectedOption: 'undetected',
      isDetected: true,
      drawer: false
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
    open () {
      this.$confirm('此站点是否检测完成', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '此站点检测完成'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '未检测站点'
          })
        })
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
  padding-top: 10px;
}
.block {
  flex: 0;
  display: flex;
  padding-bottom: 15px;
}

.sidebar-header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
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
  top: 1px;
  right: 2px;
}
.thecover {
  flex: 0;
  justify-content: flex-start;
  padding-bottom: 5px;
  padding-left: 0px;
  padding-top: 0px;
}
.el-button {
  width: 153px;
}
.drawer-content {
  text-align: center;
}

.centered-text {
  text-align: center;
}
</style>
