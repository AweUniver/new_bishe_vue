<template>
  <router-view></router-view>
</template>

<script>
import { fabric } from 'fabric'
export default {
  name: 'App',
  mounted () {
    this.canvas = new fabric.Canvas('canvas', {

    })
    this.canvas.selectionColor = 'rgba(0,0,0,0.05)'
    this.canvas.on('mouse:down', this.mousedown)
    this.canvas.on('mouse:move', this.mousemove)
    this.canvas.on('mouse:up', this.mouseup)
  }
}
</script>

<style lang="less" scoped></style>
