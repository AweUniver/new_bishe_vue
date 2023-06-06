<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.canvas = new fabric.Canvas('canvas', {

    })
    this.canvas.selectionColor = 'rgba(0,0,0,0.05)'
    this.canvas.on('mouse:down', this.mousedown)
    this.canvas.on('mouse:move', this.mousemove)
    this.canvas.on('mouse:up', this.mouseup)

    document.onkeydown = e => {
      // 键盘 delect删除所选元素
      if (e.keyCode == 46) {
        this.deleteObj()
      }
      // ctrl+z 删除最近添加的元素
      if (e.keyCode == 90 && e.ctrlKey) {
        this.canvas.remove(
          this.canvas.getObjects()[this.canvas.getObjects().length - 1]
        )
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
