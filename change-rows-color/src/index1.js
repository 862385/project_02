// 1.使用es6导入语法 导入jquery
import $ from 'jquery'

//导入样式（在webpack中，一切皆模块，都可以通过es6导入语法进行导入和使用）
// 如果某个模块中 使用from接收到的成员为undefined则没必要进行接收
import './css/index.css'

import './css/index.less'

// 导入 src/js/test/info.js
import '@/js/test/info.js'

// 1.导入图片，得到图片文件
import logo from './images/R-C.jpg'
// 2.给img标签的src动态赋值
$('.box').attr('src',logo)


// 2.定义jquery的入口函数
$(function () {
    // 3.实现奇数行变色
    // 奇数为红色
    $('li:odd').css('background-color','yellow')
    $('li:even').css('background-color','pink')
    // 0偶数
    // 1奇数
})

// 定义装饰器函数
function info(target) {
    target.info = 'Person info'
}

//定义一个普通的类
@info
class Person {}

console.log(Person.info)