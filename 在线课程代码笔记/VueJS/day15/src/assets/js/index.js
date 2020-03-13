function getById(id) {
    return document.getElementById(id)
}

function headerFn() {
    var oHeader = getById("header");
    // console.log(oHeader)
    window.onscroll = function () {
        var bannerH = getById("banner").offsetHeight;   //获取banner的高度
        var oTop = document.documentElement.scrollTop;  //获取滚动条滚动距离
        // console.log(oTop)
        console.log(bannerH)
        if (oTop > bannerH) {
            oHeader.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))';
        } else {
            var ob = oTop / bannerH * 0.8
            oHeader.style.backgroundImage = 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, ' + ob + "))";
        }
    }
}

function newsListFn() {
    var newsList = getById("newsList");
    console.log(newsList)
}

module.exports = {
    headerFn,
    newsListFn
}