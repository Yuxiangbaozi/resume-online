//获取usericon宽度
let getwidth = function(){
  let node = document.body.querySelector('.usericon')
  let {width} = node.getBoundingClientRect()
  let str = width.toString()
  let index = str.search(/\./)+1
  if(index !== 0 && str[index] >= 5){
    width += 1
  }
  document.styleSheets[0].insertRule(`.aside .usericon::after{border: ${width/4}px solid transparent;}`)
  document.styleSheets[0].insertRule(`.aside .usericon::before{border: ${width/4}px solid transparent;}`)
  document.styleSheets[0].insertRule(`.aside .usericon h2>img{width: ${width/3}px;}`)
}
getwidth()