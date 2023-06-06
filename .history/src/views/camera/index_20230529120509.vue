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
          value="dl"
          filterable
          :show-all-levels="false"
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
        <div class="buttonBox" style="width: 95px; text-align: center">
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
          id="myCanvas"
          :width="canvasWidth"
          :height="canvasHeight"
        ></canvas>
      </div>
      <div class="footer">当前选择：{{ currentPole }} - {{ currentPart }}</div>
      <div class="draw-btn-group">
        <div
          :class="{ active: drawType == '' }"
          title="自由选择"
          @click="drawTypeChange('')"
        >
          <i class="draw-icon icon-mouse"></i>
        </div>
        <div
          :class="{ active: drawType == 'text' }"
          title="文本输入框"
          @click="drawTypeChange('text')"
        >
          <i class="draw-icon icon-2"></i>
        </div>
        <div
          :class="{ active: drawType == 'rectangle' }"
          title="画矩形"
          @click="drawTypeChange('rectangle')"
        >
          <i class="draw-icon icon-4"></i>
        </div>
        <div @click="uploadImg" title="从文件选择图片上传">
          <i class="draw-icon icon-img"></i>
        </div>
        <div @click="save" title="保存">
          <i class="draw-icon icon-save"></i>
        </div>
        <div @click="loadExpImg" title="加载背景图">
          <i class="draw-icon icon-back"></i>
        </div>
      </div>
      <input
        type="file"
        @change="uploadImgChange"
        id="imgInput"
        accept="image/*"
        style="display: none"
      />
      <img id="img" :src="imgSrc" />
      <img id="expImg" src="@/assets/images/back.png" style="display: none" />
    </div>
  </div>
</template>

