// 还是两个动作
// 第一个动作只向右移动了30px，或者只是压缩了一下
// 第二个动作向右移动30px
// 但是上面有个透明的盒子

// 去直接搜索一个效果吧 太麻烦了。。。
// 套用别人demo



// ----------------------------- 背景更迭 ----------------------

// 思路一 ，背景蒙皮发
  // 只有背景变幻一下透明度就行了
  // 快速添加一个淡淡的背景，然后在取消
  // 这个背景要淡淡的覆盖掉，类似蒙皮
  // 或可通过z-index改变

// 思路二，重置计时器发
    // 我希望如果是这个状态，那么我要快速终结他，并且进入下一个
    // 也就是连续按的时候，第二次依然可以fade out
    // 换句话说，就是定时器重新启动，可以搜一下

