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
            <p class="centered-text">已检测线路：</p>
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
            <p class="centered-text" style="color: red">未检测线路(重要)：</p>
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

  },
  mounted () {

  },
  computed: {

  },
  methods: {

  },
  watch: {

  }
}
</script>

<style scoped>

</style>
