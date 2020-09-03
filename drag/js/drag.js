/**
 * 封装拖拽特效
 * bar是拖动盒子的bar
 * wrapper是拖动盒子
 * closeMy是拖动盒子的关闭按钮
 * 
 * init方法做初始化
 * initData数据处理
 * operate监听事件
 * closeMine监听closeMy的点击事件
 */
var drag = {
    init: function (bar,wrapper,closeMy) {
        this.initData(bar,wrapper,closeMy);
        this.operate();
        this.closeMine();
    },
    initData: function (bar,wrapper,closeMy) {
        this.bar = bar;
        this.wrapper = wrapper;
        this.closeMy = closeMy;
    },
    operate: function(){
        var that = this;
        this.bar.onmousedown = function(e){
            // 获取鼠标在页面上的位置
            var e = e.client || window.event;
            var pagX = e.pagX || e.clientX + document.documentElement.scrollLeft;
            var pagY = e.pagY || e.clientY + document.documentElement.scrollTop;

            // 获取鼠标在wrapper中的位置
            var boxX = pagX - that.wrapper.offsetLeft;
            var boxY = pagY - that.wrapper.offsetTop;

            // 鼠标在页面上移动，让wrapper跟着移动
            document.onmousemove = function(e){
                var pagX = e.pagX || e.clientX + document.documentElement.scrollLeft;
                var pagY = e.pagY || e.clientY + document.documentElement.scrollTop;
                // 让wrapper跟着鼠标移动
                that.wrapper.style.left = pagX - boxX + "px";
                that.wrapper.style.top = pagY - boxY + "px";
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        }
    },
    closeMine: function(){
        var that = this;
        this.closeMy.onclick = function(){
            that.wrapper.style.display = "none";
        }
    }
}