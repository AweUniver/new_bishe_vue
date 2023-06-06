<template>
  <div id="allmap">
    <div id="screen-header" style="height: 60px; background-color: #333">
      <table
        ref="hrdiv"
        style="
          height: 40%;
          width: 40%;
          position: absolute;
          top: 80px;
          left: 80px;
          right: 80px;
          bottom: 80px;
          margin: auto;
          background-color: rgb(170, 168, 168);
          z-index: 9998;
          display: none;
          border: 7px solid white;
        "
      >
        <button
          ref="hrclose"
          style="left: 553px; position: absolute; cursor: pointer"
        >
          关闭
        </button>
        <h1 style="text-align: center; background-color: #333; color: white">
          线路查看
        </h1>
        <button
          ref="hrcheck"
          style="
            top: 60px;
            left: 140px;
            position: absolute;
            background-color: #333;
            color: white;
            border: 1px solid white;
            height: 35px;
            width: 300px;
            font-size: 20px;
            cursor: pointer;
          "
        >
          监测路线显示</button
        ><button
          ref="hrqkopen"
          style="
            top: 120px;
            left: 140px;
            position: absolute;
            background-color: #333;
            color: white;
            border: 1px solid white;
            height: 35px;
            width: 300px;
            font-size: 20px;
            cursor: pointer;
          "
        >
          监测情况显示</button
        ><button
          ref="hrrisk"
          style="
            top: 180px;
            left: 140px;
            position: absolute;
            background-color: #333;
            color: white;
            border: 1px solid white;
            height: 35px;
            width: 300px;
            font-size: 20px;
            cursor: pointer;
          "
        >
          风险杆查看</button
        ><button
          ref="hrenter"
          style="
            top: 240px;
            left: 140px;
            position: absolute;
            background-color: #333;
            color: white;
            border: 1px solid white;
            height: 35px;
            width: 300px;
            font-size: 20px;
            cursor: pointer;
          "
        >
          监测入口
        </button>
      </table>
      <form
        ref="hrriskform"
        style="
          height: 40%;
          width: 20%;
          position: absolute;
          top: 80px;
          left: 80px;
          right: 80px;
          bottom: 80px;
          margin: auto;
          background-color: rgb(170, 168, 168);
          z-index: 9998;
          display: none;
          border: 7px solid white;
        "
      >
        <input type="month" id="hrriskdate" /><button ref="hrriskDate">
          确定</button
        >请选择日期
        <button
          ref="hrriskclose"
          style="left: 267px; position: absolute; cursor: pointer"
        >
          关闭
        </button>
      </form>
      <form
        ref="checkform"
        style="
          height: 40%;
          width: 20%;
          position: absolute;
          top: 80px;
          left: 80px;
          right: 80px;
          bottom: 80px;
          margin: auto;
          background-color: rgb(170, 168, 168);
          z-index: 9998;
          display: none;
          border: 7px solid white;
          font-size: 20px;
        "
      >
        <input type="month" id="hrcheckDate" /><button ref="hrcheckDate">
          确定</button
        >请选择月份
        <button
          ref="checkclose"
          style="left: 267px; position: absolute; cursor: pointer"
        >
          关闭
        </button>
        <p>
          一月--绿色 二月--蓝色<br />
          三月--灰色 四月--紫色<br />
          五月--黄色 六月--粉色<br />
          七月--白色 八月--红色<br />
          九月--黑色 十月--橙色<br />
          十一月--咖啡色 十二月--柠檬色<br />
        </p>
      </form>
      <div
        ref="hrqkdiv"
        style="
          height: 80%;
          width: 80%;
          position: absolute;
          top: 80px;
          left: 80px;
          right: 80px;
          bottom: 80px;
          margin: auto;
          background-color: rgb(170, 168, 168);
          z-index: 9998;
          display: none;
          border: 7px solid white;
        "
      >
        <button
          ref="hrqkclose"
          style="left: 97%; position: absolute; cursor: pointer; z-index: 99999"
        >
          关闭
        </button>
        <button ref="Januarybtn">一月</button>
        <button ref="Februarybtn">二月</button>
        <button ref="Marchbtn">三月</button>
        <button ref="Aprilbtn">四月</button>
        <button ref="Maybtn">五月</button>
        <button ref="Junebtn">六月</button>
        <button ref="Julybtn">七月</button>
        <button ref="Augustbtn">八月</button>
        <button ref="Septemberbtn">九月</button>
        <button ref="Octoberbtn">十月</button>
        <button ref="Novemberbtn">十一月</button>
        <button ref="Decemberbtn">十二月</button>
        <p ref="Januarydata" style="display: none">
          "2022-01-08"
          "2022_01_08_00_34_日兰高速（带联络线）_上行_庄寨站_泰安-曲阜东京沪场(联络线
          <br />
          "2022-01-09" "2022_01_09_00_06_京沪高铁线_上行_曲阜东站_崔马庄线路所"
          <br />
          "2022-01-09" "2022_01_09_01_09_京沪联络线_上行_崔马庄线路所_济南站"
          <br />
          "2022-01-09" "2022_01_09_01_38_京济联络线_上行_济南站_动车所"
        </p>
        <p ref="Februarydata" style="display: none">
          "2022-02-23"
          "2022_02_23_22_17_09_巢湖东_芜湖_巢湖东合杭场-芜湖站_下行"
          <br />
          "2022-02-23"
          "2022_02_23_22_17_20_芜湖_巢湖东_芜湖站-巢湖东合杭场_上行"
        </p>
        <p ref="Marchdata" style="display: none">
          "2022-03-06" "2022_03_06_22_10_19_沪蓉_全椒站-浦口站_上行" <br />
          "2022-03-06" "2022_03_06_22_15_17_沪蓉_浦口站-全椒站_下行" <br />
          "2022-03-05" "2022_03_05_22_54_02_沪蓉_长安集站-全椒站_上行"<br />
          "2022-03-05" "2022_03_05_14_02_00_双雷线_南岗站-双墩集站_上行"<br />
          "2022-03-05" "2022_03_05_14_04_01_双雷线_双墩集站-雷麻店站_下行"<br />
          "2022-03-05" "2022_03_05_22_54_02_沪蓉_长安集站-全椒站_上行"<br />
          "2022-03-06" "2022_03_06_22_10_19_沪蓉_全椒站-浦口站_上行" <br />
          "2022-03-06" "2022_03_06_22_15_17_沪蓉_浦口站-全椒站_下行" <br />
          "2022-03-07" "2022_03_07_22_48_10_沪蓉_全椒站-合肥南站_下行" <br />
          "2022-03-08"
          "2022_03_08_23_07_58_合肥南_凤台南_合肥南合福场-凤台南站_上行"<br />
          "2022-03-31"
          "2022_03_31_23_06_04_合安高铁_下行_肥西京港场-桐城南站_下行"<br />
        </p>
        <p ref="Aprildata" style="display: none">
          "2022-04-05"
          "2022_04_05_21_08_30_安九高铁_下行_太湖南站-黄梅东站_下行" <br />
          "2022-04-05" "2022_04_05_21_08_57_安九高铁_黄梅东站-安庆西站_上行"
          <br />
          "2022-04-05" "2022_04_05_23_36_56_安九高铁_黄梅东站-安庆西站_上行"<br />
          "2022-04-12"
          "2022_04_12_23_38_35_合安高铁_桐城东站-肥西京港场_上行"<br />
        </p>
        <p ref="Maydata" style="display: none">本月无监测任务</p>
        <p ref="Junedata" style="display: none">本月无监测任务</p>
        <p ref="Julydata" style="display: none">
          "2022-07-06"
          "2022_07_06_23_13_43_肥西联络线基础数据_集贤路线路所-肥西京港场_上行"<br />
          "2022-07-06"
          "2022_07_06_23_15_51_合安高铁基础数据_肥西京港场-安庆西站_下行"
        </p>
        <p ref="Augustdata" style="display: none">
          "2022-08-10"
          "2022_08_10_23_26_02_合杭高铁_下行_含山南站-芜湖北站_下行"<br />
          "2022-08-10"
          "2022_08_10_23_26_42_芜湖_巢湖东_芜湖北站-巢湖东合杭场_上行"<br />
          "2022-08-11"
          "2022_08_11_22_30_49_巢湖东_肥东_巢湖东合杭场-肥东站_上行"<br />
          "2022-08-11" "2022_08_11_23_25_54_沪蓉_肥东站-合肥南站_下行"<br />
          "2022-08-11" "2022_08_11_23_55_21_郑阜线_界首南站-临泉站_上行"<br />
          "2022-08-12" "2022_08_12_00_01_20_青阜线_上行_阜阳北站-插花站_上行"<br />
          "2022-08-12" "2022_08_12_00_01_27_合蚌_上行_合肥站-水家湖站_上行"<br />
          "2022-08-12" "2022_08_12_00_21_19_合蚌_上行_合肥站-合肥北城站_上行"<br />
          "2022-08-12"
          "2022_08_12_00_21_25_郑阜线_界首南站-阜阳西郑阜场_上行"<br />
          "2022-08-12"
          "2022_08_12_00_40_17_凤台南_亳州南_上行_凤台南站-亳州南站_上行"<br />
          "2022-08-12" "2022_08_12_00_40_23_合蚌_上行_合肥站-蚌埠南站_上行"<br />
          "2022-08-18"
          "2022_08_18_00_50_22_格库线单线_下行_若羌-央塔克至阿拉干_下行"<br />
          "2022-08-18"
          "2022_08_18_06_07_09_格库线_上行_阿拉干至央塔克-若羌_上行"<br />
        </p>
        <p ref="Septemberdata" style="display: none">
          "2022-09-20"
          "2022_09_20_23_26_52_阜阳西郑阜场_界首南_阜阳西郑阜场-界首南站_上行"<br />
          "2022-09-20"
          "2022_09_20_23_33_08_界首南_阜阳西郑阜场_界首南站-阜阳西郑阜场_下行"<br />
          "2022-09-20"
          "2022_09_20_23_36_16_郑阜联络线下行_阜阳西郑阜场-阜阳西线路所_下行"<br />
          "2022-09-20"
          "2022_09_20_23_38_49_商杭高铁_下行_阜阳西线路所-颍上北站_下行"<br />
          "2022-09-20"
          "2022_09_20_23_39_16_京港高铁北段上行_qd_颍上北站-阜阳西线路所_上行"<br />
          "2022-09-20"
          "2022_09_20_23_39_21_郑阜联络线上行_阜阳西线路所-阜阳西郑阜场_上行"<br />
          "2022-09-21"
          "2022_09_21_22_53_57_京港高铁北段下行_qd_阜阳西京港场-淮南南站_下行"<br />
          "2022-09-22"
          "2022_09_22_22_13_09_郑阜联络线上行_阜阳西线路所-阜阳西郑阜场_上行"<br />
          "2022-09-22"
          "2022_09_22_22_17_30_京港高铁北段下行_qd_淮南南站-合肥北城站_下行"<br />
          "2022-09-22"
          "2022_09_22_23_22_55_合福高铁下行_qd_合肥北城站-合肥南合福场_下行"<br />
          "2022-09-25" "2022_09_25_17_47_58_阜淮_下行_阜阳站-淮南站_下行"<br />
          "2022-09-25"
          "2022_09_25_23_24_27_合福高铁_合肥北城站-长临河站_上行"<br />
          "2022-09-26"
          "2022_09_26_02_19_53_合福高铁下行2_长临河站-合肥北城站_下行"<br />
          "2022-09-26"
          "2022_09_26_02_45_05_合福高铁下行2_长临河站-合肥北城站_下行"
        </p>
        <p ref="Octoberdata" style="display: none">
          "2022-10-10" "2022_10_10_00_28_29_沪蓉_下行_浦口站-全椒站_下行"<br />
          "2022-10-10" "2022_10_10_22_44_25_沪蓉_下行_全椒站-合肥南站_下行"
        </p>
        <p ref="Novemberdata" style="display: none">本月无监测任务</p>
        <p ref="Decemberdata" style="display: none">本月无监测任务</p>
      </div>
      <span
        id="title"
        style="
          font-family: 黑体;
          font-weight: bold;
          font-size: 40px;
          float: right;
          color: #fff;
        "
        >铁路监测系统</span
      >
      <ul class="navlist">
        <li class="btli">
          <a href="#">道路展示</a>
          <ul class="droplist">
            <li><a ref="hrline" href="#">沪蓉线</a></li>
            <li><a ref="hnzline" href="#">淮南正线</a></li>
            <li><a ref="hfline" href="#">合福高铁线</a></li>
            <li><a ref="hhline" href="#">合杭高铁线</a></li>
            <li><a ref="ajline" href="#">安九高铁线</a></li>
            <li><a ref="haline" href="#">合安高铁线</a></li>
            <li><a ref="nxline" href="#">宁西线</a></li>
            <li><a ref="flline" href="#">阜六上行线</a></li>
            <li><a ref="hbline" href="#">合蚌线</a></li>
            <li><a ref="zfline" href="#">郑阜线</a></li>
            <li><a ref="qfline" href="#">青阜线</a></li>
            <li><a ref="jjline" href="#">京九上行线</a></li>
            <li><a ref="shline" href="#">商杭高铁线</a></li>
          </ul>
        </li>
        <li class="btli"><a ref="task" href="#">监测情况</a></li>
        <li class="btli"><a href="#">任务</a></li>
      </ul>
    </div>
    <div
      id="screen-body"
      style="height: 100%; width: 100%; position: relative"
    ></div>
  </div>