<script>
import { fabric } from 'fabric'
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
          value: 'anjiu',
          label: '安九高铁线',
          children: [
            {
              value: 'ajshangxing',
              label: '上行',
              children: [
                {
                  value: 'wd',
                  label: '湖州-安吉'
                },
                {
                  value: 'wx',
                  label: '安吉-广德南'
                },
                {
                  value: 'ds',
                  label: '广德南-郎溪南'
                },
                {
                  value: 'as',
                  label: '郎溪南-宣城'
                },
                {
                  value: 'sa',
                  label: '宣城-湾沚南'
                },
                {
                  value: 'ds',
                  label: '湾沚南-芜湖南'
                },
                {
                  value: 'cz',
                  label: '芜湖南-芜湖'
                },
                {
                  value: 'zy',
                  label: '芜湖-芜湖北'
                },
                {
                  value: 'qz',
                  label: '芜湖北-含山南'
                }
              ]
            },
            {
              value: 'ajxiaxing',
              label: '下行',
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
                  label: '湖州-安吉'
                },
                {
                  value: 'wx',
                  label: '安吉-广德南'
                },
                {
                  value: 'ds',
                  label: '广德南-郎溪南'
                },
                {
                  value: 'as',
                  label: '郎溪南-宣城'
                },
                {
                  value: 'sa',
                  label: '宣城-湾沚南'
                },
                {
                  value: 'ds',
                  label: '湾沚南-芜湖南'
                },
                {
                  value: 'cz',
                  label: '芜湖南-芜湖'
                },
                {
                  value: 'zy',
                  label: '芜湖-芜湖北'
                },
                {
                  value: 'qz',
                  label: '芜湖北-含山南'
                }
              ]
            },
            {
              value: 'haxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '雷麻店-梓树庄'
                },
                {
                  value: 'wx',
                  label: '梓树庄-六安普速场'
                },
                {
                  value: 'ds',
                  label: '六安普速场-六安线路所'
                },
                {
                  value: 'as',
                  label: '六安线路所-分路口'
                },
                {
                  value: 'sa',
                  label: '分路口-姚李庙'
                },
                {
                  value: 'ds',
                  label: '姚李庙-叶集'
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
                  label: '阜阳-颍南'
                },
                {
                  value: 'wx',
                  label: '颍南-三塔'
                },
                {
                  value: 'ds',
                  label: '三塔-阜南'
                },
                {
                  value: 'as',
                  label: '阜南-淮滨'
                },
                {
                  value: 'sa',
                  label: ' 淮滨-大包邑线路所'
                },
                {
                  value: 'ds',
                  label: '大包邑线路所-肥西京'
                }
              ]
            },
            {
              value: 'nxxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '阜阳-颍南'
                },
                {
                  value: 'wx',
                  label: '颍南-三塔'
                },
                {
                  value: 'ds',
                  label: '三塔-阜南'
                },
                {
                  value: 'as',
                  label: '阜南-淮滨'
                },
                {
                  value: 'sa',
                  label: ' 淮滨-大包邑线路所'
                },
                {
                  value: 'ds',
                  label: '大包邑线路所-肥西京'
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
                  label: '阜阳-颍南'
                },
                {
                  value: 'wx',
                  label: '颍南-三塔'
                },
                {
                  value: 'ds',
                  label: '三塔-阜南'
                },
                {
                  value: 'as',
                  label: '阜南-淮滨'
                },
                {
                  value: 'sa',
                  label: ' 淮滨-大包邑线路所'
                },
                {
                  value: 'ds',
                  label: '大包邑线路所-肥西京'
                }
              ]
            },
            {
              value: 'flxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '阜阳-颍南'
                },
                {
                  value: 'wx',
                  label: '颍南-三塔'
                },
                {
                  value: 'ds',
                  label: '三塔-阜南'
                },
                {
                  value: 'as',
                  label: '阜南-淮滨'
                },
                {
                  value: 'sa',
                  label: ' 淮滨-大包邑线路所'
                },
                {
                  value: 'ds',
                  label: '大包邑线路所-肥西京'
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
                  label: '雷麻店-梓树庄'
                },
                {
                  value: 'wx',
                  label: '梓树庄-六安普速场'
                },
                {
                  value: 'ds',
                  label: '六安普速场-六安线路所'
                },
                {
                  value: 'as',
                  label: '六安线路所-分路口'
                },
                {
                  value: 'sa',
                  label: '分路口-姚李庙'
                },
                {
                  value: 'ds',
                  label: '姚李庙-叶集'
                }
              ]
            },
            {
              value: 'hbxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '雷麻店-梓树庄'
                },
                {
                  value: 'wx',
                  label: '梓树庄-六安普速场'
                },
                {
                  value: 'ds',
                  label: '六安普速场-六安线路所'
                },
                {
                  value: 'as',
                  label: '六安线路所-分路口'
                },
                {
                  value: 'sa',
                  label: '分路口-姚李庙'
                },
                {
                  value: 'ds',
                  label: '姚李庙-叶集'
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
                  label: '雷麻店-梓树庄'
                },
                {
                  value: 'wx',
                  label: '梓树庄-六安普速场'
                },
                {
                  value: 'ds',
                  label: '六安普速场-六安线路所'
                },
                {
                  value: 'as',
                  label: '六安线路所-分路口'
                },
                {
                  value: 'sa',
                  label: '分路口-姚李庙'
                },
                {
                  value: 'ds',
                  label: '姚李庙-叶集'
                }
              ]
            },
            {
              value: 'zfxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '雷麻店-梓树庄'
                },
                {
                  value: 'wx',
                  label: '梓树庄-六安普速场'
                },
                {
                  value: 'ds',
                  label: '六安普速场-六安线路所'
                },
                {
                  value: 'as',
                  label: '六安线路所-分路口'
                },
                {
                  value: 'sa',
                  label: '分路口-姚李庙'
                },
                {
                  value: 'ds',
                  label: '姚李庙-叶集'
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
                  label: '雷麻店-梓树庄'
                },
                {
                  value: 'wx',
                  label: '梓树庄-六安普速场'
                },
                {
                  value: 'ds',
                  label: '六安普速场-六安线路所'
                },
                {
                  value: 'as',
                  label: '六安线路所-分路口'
                },
                {
                  value: 'sa',
                  label: '分路口-姚李庙'
                },
                {
                  value: 'ds',
                  label: '姚李庙-叶集'
                }
              ]
            },
            {
              value: 'qfxiaxing',
              label: '下行',
              children: [
                {
                  value: 'wd',
                  label: '雷麻店-梓树庄'
                },
                {
                  value: 'wx',
                  label: '梓树庄-六安普速场'
                },
                {
                  value: 'ds',
                  label: '六安普速场-六安线路所'
                },
                {
                  value: 'as',
                  label: '六安线路所-分路口'
                },
                {
                  value: 'sa',
                  label: '分路口-姚李庙'
                },
                {
                  value: 'ds',
                  label: '姚李庙-叶集'
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
                  label: '雷麻店-梓树庄'
                },
                {
                  value: 'wx',
                  label: '梓树庄-六安普速场'
                },
                {
                  value: 'ds',
                  label: '六安普速场-六安线路所'
                },
                {
                  value: 'as',
                  label: '六安线路所-分路口'
                },
                {
                  value: 'sa',
                  label: '分路口-姚李庙'
                },
                {
                  value: 'ds',
                  label: '姚李庙-叶集'
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
        '部位14'
        // '部位15',
        // '部位16'
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
        部位13: require('@/assets/images/p13.png'),
        部位14: require('@/assets/images/p14.png'),
        部位15: require('@/assets/images/p8.jpg'),
        部位16: require('@/assets/images/p9.jpg')
      },
      currentPart: '部位1',
      currentPole: '杆号1',

      selectedOption: 'undetected',
      isDetected: true,
      drawer: false,

      canvasWidth: 1481,
      canvasHeight: 673,

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

      delectKlass: {},
      imgFile: {},
      imgSrc: ''
    }
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
    // 控制杆切换图片
    handleChangePole (pole) {
      this.currentPole = pole
      const index = (this.poles.indexOf(pole) + 1) % 14
      this.currentPart = `部位${index + 1}`
      this.drawCanvas()
    },
    // 保存当前画布为png图片
    save () {
      const canvas = document.getElementById('myCanvas')
      let imgData = canvas.toDataURL('png')
      imgData = imgData.replace('image/png', 'image/octet-stream')

      // 下载后的问题名，可自由指定
      const filename = 'drawingboard_' + new Date().getTime() + '.' + 'png'
      this.saveFile(imgData, filename)
    },
    saveFile (data, filename) {
      // eslint-disable-next-line camelcase
      const save_link = document.createElement('a')
      save_link.href = data
      save_link.download = filename
      const event = document.createEvent('MouseEvents')
      event.initMouseEvent(
        'click',
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      )
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
        imgElement.width = this.width
        imgElement.height = this.height
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
    // 删除图形
    deleteObj () {
      // eslint-disable-next-line array-callback-return
      this.canvas.getActiveObjects().map((item) => {
        this.canvas.remove(item)
      })
    },
    transformMouse (mouseX, mouseY) {
      return { x: mouseX / 1, y: mouseY / 1 }
    },
    // 绘制图形标注
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
            mouseTo.x - left > mouseTo.y - top
              ? (mouseTo.y = top + mouseTo.x - left)
              : (mouseTo.x = left + mouseTo.y - top)
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
    },
    // 绘图
    drawCanvas () {
      // const canvas = this.$refs.myCanvas
      // const canvas = new fabric.Canvas('myCanvas')
      const canvas = new fabric.Canvas('myCanvas')
      const ctx = canvas.getContext('2d')
      canvas.dispose()
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
      const imageUrl = this.images[this.currentPart]
      img.src = imageUrl
    }
  },
  mounted () {
    // this.canvas = new fabric.Canvas('myCanvas', {})
    this.drawCanvas()
    this.canvas = new fabric.Canvas('myCanvas', {})
    this.canvas.selectionColor = 'rgba(0,0,0,0.05)'
    this.canvas.on('mouse:down', this.mousedown)
    this.canvas.on('mouse:move', this.mousemove)
    this.canvas.on('mouse:up', this.mouseup)

    document.onkeydown = (e) => {
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
  },
  watch: {
    currentPart () {
      this.drawCanvas()
    },
    drawType () {
      this.canvas.selection = !this.drawType
    }
  }
}
</script>

<style lang="less" scoped>
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
    .icon-img {
      background-image: url("@/assets/icons/draw/img.png");
      background-size: 80%;
    }
  }
  .active {
    background: #eee;
  }
}
</style>
