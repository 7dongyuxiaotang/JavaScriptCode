//obj:要执行动画的对象
//target:执行动画的目标位置
//speed:移动的速度
function getStyle(obj, name) {
    if(window.getComputedStyle){
        return getComputedStyle(obj, null)[name];
    }else{
        return obj.currentStyle[name];
    }
};
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);

    //获取元素当前位置
    var current = parseInt(getStyle(obj, attr));

    if(current >target){
        speed = -speed;
    }


    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));

        //在旧值基础上进行增加
        var newValue = oldValue + speed;

        //判断nweValue是否大于某个值
        //向左移动 需要判断是否小于target
        //向右移动 需要判断是否大于target
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        obj.style[attr] = newValue + "px";

        if (newValue == target) {
            clearInterval(obj.timer);
            //动画执行完毕之后，执行其他函数
            callback() || callback;
        }
    },30);
};

