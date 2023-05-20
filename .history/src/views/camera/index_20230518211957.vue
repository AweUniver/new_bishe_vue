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
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'hnxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '裕溪口-芜湖东'
                },
                {
                  value: 'wx',
                  label: '桐城闸-裕溪口'
                },
                {
                  value: 'ds',
                  label: '东关-桐城闸'
                },
                {
                  value: 'as',
                  label: '双刘-东关'
                },
                {
                  value: 'sa',
                  label: '巢湖-双刘'
                },
                {
                  value: 'ds',
                  label: '巢湖西-巢湖'
                },
                {
                  value: 'cz',
                  label: '中垾-巢湖西'
                },
                {
                  value: 'zy',
                  label: '洋河-中垾烔'
                },
                {
                  value: 'qz',
                  label: '撮镇-桥头集'
                }
              ]
            }
          ]
        },
        {
          value: 'hefu',
          label: '合福高铁线',
          children: [
            {
              value: 'hfshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '无为站-巢湖东'
                },
                {
                  value: 'wx',
                  label: '巢湖东-合福场'
                },
                {
                  value: 'ds',
                  label: '合福场-铜陵北'
                },
                {
                  value: 'as',
                  label: '陵北-合肥南'
                },
                {
                  value: 'sa',
                  label: '合肥南-长临河'
                },
                {
                  value: 'ds',
                  label: '长临河-蚌埠南'
                },
                {
                  value: 'cz',
                  label: '蚌埠南-合肥'
                },
                {
                  value: 'zy',
                  label: '合肥-淮南东'
                },
                {
                  value: 'qz',
                  label: '淮南东-水家湖'
                }
              ]
            },
            {
              value: 'hfxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '无为站-巢湖东'
                },
                {
                  value: 'wx',
                  label: '巢湖东-合福场'
                },
                {
                  value: 'ds',
                  label: '合福场-铜陵北'
                },
                {
                  value: 'as',
                  label: '陵北-合肥南'
                },
                {
                  value: 'sa',
                  label: '合肥南-长临河'
                },
                {
                  value: 'ds',
                  label: '长临河-蚌埠南'
                },
                {
                  value: 'cz',
                  label: '蚌埠南-合肥'
                },
                {
                  value: 'zy',
                  label: '合肥-淮南东'
                },
                {
                  value: 'qz',
                  label: '淮南东-水家湖'
                }
              ]
            }
          ]
        },
        {
          value: 'hehang',
          label: '合杭高铁线',
          children: [
            {
              value: 'hhshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '清凉寺-曹庙'
                },
                {
                  value: 'wx',
                  label: '曹庙-霍邱'
                },
                {
                  value: 'ds',
                  label: '霍邱-河口集'
                },
                {
                  value: 'as',
                  label: '河口集-白莲'
                },
                {
                  value: 'sa',
                  label: '白莲-关集'
                },
                {
                  value: 'ds',
                  label: '关集-冯井'
                },
                {
                  value: 'cz',
                  label: '冯井-临水'
                },
                {
                  value: 'zy',
                  label: '临水-南照'
                },
                {
                  value: 'qz',
                  label: '南照-六十里铺'
                }
              ]
            },
            {
              value: 'hhxiaxing',
              label: '下行',
            
            }
          ]
        },
        {
          value: 'anjiu',
          label: '安九高铁线',
          children: [
            {
              value: 'ajshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'ajxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            }
          ]
        },
        {
          value: 'hean',
          label: '合安高铁线',
          children: [
            {
              value: 'hashangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'haxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            }
          ]
        },
        {
          value: 'ningxi',
          label: '宁西线',
          children: [
            {
              value: 'nxshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'nxxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            }
          ]
        },
        {
          value: 'fuliu',
          label: '阜六线',
          children: [
            {
              value: 'flshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'flxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            }
          ]
        },
        {
          value: 'hebeng',
          label: '合蚌线',
          children: [
            {
              value: 'hbshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'hbxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            }
          ]
        },
        {
          value: 'zhengfu',
          label: '郑阜线',
          children: [
            {
              value: 'zfshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'zfxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            }
          ]
        },
        {
          value: 'qingfu',
          label: '青阜线',
          children: [
            {
              value: 'qfshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'qfxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            }
          ]
        },
        {
          value: 'jingjiu',
          label: '京九线',
          children: [
            {
              value: 'jjshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'jjxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            }
          ]
        },
        {
          value: 'shanghang',
          label: '商杭高铁线',
          children: [
            {
              value: 'shshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'shxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            }
          ]
        },
        {
          value: 'shuanglei',
          label: '双雷线',
          children: [
            {
              value: 'slshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            },
            {
              value: 'slxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '芜湖东-裕溪口'
                },
                {
                  value: 'wx',
                  label: '裕溪口-桐城闸'
                },
                {
                  value: 'ds',
                  label: '桐城闸-东关'
                },
                {
                  value: 'as',
                  label: '东关-双刘'
                },
                {
                  value: 'sa',
                  label: '双刘-巢湖'
                },
                {
                  value: 'ds',
                  label: '巢湖-巢湖西'
                },
                {
                  value: 'cz',
                  label: '巢湖西-中垾'
                },
                {
                  value: 'zy',
                  label: '中垾烔-洋河'
                },
                {
                  value: 'qz',
                  label: '桥头集-撮镇'
                }
              ]
            }
          ]
        }
      ],
    }
  },
  mounted () {
    this.drawCanvas()
  },
  computed: {
    currentPoleIndex () {
      return this.poles.indexOf(this.currentPole)
    },
  },
,
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
