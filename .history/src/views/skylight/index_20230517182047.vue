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
