/**
 * Created by yunfeiyang on 17-7-14.
 */
    var shulie = [];
    for (var i=1;i<=10;i++) {
        i > 2 ? shulie[i] = shulie[i - 1] + shulie[i - 2]:shulie[i] = 1;
        console.log(shulie[i]);
    }