</template>
<script>
import $ from 'jquery'
let BMapGL = {}
let map = {}
export default {
  data () {
    return {
      allData: null, // 从服务器获取的数据 (新疆部分)
      allData1: null, // 数据（淮南正高铁站点）
      allData2: null, // 数据（合杭高铁站点）
      allData3: null, // 数据（安九高铁站点）
      allData4: null, // 数据（合安高铁站点）
      allData5: null, // 数据（宁西高铁站点）
      allData6: null, // 数据（阜六上行高铁站点）
      allData7: null, // 数据（合蚌高铁站点）
      allData9: null, // 数据（青阜高铁站点）
      allData10: null, // 数据（京九高铁站点）
      allData11: null, // 数据（商杭高铁站点）
      allData12: null, // 数据（根据月份获得监测路线）
      allData13: null, // 数据（站点经纬度索引）
      allData14: null, // 数据（线路监测情况展示）
      hrdivpoint: 1, // 点击沪蓉线显示与否
      hrpoint: 1, // 控制沪蓉线显示与否的数字
      hnzpoint: 1, // 控制淮南线显示与否的数字
      hfpoint: 1, // 控制合福线显示与否的数字
      hhpoint: 1, // 控制合杭线显示与否的数字
      ajpoint: 1, // 控制安九线显示与否的数字
      hapoint: 1, // 控制合安线显示与否的数字
      nxpoint: 1, // 控制宁西线显示与否的数字
      flpoint: 1, // 控制阜六上行线显示与否的数字
      hbpoint: 1, // 控制合蚌线显示与否的数字
      qfpoint: 1, // 控制青阜线显示与否的数字
      jjpoint: 1, // 控制京九线显示与否的数字
      shpoint: 1, // 控制商杭线显示与否的数字
      hrwindow: 0, // 控制沪蓉窗口显示与否的数字
      DataofJanuary: 0, // 一月数据显示与否的数字
      DataofFebruary: 0, // 二月数据显示与否的数字
      DataofMarch: 0, // 三月数据显示与否的数字
      DataofApril: 0, // 四月数据显示与否的数字
      DataofMay: 0, // 五月数据显示与否的数字
      DataofJune: 0, // 六月数据显示与否的数字
      DataofJuly: 0, // 七月数据显示与否的数字
      DataofAugust: 0, // 八月数据显示与否的数字
      DataofSeptember: 0, // 九月数据显示与否的数字
      DataofOctober: 0, // 十月数据显示与否的数字
      DataofNovember: 0, // 十一月数据显示与否的数字
      DataofDecember: 0, // 十二月数据显示与否的数字
      hrpolyline: null,
      hnzpolyline: null,
      hfpolyline: null,
      hhzpolyline: null,
      ajpolyline: null,
      hapolyline: null,
      nxpolyline: null,
      flpolyline: null,
      hbpolyline: null,
      zfpolyline: null,
      qfpolyline: null,
      jjpolyline: null,
      shpolyline: null
    }
  },
  methods: {
    loadJScript () {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src =
        '//api.map.baidu.com/api?type=webgl&v=1.0&ak=caZngq3C5nYUPasTfUGx2ga8xpGOmApE'
      script.onload = () => {
        this.init()
      }
      document.body.appendChild(script)
    },
    init () {
      BMapGL = window.BMapGL
      map = new BMapGL.Map('screen-body')
      const point = new BMapGL.Point(117.290345, 31.797813) // 创建点坐标
      map.centerAndZoom(point, 10)
      map.enableScrollWheelZoom() // 启用滚轮放大缩小
      const scaleCtrl = new BMapGL.ScaleControl() // 添加比例尺控件
      map.addControl(scaleCtrl)
      const zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
      map.addControl(zoomCtrl)
    },
    addMarker () {
      // 宁荣线高铁站点
      const point1 = new BMapGL.Point(115.220265, 31.271502)
      const point2 = new BMapGL.Point(115.505067, 31.329013)
      const point3 = new BMapGL.Point(115.727932, 31.45511)
      const point4 = new BMapGL.Point(115.975584, 31.625827)
      const point5 = new BMapGL.Point(116.499665, 31.714959)
      const point6 = new BMapGL.Point(117.290345, 31.797813)
      const point7 = new BMapGL.Point(117.350802, 31.910223)
      const point8 = new BMapGL.Point(117.804539, 31.970223)
      const point9 = new BMapGL.Point(118.282951, 32.060217)
      // 宁荣线第一段杆
      const marker10 = new BMapGL.Marker(new BMapGL.Point(115.331975, 31.288704))
      const marker11 = new BMapGL.Marker(new BMapGL.Point(115.342275, 31.289878))
      const marker12 = new BMapGL.Marker(new BMapGL.Point(115.352574, 31.290464))
      const marker13 = new BMapGL.Marker(new BMapGL.Point(115.366994, 31.292225))
      const marker14 = new BMapGL.Marker(new BMapGL.Point(115.382787, 31.293985))
      const marker15 = new BMapGL.Marker(new BMapGL.Point(115.39446, 31.295159))
      const marker16 = new BMapGL.Marker(new BMapGL.Point(115.40476, 31.295745))
      const marker17 = new BMapGL.Marker(new BMapGL.Point(115.419866, 31.296919))
      // (合福高铁线)marker99
      const marker18 = new BMapGL.Marker(new BMapGL.Point(118.028272, 31.018741))
      const marker19 = new BMapGL.Marker(new BMapGL.Point(117.97621, 31.310748))
      const marker20 = new BMapGL.Marker(new BMapGL.Point(117.489384, 31.704361))
      const marker21 = new BMapGL.Marker(new BMapGL.Point(117.290345, 31.797813))
      const marker22 = new BMapGL.Marker(new BMapGL.Point(117.222981, 31.838418))
      const marker23 = new BMapGL.Marker(new BMapGL.Point(117.259917, 32.069632))
      // 风险杆初始化
      // 一月 99-100
      const point99 = new BMapGL.Point(116.043753, 30.124291)
      const marker99 = new BMapGL.Marker(point99, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts99 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0134', // 信息窗口标题
        message: '信息'
      }
      const infoWindow99 = new BMapGL.InfoWindow('监测异常', opts99) // 创建信息窗口对象
      marker99.addEventListener('click', function () {
        map.openInfoWindow(infoWindow99, point99) // 开启信息窗口
      })
      const point100 = new BMapGL.Point(116.436009, 30.467774)
      const marker100 = new BMapGL.Marker(point100, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts100 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0167', // 信息窗口标题
        message: '信息'
      }
      const infoWindow100 = new BMapGL.InfoWindow('监测异常', opts100) // 创建信息窗口对象
      marker100.addEventListener('click', function () {
        map.openInfoWindow(infoWindow100, point100) // 开启信息窗口
      })
      // 二月 101
      const point101 = new BMapGL.Point(115.993703, 32.60766)
      const marker101 = new BMapGL.Marker(point101, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts101 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0289', // 信息窗口标题
        message: '信息'
      }
      const infoWindow101 = new BMapGL.InfoWindow('监测异常', opts101) // 创建信息窗口对象
      marker101.addEventListener('click', function () {
        map.openInfoWindow(infoWindow101, point101) // 开启信息窗口
      })
      // 三月 102-105
      const point102 = new BMapGL.Point(116.122096, 32.193259)
      const marker102 = new BMapGL.Marker(point102, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts102 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0388', // 信息窗口标题
        message: '信息'
      }
      const infoWindow102 = new BMapGL.InfoWindow('监测异常', opts102) // 创建信息窗口对象
      marker102.addEventListener('click', function () {
        map.openInfoWindow(infoWindow102, point102) // 开启信息窗口
      })
      const point103 = new BMapGL.Point(116.11667, 32.166013)
      const marker103 = new BMapGL.Marker(point103, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts103 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0390', // 信息窗口标题
        message: '信息'
      }
      const infoWindow103 = new BMapGL.InfoWindow('监测异常', opts103) // 创建信息窗口对象
      marker103.addEventListener('click', function () {
        map.openInfoWindow(infoWindow103, point103) // 开启信息窗口
      })
      const point104 = new BMapGL.Point(116.141078, 32.079565)
      const marker104 = new BMapGL.Marker(point104, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts104 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0321', // 信息窗口标题
        message: '信息'
      }
      const infoWindow104 = new BMapGL.InfoWindow('监测异常', opts104) // 创建信息窗口对象
      marker104.addEventListener('click', function () {
        map.openInfoWindow(infoWindow104, point104) // 开启信息窗口
      })
      const point105 = new BMapGL.Point(115.724969, 32.780307)
      const marker105 = new BMapGL.Marker(point105, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts105 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0350', // 信息窗口标题
        message: '信息'
      }
      const infoWindow105 = new BMapGL.InfoWindow('监测异常', opts105) // 创建信息窗口对象
      marker105.addEventListener('click', function () {
        map.openInfoWindow(infoWindow105, point105) // 开启信息窗口
      })
      // 四月 106
      const point106 = new BMapGL.Point(116.138569, 31.782446)
      const marker106 = new BMapGL.Marker(point106, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts106 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0459', // 信息窗口标题
        message: '信息'
      }
      const infoWindow106 = new BMapGL.InfoWindow('监测异常', opts106) // 创建信息窗口对象
      marker106.addEventListener('click', function () {
        map.openInfoWindow(infoWindow106, point106) // 开启信息窗口
      })
      // 七月 106-107
      const point107 = new BMapGL.Point(115.733087, 33.138822)
      const marker107 = new BMapGL.Marker(point107, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts107 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0744', // 信息窗口标题
        message: '信息'
      }
      const infoWindow107 = new BMapGL.InfoWindow('监测异常', opts107) // 创建信息窗口对象
      marker107.addEventListener('click', function () {
        map.openInfoWindow(infoWindow107, point107) // 开启信息窗口
      })
      const point108 = new BMapGL.Point(116.232723, 32.682506)
      const marker108 = new BMapGL.Marker(point108, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts108 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0720', // 信息窗口标题
        message: '信息'
      }
      const infoWindow108 = new BMapGL.InfoWindow('监测异常', opts108) // 创建信息窗口对象
      marker108.addEventListener('click', function () {
        map.openInfoWindow(infoWindow108, point108) // 开启信息窗口
      })
      // 八月 109-114
      const point109 = new BMapGL.Point(117.16694, 32.543522)
      const marker109 = new BMapGL.Marker(point109, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts109 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0899', // 信息窗口标题
        message: '信息'
      }
      const infoWindow109 = new BMapGL.InfoWindow('监测异常', opts109) // 创建信息窗口对象
      marker109.addEventListener('click', function () {
        map.openInfoWindow(infoWindow109, point109) // 开启信息窗口
      })
      const point110 = new BMapGL.Point(117.250862, 32.107413)
      const marker110 = new BMapGL.Marker(point110, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts110 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0810', // 信息窗口标题
        message: '信息'
      }
      const infoWindow110 = new BMapGL.InfoWindow('监测异常', opts110) // 创建信息窗口对象
      marker110.addEventListener('click', function () {
        map.openInfoWindow(infoWindow110, point110) // 开启信息窗口
      })
      const point111 = new BMapGL.Point(115.716029, 34.364851)
      const marker111 = new BMapGL.Marker(point111, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts111 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0820', // 信息窗口标题
        message: '信息'
      }
      const infoWindow111 = new BMapGL.InfoWindow('监测异常', opts111) // 创建信息窗口对象
      marker111.addEventListener('click', function () {
        map.openInfoWindow(infoWindow111, point111) // 开启信息窗口
      })
      const point112 = new BMapGL.Point(115.817902, 33.520225)
      const marker112 = new BMapGL.Marker(point112, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts112 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0821', // 信息窗口标题
        message: '信息'
      }
      const infoWindow112 = new BMapGL.InfoWindow('监测异常', opts112) // 创建信息窗口对象
      marker112.addEventListener('click', function () {
        map.openInfoWindow(infoWindow112, point112) // 开启信息窗口
      })
      const point113 = new BMapGL.Point(115.759252, 32.891118)
      const marker113 = new BMapGL.Marker(point113, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts113 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0839', // 信息窗口标题
        message: '信息'
      }
      const infoWindow113 = new BMapGL.InfoWindow('监测异常', opts113) // 创建信息窗口对象
      marker113.addEventListener('click', function () {
        map.openInfoWindow(infoWindow113, point113) // 开启信息窗口
      })
      const point114 = new BMapGL.Point(116.631876, 32.641915)
      const marker114 = new BMapGL.Marker(point114, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts114 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0831', // 信息窗口标题
        message: '信息'
      }
      const infoWindow114 = new BMapGL.InfoWindow('监测异常', opts114) // 创建信息窗口对象
      marker114.addEventListener('click', function () {
        map.openInfoWindow(infoWindow114, point114) // 开启信息窗口
      })
      // 九月 115-118
      const point115 = new BMapGL.Point(115.730567, 32.784436)
      const marker115 = new BMapGL.Marker(point115, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts115 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0922', // 信息窗口标题
        message: '信息'
      }
      const infoWindow115 = new BMapGL.InfoWindow('监测异常', opts115) // 创建信息窗口对象
      marker115.addEventListener('click', function () {
        map.openInfoWindow(infoWindow115, point115) // 开启信息窗口
      })
      const point116 = new BMapGL.Point(115.876708, 32.969211)
      const marker116 = new BMapGL.Marker(point116, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts116 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0948', // 信息窗口标题
        message: '信息'
      }
      const infoWindow116 = new BMapGL.InfoWindow('监测异常', opts116) // 创建信息窗口对象
      marker116.addEventListener('click', function () {
        map.openInfoWindow(infoWindow116, point116) // 开启信息窗口
      })
      const point117 = new BMapGL.Point(115.860345, 33.080084)
      const marker117 = new BMapGL.Marker(point117, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts117 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0912', // 信息窗口标题
        message: '信息'
      }
      const infoWindow117 = new BMapGL.InfoWindow('监测异常', opts117) // 创建信息窗口对象
      marker117.addEventListener('click', function () {
        map.openInfoWindow(infoWindow117, point117) // 开启信息窗口
      })
      const point118 = new BMapGL.Point(115.815994, 33.550541)
      const marker118 = new BMapGL.Marker(point118, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts118 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：0913', // 信息窗口标题
        message: '信息'
      }
      const infoWindow118 = new BMapGL.InfoWindow('监测异常', opts118) // 创建信息窗口对象
      marker118.addEventListener('click', function () {
        map.openInfoWindow(infoWindow118, point118) // 开启信息窗口
      })
      // 十月 119-120
      const point119 = new BMapGL.Point(115.815994, 33.550541)
      const marker119 = new BMapGL.Marker(point119, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts119 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：1038', // 信息窗口标题
        message: '信息'
      }
      const infoWindow119 = new BMapGL.InfoWindow('监测异常', opts119) // 创建信息窗口对象
      marker119.addEventListener('click', function () {
        map.openInfoWindow(infoWindow119, point119) // 开启信息窗口
      })
      const point120 = new BMapGL.Point(115.815994, 33.550541)
      const marker120 = new BMapGL.Marker(point120, {
        icon: new BMapGL.Icon(
          'https://i.postimg.cc/P5vbYSyG/tmrisk.png',
          new BMapGL.Size(40, 40)
        )
      })
      const opts120 = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '杆号：1022', // 信息窗口标题
        message: '信息'
      }
      const infoWindow120 = new BMapGL.InfoWindow('监测异常', opts120) // 创建信息窗口对象
      marker120.addEventListener('click', function () {
        map.openInfoWindow(infoWindow120, point120) // 开启信息窗口
      })
      const marker1 = new BMapGL.Marker(point1)
      const marker2 = new BMapGL.Marker(point2)
      const marker3 = new BMapGL.Marker(point3)
      const marker4 = new BMapGL.Marker(point4)
      const marker5 = new BMapGL.Marker(point5)
      const marker6 = new BMapGL.Marker(point6)
      const marker7 = new BMapGL.Marker(point7)
      const marker8 = new BMapGL.Marker(point8)
      const marker9 = new BMapGL.Marker(point9)
      map.addOverlay(marker1)
      map.addOverlay(marker2)
      map.addOverlay(marker3)
      map.addOverlay(marker4)
      map.addOverlay(marker5)
      map.addOverlay(marker6)
      map.addOverlay(marker7)
      map.addOverlay(marker8)
      map.addOverlay(marker9)
      // 在地图上添加点标记 (合福高铁)
      map.addOverlay(marker18)
      map.addOverlay(marker19)
      map.addOverlay(marker20)
      map.addOverlay(marker21)
      map.addOverlay(marker22)
      map.addOverlay(marker23)
      // 绘制线（沪蓉线）
      this.hrpolyline = new BMapGL.Polyline(
        [
          new BMapGL.Point(115.220265, 31.271502),
          new BMapGL.Point(115.505067, 31.329013),
          new BMapGL.Point(115.727932, 31.45511),
          new BMapGL.Point(115.975584, 31.625827),
          new BMapGL.Point(116.499665, 31.714959),
          new BMapGL.Point(117.290345, 31.797813),
          new BMapGL.Point(117.350802, 31.910223),
          new BMapGL.Point(117.804539, 31.970223),
          new BMapGL.Point(118.282951, 32.060217)
        ],
        {
          strokeColor: 'red',
          strokeWeight: 4
        }
      )
      map.addOverlay(this.hrpolyline)
      // 绘制线（合福高铁线）
      this.hfpolyline = new BMapGL.Polyline(
        [
          new BMapGL.Point(118.028272, 31.018741),
          new BMapGL.Point(117.97621, 31.310748),
          new BMapGL.Point(117.489384, 31.704361),
          new BMapGL.Point(117.290345, 31.797813),
          new BMapGL.Point(117.222981, 31.838418),
          new BMapGL.Point(117.259917, 32.069632)
        ],
        {
          strokeColor: 'blue',
          strokeWeight: 4
        }
      )
      map.addOverlay(this.hfpolyline)
      // 添加信息窗口
      const opts = {
        width: 1000, // 信息窗口宽度
        height: 1000, // 信息窗口高度
        title: '沪蓉线', // 信息窗口标题
        message: '这里是故宫'
      }
      const infoWindow = new BMapGL.InfoWindow('展示内容', opts) // 创建信息窗口对象
      // 沪蓉线添加点击事件显示hrdiv
      this.$nextTick(() => {
        this.hrpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
        this.hfpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
        this.hhpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      })
      // 沪蓉线窗口关闭按钮点击事件
      this.$nextTick(() => {
        this.$refs.hrclose.addEventListener('click', () => {
          this.$refs.hrdiv.style.display = 'none'
        })
      })
      // 沪蓉线点击监测情况进入选择情况窗口
      this.$nextTick(() => {
        this.$refs.hrqkopen.addEventListener('click', () => {
          this.$refs.hrqkdiv.style.display = 'block'
        })
      })
      /*  var hrqktable = "<table><th>msg</th><th>code</th><th>data</th></table>";
      for (var i = 0; i < 1; i++) {
        hrqktable +=
          "<tr><td>" +
          this.allData14.msg +
          "</td><td>" +
          this.allData14.code +
          "</td><td>" +
          this.allData14.data +
          "</td><tr>";
      }
      hrqktable += "</table>";
      $("#hrqkcontainer").html(hrqktable); */
      // 沪蓉线qk情况查看关闭按钮点击事件
      this.$nextTick(() => {
        this.$refs.hrqkclose.addEventListener('click', () => {
          this.$refs.hrqkdiv.style.display = 'none'
        })
      })
      // 沪蓉线点击风险杆查看进入选择日期窗口
      this.$nextTick(() => {
        this.$refs.hrrisk.addEventListener('click', () => {
          this.$refs.hrriskform.style.display = 'block'
          this.$refs.hrdiv.style.display = 'none'
        })
      })
      // 沪蓉线点击监测线路进入选择日期窗口
      this.$nextTick(() => {
        this.$refs.hrcheck.addEventListener('click', () => {
          this.$refs.checkform.style.display = 'block'
          this.$refs.hrdiv.style.display = 'none'
        })
      })
      // 点击确定按钮绑定得到风险日期事件
      this.$nextTick(() => {
        this.$refs.hrriskDate.addEventListener('click', () => {
          this.$refs.hrriskform.style.left = '1100px'
          this.$refs.hrriskform.style.bottom = '500px'
          if (
            $('#hrriskdate').val() === '2023-05' ||
            $('#hrriskdate').val() === '2023-06' ||
            $('#hrriskdate').val() === '2023-11' ||
            $('#hrriskdate').val() === '2023-12'
          ) {
            alert('本月无监测任务')
          } else {
            alert($('#hrriskdate').val())
            this.hrpolyline.setOptions({
              // 设置文本标注样式
              strokeColor: 'FFFFFF'
            })
          }
          if ($('#hrriskdate').val() === '2023-01') {
            map.addOverlay(marker99)
            map.addOverlay(marker100)
          } else if ($('#hrriskdate').val() === '2023-02') {
            map.addOverlay(marker101)
          } else if ($('#hrriskdate').val() === '2023-03') {
            map.addOverlay(marker102)
            map.addOverlay(marker103)
            map.addOverlay(marker104)
            map.addOverlay(marker105)
          } else if ($('#hrriskdate').val() === '2023-04') {
            map.addOverlay(marker106)
          } else if ($('#hrriskdate').val() === '2023-07') {
            map.addOverlay(marker107)
            map.addOverlay(marker108)
          } else if ($('#hrriskdate').val() === '2023-08') {
            map.addOverlay(marker109)
            map.addOverlay(marker110)
            map.addOverlay(marker111)
            map.addOverlay(marker112)
            map.addOverlay(marker113)
            map.addOverlay(marker114)
          } else if ($('#hrriskdate').val() === '2023-09') {
            map.addOverlay(marker115)
            map.addOverlay(marker116)
            map.addOverlay(marker117)
            map.addOverlay(marker118)
          } else if ($('#hrriskdate').val() === '2023-10') {
            map.addOverlay(marker119)
            map.addOverlay(marker120)
          }
        })
      })
      // 点击关闭 关闭沪蓉线风险杆日期选择框
      this.$nextTick(() => {
        this.$refs.hrriskclose.addEventListener('click', () => {
          this.$refs.hrriskform.style.display = 'none'
          this.hrpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'red'
          })
          map.removeOverlay(marker99)
          map.removeOverlay(marker100)
          map.removeOverlay(marker101)
          map.removeOverlay(marker102)
          map.removeOverlay(marker103)
          map.removeOverlay(marker104)
          map.removeOverlay(marker105)
          map.removeOverlay(marker106)
          map.removeOverlay(marker107)
          map.removeOverlay(marker108)
          map.removeOverlay(marker109)
          map.removeOverlay(marker110)
          map.removeOverlay(marker111)
          map.removeOverlay(marker112)
          map.removeOverlay(marker113)
          map.removeOverlay(marker114)
          map.removeOverlay(marker115)
          map.removeOverlay(marker116)
          map.removeOverlay(marker117)
          map.removeOverlay(marker118)
          map.removeOverlay(marker119)
          map.removeOverlay(marker120)
        })
      })
      // 点击关闭 关闭线路监测查看选择框
      this.$nextTick(() => {
        this.$refs.checkclose.addEventListener('click', () => {
          this.$refs.checkform.style.display = 'none'
        })
      })
      this.$nextTick(() => {
        this.$refs.Januarybtn.addEventListener('click', () => {
          this.January()
        })
      })
      this.$nextTick(() => {
        this.$refs.Februarybtn.addEventListener('click', () => {
          this.February()
        })
      })
      this.$nextTick(() => {
        this.$refs.Marchbtn.addEventListener('click', () => {
          this.March()
        })
      })
      this.$nextTick(() => {
        this.$refs.Aprilbtn.addEventListener('click', () => {
          this.April()
        })
      })
      this.$nextTick(() => {
        this.$refs.Maybtn.addEventListener('click', () => {
          this.May()
        })
      })
      this.$nextTick(() => {
        this.$refs.Junebtn.addEventListener('click', () => {
          this.June()
        })
      })
      this.$nextTick(() => {
        this.$refs.Julybtn.addEventListener('click', () => {
          this.July()
        })
      })
      this.$nextTick(() => {
        this.$refs.Augustbtn.addEventListener('click', () => {
          this.August()
        })
      })
      this.$nextTick(() => {
        this.$refs.Septemberbtn.addEventListener('click', () => {
          this.September()
        })
      })
      this.$nextTick(() => {
        this.$refs.Octoberbtn.addEventListener('click', () => {
          this.October()
        })
      })
      this.$nextTick(() => {
        this.$refs.Novemberbtn.addEventListener('click', () => {
          this.November()
        })
      })
      this.$nextTick(() => {
        this.$refs.Decemberbtn.addEventListener('click', () => {
          this.December()
        })
      })

      marker2.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point2)
      })
      marker3.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point3)
      })
      marker4.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point4)
      })
      marker5.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point5)
      })
      marker6.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point6)
      })
      marker7.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point7)
      })
      marker8.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point8)
      })
      marker9.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point9)
      })
      map.addEventListener('zoomend', function (e) {
        const zoom = map.getZoom() // 获取缩放级别
        if (zoom > 12) {
          map.addOverlay(marker10)
          map.addOverlay(marker11)
          map.addOverlay(marker12)
          map.addOverlay(marker13)
          map.addOverlay(marker14)
          map.addOverlay(marker15)
          map.addOverlay(marker16)
          map.addOverlay(marker17)
        }
        console.log(zoom)
        // 其余操作
      })
      map.addEventListener('zoomend', function (e) {
        const zoom = map.getZoom() // 获取缩放级别
        if (zoom < 12) {
          map.removeOverlay(marker10)
          map.removeOverlay(marker11)
          map.removeOverlay(marker12)
          map.removeOverlay(marker13)
          map.removeOverlay(marker14)
          map.removeOverlay(marker15)
          map.removeOverlay(marker16)
          map.removeOverlay(marker17)
        }
        console.log(zoom)
        // 其余操作
      })
      // 监测入口跳转页面
      this.$nextTick(() => {
        this.$refs.hrenter.addEventListener('click', () => {
          window.location.href = 'https://www.baidu.com/'
        })
      })
      // 沪蓉线高铁点击事件
      this.$nextTick(() => {
        this.$refs.hrline.addEventListener('click', () => {
          this.hrpoint += 1
          if (this.hrpoint % 2 === 0) {
            map.removeOverlay(marker1)
            map.removeOverlay(marker2)
            map.removeOverlay(marker3)
            map.removeOverlay(marker4)
            map.removeOverlay(marker5)
            map.removeOverlay(marker6)
            map.removeOverlay(marker7)
            map.removeOverlay(marker8)
            map.removeOverlay(marker9)
            map.removeOverlay(this.hrpolyline)
          } else {
            map.addOverlay(marker1)
            map.addOverlay(marker2)
            map.addOverlay(marker3)
            map.addOverlay(marker4)
            map.addOverlay(marker5)
            map.addOverlay(marker6)
            map.addOverlay(marker7)
            map.addOverlay(marker8)
            map.addOverlay(marker9)
            map.addOverlay(this.hrpolyline)
          }
        })
      })
      // 合福线高铁点击事件
      this.$nextTick(() => {
        this.$refs.hfline.addEventListener('click', () => {
          this.hfpoint += 1
          if (this.hfpoint % 2 === 0) {
            map.removeOverlay(marker18)
            map.removeOverlay(marker19)
            map.removeOverlay(marker20)
            map.removeOverlay(marker21)
            map.removeOverlay(marker22)
            map.removeOverlay(marker23)
            map.removeOverlay(this.hfpolyline)
          } else {
            map.addOverlay(marker18)
            map.addOverlay(marker19)
            map.addOverlay(marker20)
            map.addOverlay(marker21)
            map.addOverlay(marker22)
            map.addOverlay(marker23)
            map.addOverlay(this.hfpolyline)
          }
        })
      })
    },
    async getData () {
      // 发起http请求
      // 对allData赋值
      const { data: ret } = await this.$http.get('xjline') // 获取新疆部分数据
      this.allData = ret
      const { data: ret1 } = await this.$http.get('hnzpoints') // 获取淮南正高铁站点数据
      this.allData1 = ret1
      const { data: ret2 } = await this.$http.get('hhpoints') // 获取淮南正高铁站点数据
      this.allData2 = ret2
      const { data: ret3 } = await this.$http.get('ajpoints') // 获取淮南正高铁站点数据
      this.allData3 = ret3
      const { data: ret4 } = await this.$http.get('hapoints') // 获取淮南正高铁站点数据
      this.allData4 = ret4
      const { data: ret5 } = await this.$http.get('nxpoints') // 获取淮南正高铁站点数据
      this.allData5 = ret5
      const { data: ret6 } = await this.$http.get('flpoints') // 获取淮南正高铁站点数据
      this.allData6 = ret6
      const { data: ret7 } = await this.$http.get('hbpoints') // 获取淮南正高铁站点数据
      this.allData7 = ret7
      const { data: ret9 } = await this.$http.get('qfpoints') // 获取淮南正高铁站点数据
      this.allData9 = ret9
      const { data: ret10 } = await this.$http.get('jjpoints') // 获取京九高铁站点数据
      this.allData10 = ret10
      const { data: ret11 } = await this.$http.get('shpoints') // 获取商杭高铁站点数据
      this.allData11 = ret11
      const { data: ret12 } = await this.$http.get('tasks') // 获取月份监测路线站点数据
      this.allData12 = ret12
      const { data: ret13 } = await this.$http.get('stationstojwd') // 获取月份监测路线站点数据
      this.allData13 = ret13
      const { data: ret14 } = await this.$http.get('stationsbytask') // 获取月份监测路线站点数据
      this.allData14 = ret14
      console.log(this.allData14.msg)
      const month = JSON.parse(JSON.stringify(this.allData12.data))[3].tasks[0]
        .taskName
      console.log(JSON.parse(JSON.stringify(this.allData12.data)))
      console.log(month)
      this.xjline()
      this.hnzline()
      this.hhline()
      this.ajline()
      this.haline()
      this.nxline()
      this.flline()
      this.hbline()
      this.qfline()
      this.jjline()
      this.shline()
    },
    // 新疆站点
    xjline () {
      const linedata = this.allData
      console.log(linedata)
      const points = [] // 存放标注点经纬信息的数组

      for (let i = 0; i < linedata.length; i++) {
        const json = linedata[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point, {
          icon: new BMapGL.Icon(
            'https://i.postimg.cc/MGjyf1kC/tmgan.png',
            new BMapGL.Size(40, 40)
          )
        }) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
    },
    // 淮南正高铁线
    hnzline () {
      const linedata1 = this.allData1
      console.log(linedata1)
      const points = [] // 存放标注点经纬信息的数组
      for (let i = 0; i < linedata1.length; i++) {
        const json = linedata1[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
      const data = [
        '118.421683, 31.426836; 118.31598, 31.436088;117.897491, 31.620277;117.865825, 31.624304;117.76632, 31.670439;117.563559, 31.75877;117.476859, 31.829889;117.411207, 31.881628;117.492158, 31.868441;117.265669, 32.016036;117.216956, 32.203353;117.198807, 32.399647;117.113972, 32.618037;117.053749, 32.638934;117.026705, 32.636665'
      ]
      console.log(data)
      const opts = { strokeColor: 'FFFFFF', strokeWeight: 4 }
      for (let j = 0; j < data.length; j++) {
        const arr = data[j].split(';')
        const lineArr = []
        for (let k = 0; k < arr.length; k++) {
          lineArr.push(
            new BMapGL.Point(arr[k].split(',')[0], arr[k].split(',')[1])
          )
        }
        // 创建折线
        this.hnzpolyline = new BMapGL.Polyline(lineArr, opts)
        // 增加折线
        map.addOverlay(this.hnzpolyline)
        this.hnzpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      }

      // 淮南正线点击事件
      this.$nextTick(() => {
        this.$refs.hnzline.addEventListener('click', () => {
          this.hnzpoint += 1
          if (this.hnzpoint % 2 === 0) {
            for (let i = 0; i < linedata1.length; i++) {
              map.removeOverlay(points[i])
            }
            map.removeOverlay(this.hnzpolyline)
          } else {
            for (let m = 0; m < linedata1.length; m++) {
              map.addOverlay(points[m])
            }
            map.addOverlay(this.hnzpolyline)
          }
        })
      })
    },
    // 合杭高铁线
    hhline () {
      const linedata2 = this.allData2
      const points = [] // 存放标注点经纬信息的数组
      for (let i = 0; i < linedata2.length; i++) {
        const json = linedata2[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
      const data = [
        '120.030212, 30.8688; 119.616284, 30.821686;119.424177, 30.860994;119.16266, 30.944497;118.781696, 30.954215;118.591458, 31.098662;118.385718, 31.254727;118.398692, 31.354271;118.262641, 31.361104;118.099823, 31.482842;117.931838, 31.623734;117.730215, 31.752307;117.492158,31.868441'
      ]
      console.log(data)
      const opts = { strokeColor: '#ffc0cb', strokeWeight: 4 }
      for (let j = 0; j < data.length; j++) {
        const arr = data[j].split(';')
        const lineArr = []
        for (let k = 0; k < arr.length; k++) {
          lineArr.push(
            new BMapGL.Point(arr[k].split(',')[0], arr[k].split(',')[1])
          )
        }
        // 创建折线
        this.hhpolyline = new BMapGL.Polyline(lineArr, opts)
        // 增加折线
        map.addOverlay(this.hhpolyline)
        this.hhpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      }
      // 合杭线点击事件
      this.$nextTick(() => {
        this.$refs.hhline.addEventListener('click', () => {
          this.hhpoint += 1
          if (this.hhpoint % 2 === 0) {
            for (let i = 0; i < linedata2.length; i++) {
              map.removeOverlay(points[i])
            }
            map.removeOverlay(this.hhpolyline)
          } else {
            for (let m = 0; m < linedata2.length; m++) {
              map.addOverlay(points[m])
            }
            map.addOverlay(this.hhpolyline)
          }
        })
      })
    },
    // 安九高铁线
    ajline () {
      const linedata3 = this.allData3
      const points = [] // 存放标注点经纬信息的数组
      for (let i = 0; i < linedata3.length; i++) {
        const json = linedata3[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
      const data = [
        '115.948533,30.099766;116.18113,30.159159;116.368241, 30.414937;116.621626, 30.580267;116.870447, 30.678312'
      ]
      console.log(data)
      const opts = { strokeColor: 'FFFFFF', strokeWeight: 4 }
      for (let j = 0; j < data.length; j++) {
        const arr = data[j].split(';')
        const lineArr = []
        for (let k = 0; k < arr.length; k++) {
          lineArr.push(
            new BMapGL.Point(arr[k].split(',')[0], arr[k].split(',')[1])
          )
        }
        // 创建折线
        this.ajpolyline = new BMapGL.Polyline(lineArr, opts)
        // 增加折线
        map.addOverlay(this.ajpolyline)
        this.ajpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      }
      // 安九线点击事件
      this.$nextTick(() => {
        this.$refs.ajline.addEventListener('click', () => {
          this.ajpoint += 1
          if (this.ajpoint % 2 === 0) {
            for (let i = 0; i < linedata3.length; i++) {
              map.removeOverlay(points[i])
            }
            map.removeOverlay(this.ajpolyline)
          } else {
            for (let m = 0; m < linedata3.length; m++) {
              map.addOverlay(points[m])
            }
            map.addOverlay(this.ajpolyline)
          }
        })
      })
    },
    // 合安高铁线
    haline () {
      const linedata4 = this.allData4
      const points = [] // 存放标注点经纬信息的数组
      for (let i = 0; i < linedata4.length; i++) {
        const json = linedata4[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
      const data = [
        '116.870447, 30.678312;117.046053,31.030001;117.225325,31.274007;117.05371,31.490664;117.149634,31.722691'
      ]
      console.log(data)
      const opts = { strokeColor: 'green', strokeWeight: 4 }
      for (let j = 0; j < data.length; j++) {
        const arr = data[j].split(';')
        const lineArr = []
        for (let k = 0; k < arr.length; k++) {
          lineArr.push(
            new BMapGL.Point(arr[k].split(',')[0], arr[k].split(',')[1])
          )
        }
        // 创建折线
        this.hapolyline = new BMapGL.Polyline(lineArr, opts)
        // 增加折线
        map.addOverlay(this.hapolyline)
        this.hapolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      }
      // 安九线点击事件
      this.$nextTick(() => {
        this.$refs.haline.addEventListener('click', () => {
          this.hapoint += 1
          if (this.hapoint % 2 === 0) {
            for (let i = 0; i < linedata4.length; i++) {
              map.removeOverlay(points[i])
            }
            map.removeOverlay(this.hapolyline)
          } else {
            for (let m = 0; m < linedata4.length; m++) {
              map.addOverlay(points[m])
            }
            map.addOverlay(this.hapolyline)
          }
        })
      })
    },
    // 宁西高铁线
    nxline () {
      const linedata5 = this.allData5
      const points = [] // 存放标注点经纬信息的数组
      for (let i = 0; i < linedata5.length; i++) {
        const json = linedata5[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
      const data = [
        '115.944333,31.840105;116.16674,31.780881;116.3305,31.749535;116.506279,31.721344;116.811339,31.767611'
      ]
      const opts = { strokeColor: 'green', strokeWeight: 4 }
      for (let j = 0; j < data.length; j++) {
        const arr = data[j].split(';')
        const lineArr = []
        for (let k = 0; k < arr.length; k++) {
          lineArr.push(
            new BMapGL.Point(arr[k].split(',')[0], arr[k].split(',')[1])
          )
        }
        // 创建折线
        this.nxpolyline = new BMapGL.Polyline(lineArr, opts)
        // 增加折线
        map.addOverlay(this.nxpolyline)
        this.nxpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      }
      // 宁西线点击事件
      this.$nextTick(() => {
        this.$refs.nxline.addEventListener('click', () => {
          this.nxpoint += 1
          if (this.nxpoint % 2 === 0) {
            for (let i = 0; i < linedata5.length; i++) {
              map.removeOverlay(points[i])
            }
            map.removeOverlay(this.nxpolyline)
          } else {
            for (let m = 0; m < linedata5.length; m++) {
              map.addOverlay(points[m])
            }
            map.addOverlay(this.nxpolyline)
          }
        })
      })
    },
    // 阜六上行高铁线
    flline () {
      const linedata6 = this.allData6
      const points = [] // 存放标注点经纬信息的数组
      for (let i = 0; i < linedata6.length; i++) {
        const json = linedata6[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
      const data = [
        '116.011429,32.751842;116.006998,32.619308;115.94252,32.449126;115.972782,32.349593;116.126444,32.208078;116.113292,32.138958;116.150133,32.061206;116.190919,31.990435;116.254734,31.889953;116.3305,31.749535'
      ]
      const opts = { strokeColor: 'rgb(127, 22, 207)', strokeWeight: 4 }
      for (let j = 0; j < data.length; j++) {
        const arr = data[j].split(';')
        const lineArr = []
        for (let k = 0; k < arr.length; k++) {
          lineArr.push(
            new BMapGL.Point(arr[k].split(',')[0], arr[k].split(',')[1])
          )
        }
        // 创建折线
        this.flpolyline = new BMapGL.Polyline(lineArr, opts)
        // 增加折线
        map.addOverlay(this.flpolyline)
        this.flpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      }
      // 宁西线点击事件
      this.$nextTick(() => {
        this.$refs.flline.addEventListener('click', () => {
          this.flpoint += 1
          if (this.flpoint % 2 === 0) {
            for (let i = 0; i < linedata6.length; i++) {
              map.removeOverlay(points[i])
            }
            map.removeOverlay(this.flpolyline)
          } else {
            for (let m = 0; m < linedata6.length; m++) {
              map.addOverlay(points[m])
            }
            map.addOverlay(this.flpolyline)
          }
        })
      })
    },
    // 合蚌高铁线
    hbline () {
      const linedata7 = this.allData7
      const points = [] // 存放标注点经纬信息的数组
      for (let i = 0; i < linedata7.length; i++) {
        const json = linedata7[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
      const data = [
        '117.448073,32.907977;117.156578,32.652222;117.175986,32.488905;117.259917,32.069632;117.323619,31.891059'
      ]
      const opts = { strokeColor: 'rgb(127, 22, 207)', strokeWeight: 4 }
      for (let j = 0; j < data.length; j++) {
        const arr = data[j].split(';')
        const lineArr = []
        for (let k = 0; k < arr.length; k++) {
          lineArr.push(
            new BMapGL.Point(arr[k].split(',')[0], arr[k].split(',')[1])
          )
        }
        // 创建折线
        this.hbpolyline = new BMapGL.Polyline(lineArr, opts)
        // 增加折线
        map.addOverlay(this.hbpolyline)
        this.hbpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      }
      // 宁西线点击事件
      this.$nextTick(() => {
        this.$refs.hbline.addEventListener('click', () => {
          this.hbpoint += 1
          if (this.hbpoint % 2 === 0) {
            for (let i = 0; i < linedata7.length; i++) {
              map.removeOverlay(points[i])
            }
            map.removeOverlay(this.hbpolyline)
          } else {
            for (let m = 0; m < linedata7.length; m++) {
              map.addOverlay(points[m])
            }
            map.addOverlay(this.hbpolyline)
          }
        })
      })
    },
    // 商杭高铁线
    shline () {
      const linedata11 = this.allData11
      const points = [] // 存放标注点经纬信息的数组
      for (let i = 0; i < linedata11.length; i++) {
        const json = linedata11[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
      const data = [
        '115.664543,34.452301;115.739816,34.337402;115.805225,33.801005;115.818118,33.532955;115.733806,33.161644;115.758677,32.888844;116.219572,32.68436;116.629073,32.642553;116.812683,32.599515;117.047912,32.549908;117.175986,32.488905'
      ]
      const opts = { strokeColor: 'rgb(216, 79, 202)', strokeWeight: 4 }
      for (let j = 0; j < data.length; j++) {
        const arr = data[j].split(';')
        const lineArr = []
        for (let k = 0; k < arr.length; k++) {
          lineArr.push(
            new BMapGL.Point(arr[k].split(',')[0], arr[k].split(',')[1])
          )
        }
        // 创建折线
        this.shpolyline = new BMapGL.Polyline(lineArr, opts)
        // 增加折线
        map.addOverlay(this.shpolyline)
        this.shpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      }
      // 商杭线点击事件
      this.$nextTick(() => {
        this.$refs.shline.addEventListener('click', () => {
          this.shpoint += 1
          if (this.shpoint % 2 === 0) {
            for (let i = 0; i < linedata11.length; i++) {
              map.removeOverlay(points[i])
            }
            map.removeOverlay(this.shpolyline)
          } else {
            for (let m = 0; m < linedata11.length; m++) {
              map.addOverlay(points[m])
            }
            map.addOverlay(this.shpolyline)
          }
        })
      })
    },
    // 青阜高铁线
    qfline () {
      const linedata9 = this.allData9
      const points = [] // 存放标注点经纬信息的数组
      for (let i = 0; i < linedata9.length; i++) {
        const json = linedata9[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
      const data = [
        '116.246472,33.493815;116.134735,33.201564;115.963738,33.020467;115.875897,32.975642'
      ]
      const opts = { strokeColor: 'red', strokeWeight: 4 }
      for (let j = 0; j < data.length; j++) {
        const arr = data[j].split(';')
        const lineArr = []
        for (let k = 0; k < arr.length; k++) {
          lineArr.push(
            new BMapGL.Point(arr[k].split(',')[0], arr[k].split(',')[1])
          )
        }
        // 创建折线
        this.qfpolyline = new BMapGL.Polyline(lineArr, opts)
        // 增加折线
        map.addOverlay(this.qfpolyline)
        this.qfpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      }
      // 京九上行线点击事件
      this.$nextTick(() => {
        this.$refs.qfline.addEventListener('click', () => {
          this.qfpoint += 1
          if (this.qfpoint % 2 === 0) {
            for (let i = 0; i < linedata9.length; i++) {
              map.removeOverlay(points[i])
            }
            map.removeOverlay(this.qfpolyline)
          } else {
            for (let m = 0; m < linedata9.length; m++) {
              map.addOverlay(points[m])
            }
            map.addOverlay(this.qfpolyline)
          }
        })
      })
    },
    // 京九上行高铁线
    jjline () {
      const linedata10 = this.allData10
      const points = [] // 存放标注点经纬信息的数组
      for (let i = 0; i < linedata10.length; i++) {
        const json = linedata10[i]
        const p0 = json.jd
        const p1 = json.wd
        const point = new BMapGL.Point(p0, p1) // 循环生成新的地图点
        const marker = new BMapGL.Marker(point) // 按照地图点坐标生成标记
        points.push(marker)
        map.addOverlay(points[i])
      }
      const data = [
        '115.419388,32.507092;115.560424,32.64462;115.71401,32.770775;115.838339,32.864871;115.87484,32.920307;115.875897,32.975642;115.864369,33.058027;115.815635,33.551233;115.811775,33.652659;115.803728,33.854214;115.796598,34.011781'
      ]
      const opts = { strokeColor: 'pink', strokeWeight: 4 }
      for (let j = 0; j < data.length; j++) {
        const arr = data[j].split(';')
        const lineArr = []
        for (let k = 0; k < arr.length; k++) {
          lineArr.push(
            new BMapGL.Point(arr[k].split(',')[0], arr[k].split(',')[1])
          )
        }
        // 创建折线
        this.jjpolyline = new BMapGL.Polyline(lineArr, opts)
        // 增加折线
        map.addOverlay(this.jjpolyline)
        this.jjpolyline.addEventListener('click', () => {
          this.hrdivpoint += 1
          if (this.hrdivpoint % 2 === 0) {
            this.$refs.hrdiv.style.display = 'block'
          } else {
            this.$refs.hrdiv.style.display = 'none'
          }
        })
      }
      // 京九上行线点击事件
      this.$nextTick(() => {
        this.$refs.jjline.addEventListener('click', () => {
          this.jjpoint += 1
          if (this.jjpoint % 2 === 0) {
            for (let i = 0; i < linedata10.length; i++) {
              map.removeOverlay(points[i])
            }
            map.removeOverlay(this.jjpolyline)
          } else {
            for (let m = 0; m < linedata10.length; m++) {
              map.addOverlay(points[m])
            }
            map.addOverlay(this.jjpolyline)
          }
        })
      })
    },
    // 获取用户表单填写的日期 并展示选中日期的风险布局strokeColor
    getDate () {
      this.hrpolyline.setStrokeColor('green')
      console.log(this.hrpolyline)
    },
    // 监测路线显示函数
    checkLine () {
      this.$nextTick(() => {
        for (let i = 0; i < this.allData12.length; i++) {
          const month = JSON.parse(JSON.stringify(this.allData12.data))[0]
            .month
          const month1 = JSON.parse(
            JSON.stringify(this.allData12.data)
          )[0].month.Substring(4, 2)
          console.log(month)
          console.log(month1)
        }
        this.$refs.hrcheckDate.addEventListener('click', () => {
          this.$refs.checkform.style.left = '1100px'
          this.$refs.checkform.style.bottom = '500px'
          this.hrpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.hnzpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.hfpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.hhpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.ajpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.hapolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.nxpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.flpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.hbpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.qfpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.jjpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          this.shpolyline.setOptions({
            // 设置文本标注样式
            strokeColor: 'black'
          })
          console.log($('#hrcheckDate').val())

          if ($('#hrcheckDate').val() === '2023-01') {
            const polyline1 = new BMapGL.Polyline(
              [
                new BMapGL.Point(115.948533, 30.099766),
                new BMapGL.Point(116.18113, 30.159159),
                new BMapGL.Point(116.368241, 30.414937),
                new BMapGL.Point(116.621626, 30.580267),
                new BMapGL.Point(116.870447, 30.678312)
              ],
              {
                strokeColor: 'green',
                strokeWeight: 8
              }
            )
            map.addOverlay(polyline1)
          }
          if ($('#hrcheckDate').val() === '2023-02') {
            const polyline2 = new BMapGL.Polyline(
              [
                new BMapGL.Point(116.006998, 32.619308),
                new BMapGL.Point(115.94252, 32.449126),
                new BMapGL.Point(115.972782, 32.349593)
              ],
              {
                strokeColor: 'blue',
                strokeWeight: 8
              }
            )
            map.addOverlay(polyline2)
          }
          if ($('#hrcheckDate').val() === '2023-03') {
            const polyline3 = new BMapGL.Polyline(
              [
                new BMapGL.Point(116.126444, 32.208078),
                new BMapGL.Point(116.113292, 32.138958),
                new BMapGL.Point(116.150133, 32.061206),
                new BMapGL.Point(116.190919, 31.990435),
                new BMapGL.Point(116.254734, 31.889953),
                new BMapGL.Point(116.150133, 32.061206)
              ],
              {
                strokeColor: 'grey',
                strokeWeight: 8
              }
            )
            const polyline31 = new BMapGL.Polyline(
              [
                new BMapGL.Point(115.419388, 32.507092),
                new BMapGL.Point(115.560424, 32.64462),
                new BMapGL.Point(115.71401, 32.770775),
                new BMapGL.Point(115.838339, 32.864871),
                new BMapGL.Point(115.87484, 32.920307),
                new BMapGL.Point(115.875897, 32.975642)
              ],
              {
                strokeColor: 'grey',
                strokeWeight: 8
              }
            )
            map.addOverlay(polyline3)
            map.addOverlay(polyline31)
          }
          if ($('#hrcheckDate').val() === '2023-04') {
            const polyline4 = new BMapGL.Polyline(
              [
                new BMapGL.Point(115.944333, 31.840105),
                new BMapGL.Point(116.16674, 31.780881),
                new BMapGL.Point(116.3305, 31.749535),
                new BMapGL.Point(116.506279, 31.721344),
                new BMapGL.Point(116.811339, 31.767611)
              ],
              {
                strokeColor: 'purple',
                strokeWeight: 8
              }
            )
            map.addOverlay(polyline4)
          }
          if ($('#hrcheckDate').val() === '2023-07') {
            const polyline7 = new BMapGL.Polyline(
              [
                new BMapGL.Point(115.733806, 33.161644),
                new BMapGL.Point(115.758677, 32.888844),
                new BMapGL.Point(116.219572, 32.68436)
              ],
              {
                strokeColor: 'white',
                strokeWeight: 8
              }
            )
            map.addOverlay(polyline7)
          }
          if ($('#hrcheckDate').val() === '2023-08') {
            const polyline8 = new BMapGL.Polyline(
              [
                new BMapGL.Point(115.664543, 34.452301),
                new BMapGL.Point(115.739816, 34.337402),
                new BMapGL.Point(115.805225, 33.801005),
                new BMapGL.Point(115.818118, 33.532955),
                new BMapGL.Point(115.733806, 33.161644),
                new BMapGL.Point(115.758677, 32.888844),
                new BMapGL.Point(116.219572, 32.68436),
                new BMapGL.Point(116.629073, 32.642553),
                new BMapGL.Point(116.812683, 32.599515),
                new BMapGL.Point(117.047912, 32.549908)
              ],
              {
                strokeColor: 'red',
                strokeWeight: 8
              }
            )
            const polyline81 = new BMapGL.Polyline(
              [
                new BMapGL.Point(117.448073, 32.907977),
                new BMapGL.Point(117.156578, 32.652222),
                new BMapGL.Point(117.175986, 32.488905),
                new BMapGL.Point(117.259917, 32.069632),
                new BMapGL.Point(117.323619, 31.891059)
              ],
              {
                strokeColor: 'red',
                strokeWeight: 8
              }
            )
            map.addOverlay(polyline8)
            map.addOverlay(polyline81)
          }
          if ($('#hrcheckDate').val() === '2023-09') {
            const polyline9 = new BMapGL.Polyline(
              [
                new BMapGL.Point(115.220265, 31.271502),
                new BMapGL.Point(115.505067, 31.329013),
                new BMapGL.Point(115.727932, 31.45511),
                new BMapGL.Point(115.975584, 31.625827),
                new BMapGL.Point(116.499665, 31.714959),
                new BMapGL.Point(117.290345, 31.797813),
                new BMapGL.Point(117.350802, 31.910223),
                new BMapGL.Point(117.804539, 31.970223),
                new BMapGL.Point(118.282951, 32.060217)
              ],
              {
                strokeColor: 'black',
                strokeWeight: 8
              }
            )
            const polyline91 = new BMapGL.Polyline(
              [
                new BMapGL.Point(115.71401, 32.770775),
                new BMapGL.Point(115.838339, 32.864871),
                new BMapGL.Point(115.87484, 32.920307),
                new BMapGL.Point(115.875897, 32.975642),
                new BMapGL.Point(115.864369, 33.058027),
                new BMapGL.Point(115.815635, 33.551233),
                new BMapGL.Point(115.811775, 33.652659)
              ],
              {
                strokeColor: 'black',
                strokeWeight: 8
              }
            )
            map.addOverlay(polyline9)
            map.addOverlay(polyline91)
          }
          if ($('#hrcheckDate').val() === '2023-10') {
            const polyline10 = new BMapGL.Polyline(
              [
                new BMapGL.Point(116.16674, 31.780881),
                new BMapGL.Point(116.3305, 31.749535),
                new BMapGL.Point(116.506279, 31.721344)
              ],
              {
                strokeColor: 'orange',
                strokeWeight: 8
              }
            )
            map.addOverlay(polyline10)
          }
          if ($('#hrcheckDate').val().substring(5, 7) <= 9) {
            const month2 = JSON.parse(JSON.stringify(this.allData12.data))[
              $('#hrcheckDate').val().substring(6, 7) - 1
            ].count

            console.log(month2)
            alert('当月有' + month2 + '条监测路线')
          } else {
            const month2 = JSON.parse(JSON.stringify(this.allData12.data))[
              $('#hrcheckDate').val().substring(5, 7) - 1
            ].count

            console.log(month2)
            alert('当月有' + month2 + '条监测路线')
          }
        })
      })
    },
    January () {
      this.DataofJanuary += 1
      if (this.DataofJanuary % 2 === 0) {
        this.$refs.Januarydata.style.display = 'none'
      } else {
        this.$refs.Januarydata.style.display = 'block'
      }
    },
    February () {
      this.DataofFebruary += 1
      if (this.DataofFebruary % 2 === 0) {
        this.$refs.Februarydata.style.display = 'none'
      } else {
        this.$refs.Februarydata.style.display = 'block'
      }
    },
    March () {
      this.DataofMarch += 1
      if (this.DataofMarch % 2 === 0) {
        this.$refs.Marchdata.style.display = 'none'
      } else {
        this.$refs.Marchdata.style.display = 'block'
      }
    },
    April () {
      this.DataofApril += 1
      if (this.DataofApril % 2 === 0) {
        this.$refs.Aprildata.style.display = 'none'
      } else {
        this.$refs.Aprildata.style.display = 'block'
      }
    },
    May () {
      this.DataofMay += 1
      if (this.DataofMay % 2 === 0) {
        this.$refs.Maydata.style.display = 'none'
      } else {
        this.$refs.Maydata.style.display = 'block'
      }
    },
    June () {
      this.DataofJune += 1
      if (this.DataofJune % 2 === 0) {
        this.$refs.Junedata.style.display = 'none'
      } else {
        this.$refs.Junedata.style.display = 'block'
      }
    },
    July () {
      this.DataofJuly += 1
      if (this.DataofJuly % 2 === 0) {
        this.$refs.Julydata.style.display = 'none'
      } else {
        this.$refs.Julydata.style.display = 'block'
      }
    },
    August () {
      this.DataofAugust += 1
      if (this.DataofAugust % 2 === 0) {
        this.$refs.Augustdata.style.display = 'none'
      } else {
        this.$refs.Augustdata.style.display = 'block'
      }
    },
    September () {
      this.DataofSeptember += 1
      if (this.DataofSeptember % 2 === 0) {
        this.$refs.Septemberdata.style.display = 'none'
      } else {
        this.$refs.Septemberdata.style.display = 'block'
      }
    },
    October () {
      this.DataofOctober += 1
      if (this.DataofOctober % 2 === 0) {
        this.$refs.Octoberdata.style.display = 'none'
      } else {
        this.$refs.Octoberdata.style.display = 'block'
      }
    },
    November () {
      this.DataofNovember += 1
      if (this.DataofNovember % 2 === 0) {
        this.$refs.Novemberdata.style.display = 'none'
      } else {
        this.$refs.Novemberdata.style.display = 'block'
      }
    },
    December () {
      this.DataofDecember += 1
      if (this.DataofDecember % 2 === 0) {
        this.$refs.Decemberdata.style.display = 'none'
      } else {
        this.$refs.Decemberdata.style.display = 'block'
      }
    }
    // 控制监测任务框
    /*  task() {
      this.$nextTick(() => {
        this.$refs.task.addEventListener("click", () => {
          this.taskdivpoint += 1;
          if (this.taskdivpoint % 2 === 0) {
            this.$refs.taskdiv.style.display = "block";
          } else {
            this.$refs.taskdiv.style.display = "none";
          }
        });
      });
    }, */
  },
  mounted () {
    this.loadJScript()
    setTimeout(() => {
      this.addMarker()
    }, 1000)
    setTimeout(() => {
      this.getData()
    }, 2000)
    setTimeout(() => {
      this.xjline()
    }, 5000)
    setTimeout(() => {
      this.checkLine()
    }, 4000)
  }
}
</script>
<style lang="less" >
html,
body,
#allmap {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.title {
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 20px;
  transform: translate(-50%, -50%);
}
.btli {
  float: left;
  width: 150px;
  height: 80px;
  text-align: center;
  font-size: 25px;
}
.navlist a {
  // 超链接颜色是白色
  color: #fff;
  // 让他以块模式显示
  display: block;
}
// 鼠标悬停变颜色
.navlist a:hover {
  background: #666;
}
.droplist {
  background: #333;
  display: none;
  border-radius: 6px;
  z-index: 9999;
  position: relative;
}
.droplist li {
  height: 40px;
  display: block;
  border-top: 1px solid rgb(102, 102, 102);
}
.btli:hover .droplist {
  display: block;
}
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
</style>
