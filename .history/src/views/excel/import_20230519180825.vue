<template>
  <div class="uploadBox">
    <!-- 返回主页 -->
    <div class="homeBox">
      <router-link to="/export">
        <el-tooltip content="导出数据界面" placement="top">
          <i class="el-icon-tickets"></i>
        </el-tooltip>
      </router-link>
    </div>

    <!-- 上传文件按钮 -->
    <div class="buttonBox">
      <el-upload
        action
        accept=".xlsx,.xls"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="handle"
      >
        <el-button type="primary" slot="trigger">选取 Excel 文件</el-button>
      </el-upload>
      <el-button type="success" @click="submit">提交数据</el-button>
    </div>

    <!-- 解析出来的数据 -->
    <div class="tableBox" v-show="show">
      <h3>
        <i class="el-icon-info">
          以下是采集完成的数据，请您检查无误后，点击“提交数据”按钮上传至服务器</i
        >
      </h3>
      <el-table :data="tempData" border style="width: 100%" :height="height">
        <el-table-column
          prop="name"
          label="检测杆"
          min-width="50%"
        ></el-table-column>
        <el-table-column
          prop="phone"
          label="未检测杆"
          min-width="50%"
        ></el-table-column>
        <el-table-column
          prop="bad"
          label="缺陷杆"
          min-width="50%"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import xlsx from 'xlsx'
import { Loading } from 'element-ui'
import { readFile, character, delay } from '@/assets/js/utils'
export default {
  name: 'myUpload',
  data () {
    return {
      height: document.documentElement.clientHeight - 130,
      tempData: [],
      show: false
    }
  },
  methods: {
    // 采集 EXCEL 数据
    async handle (e) {
      const file = e.raw // 是否有文件
      if (!file) return

      this.show = false
      const loading = Loading.service({
        text: '请稍等片刻，正在处理中...',
        background: 'rgba(0,0,0,.5)'
      })

      await delay(300)

      // 读取FILE中的数据
      const data = await readFile(file)
      const workbook = xlsx.read(data, { type: 'binary' })
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const list = xlsx.utils.sheet_to_json(worksheet)
      // console.log(list)

      // 把读取出来的数据变为可以提交为服务器的数据格式
      const arr = []
      const oldData = JSON.parse(window.localStorage.getItem('excel') || '[]')
      let index = oldData.length
      list.forEach(item => {
        const obj = {}
        for (const key in character) {
          // eslint-disable-next-line no-prototype-builtins
          if (!character.hasOwnProperty(key)) break
          let v = character[key] // 将数据转换为服务器可读取的数据
          const text = v.text
          const type = v.type
          v = item[text] || ''
          // eslint-disable-next-line no-unused-expressions
          type === 'string' ? (v = String(v)) : null
          // eslint-disable-next-line no-unused-expressions
          type === 'number' ? (v = Number(v)) : null
          obj[key] = v
        }
        obj.id = ++index
        obj.time = new Date()
        arr.push(obj)
      })

      await delay(300)

      // 展示到页面中
      this.show = true
      // console.log(arr)
      this.tempData = arr
      loading.close()
    },
    success () {
      return this.$message({
        message: '文件上传成功',
        type: 'warning',
        showClose: true
      })
    },
    // 提交数据给服务器
    submit () {
      if (this.tempData.length <= 0) {
        return this.$message({
          message: '请您先选择 EXCEL 文件！',
          type: 'warning',
          showClose: true
        })
      }
      const oldData = JSON.parse(window.localStorage.getItem('excel') || '[]')
      const newData = [...oldData, ...this.tempData]
      window.localStorage.setItem('excel', JSON.stringify(newData))
    }
  }
}
</script>

<style lang="less" scoped>
.homeBox {
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 9999;
  font-size: 40px;
}

.buttonBox {
  padding: 15px;
  display: flex;
  width: 35%;
  justify-content: flex-start;
  & .el-button {
    margin-right: 20px !important;
  }
}

.tableBox {
  padding: 0 15px;
  h3 {
    font-size: 18px;
    color: #f56c6c;
    padding-bottom: 15px;
  }
}
</style>
