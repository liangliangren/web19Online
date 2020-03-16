function moveScrollFn() {
    // console.log(11111)
    var categoryNav = document.getElementsByClassName("categoryNav")[0];  //ul
    var categoryLeft = document.getElementsByClassName("category-left")[0]; //ul的 父级
    var oHeight = categoryLeft.offsetHeight
    // console.log(oHeight)
    // console.log(categoryNav.offsetHeight)
    var topHeight = document.getElementById("header-top")
    var oLis = categoryNav.children
    // console.log(topHeight.offsetHeight)
    // console.log(oLis)
    var oFooter = document.getElementById("footer")
    var parentHeight = oHeight - topHeight.offsetHeight - oFooter.offsetHeight
    // console.log(parentHeight)

    //touchstart
    //touchmove
    //touchend
    var startY = 0; //
    var endY = 0;
    var moveY = 0;

    var nowY = 0;  //打开项目时候导航停留的位置
    //上下滚动的距离范围限制
    var topoffset = 150
    var startTime = 0
    var endTime = 0

    // 添加过度时间的函数
    function transitionFn() {
        categoryNav.style.transition = "all 0.5s ease"
        categoryNav.style.webkitTransition = "all 0.5s ease"
    }
    function removeTransitionFn() {
        categoryNav.style.transition = "none"
        categoryNav.style.webkitTransition = "none"
    }
    function transformFn(oH) {
        categoryNav.style.transform = "translateY(" + oH + "px)"
        categoryNav.style.webkitTransform = "translateY(" + oH + "px)"
    }

    categoryNav.addEventListener('touchstart', function (e) {
        startTime = new Date().getTime()  //获取开始触摸的时间戳
        startY = e.touches[0].clientY  //手触摸开始的位置
        //console.log("startY--" + startY)
        // console.log(startTime)
    }, false)
    categoryNav.addEventListener("touchmove", function (e) {
        e.preventDefault();  //阻止默认行为
        endY = e.touches[0].clientY
        //console.log("endY--" + endY)
        moveY = startY - endY
        // console.log(moveY)
        //上下滑动的范围
        if ((nowY - moveY) < topoffset && (nowY - moveY) > (parentHeight - categoryNav.offsetHeight - topoffset)) {
            removeTransitionFn()
            transformFn(nowY - moveY)
        }
    }, false)

    categoryNav.addEventListener("touchend", function (e) {
        endTime = new Date().getTime()
        // console.log(endTime)
        if ((nowY - moveY) >= 0) {
            removeTransitionFn()
            transitionFn()
            transformFn(0)
            nowY = 0
        } else if ((nowY - moveY) <= (parentHeight - categoryNav.offsetHeight)) {
            transitionFn()
            removeTransitionFn()
            nowY = parentHeight - categoryNav.offsetHeight
        } else {
            nowY = nowY - moveY
        }

        //可以认为是点击事件
        if ((endTime - startTime) < 150) {
            for (var i = 0; i < oLis.length; i++) {
                oLis[i].className = "";
                oLis[i].index = i
            }
            // console.log(e.target.parentNode)
            var li = e.target.parentNode
            li.className = "active"
            // console.log(li.index)
            //console.log(li.offsetHeight)
            var transY = li.index * li.offsetHeight
            //  console.log(transY)
            if (transY < categoryNav.offsetHeight - parentHeight) {
                transitionFn()
                transformFn(-transY)
            } else {
                transitionFn()
                transformFn(parentHeight - categoryNav.offsetHeight)
                moveY = categoryNav.offsetHeight - parentHeight
            }

        }
    }, false)

}
module.exports = {
    moveScrollFn
}