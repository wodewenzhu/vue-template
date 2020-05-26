/**
 * rem是css3中新增加的一个单位属性，是一个相对长度单位，其是相对于根元素(html)的font-size值的倍数；
 * 桌面浏览器上的初始值是16px，则1rem 相当于 16px；
 * 为了方便计算，一般需要把 1rem 处理成 10px; (16 * 62.5% = 10) (例如，设计稿式20px,那么就可以写成2rem);
 * 设置 html{font-size:62.5%}即可实现把 1rem 处理成 10px；
 * 但是，不同屏幕宽度不能都设置成62.5%，要根据屏幕宽度动态设置html的font-size，以实现页面自适应各种移动端屏幕；
 * 以下为实现方式：
 **/
// 设计稿宽度
let flag = 375;
// 动态设置html的font-size值
let setHtmlFontSize = function() {
    // document.documentElement属性返回当前文档的根元素节点
    let wdWidth = document.documentElement.clientWidth;
    let fontSize = (wdWidth / flag) * 62.5;
    document.documentElement.style.fontSize = fontSize + '%';
}
setHtmlFontSize();
window.addEventListener('resize', function(){
    setHtmlFontSize();  
})
