

//置入window.onload事件中可确保在所有元素均已加载的前提下执行自定义事件
//或者不置入window.onload时，将功能代码段放在功能代码所依赖的元素之下
window.onload=function(){
    //获取父容器
    var div=document.getElementById("myimg");
    //查找指定容器下的a标签
    var href=div.getElementsByTagName("a");
    //遍历这些标签
    for(var i=0;i<href.length;i++){
        //给每个标签绑定事件
        href[i].onclick=function(){
            //测试：获取每个标签中img的地址
            alert(this.getElementsByTagName('img')[0].src);
            //为了测试：使超链接本身跳转功能失效
            //当onclick与href共存时，href跳转执行在onclick之后，且当onclick返回不是false时才执行href的跳转功能
            return false;
        }
    }
}

/*图标点击控制*/
function backdrop(img) {
    var imgs= document.getElementsByName("img");
    for(var i =0;i<imgs.length;i++){
        if( imgs[i].style.backgroundColor=="rgb(255, 171, 40)"){
            imgs[i].style.backgroundColor="#FF8F29";
            var m = document.getElementById(img);
            m.style.backgroundColor="#ffab28";
            /*放入所点击图标的地址*/
            document.getElementById("tp").src=m.src;
            break;
        }

    }
}
/*收款金额删除*/
function inputBox(box) {
    /*收款框正则*/
    var is=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
    /*通过id获取点击的键位信息*/
    var sum=document.getElementById("sum");
    /*当id==null时清空文本框*/
    if(box==null){
        sum.value="";
    }else if(box=="delete"){
        /*删除input最后一位字符*/
        sum.value =sum.value.toString().substr(0, sum.value.length - 1);
    }else {

        for(var i =0;i<=sum.value.length;i++){
            if(sum.value[i]=="."){
                var f =true;
            }
        }
        if(f){
            if(box=="."){
                return;
            }
        }
        var m=sum.value+box;

        if(box=="."||box==0){

            if(m[0]!="."){
                sum.value=m;
            }

        }else if(is.test(Number(m))){
            sum.value=m;
            console.log(m)
        }
    }
}

