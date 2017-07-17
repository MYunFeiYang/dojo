/**
 * Created by yunfeiyang on 17-7-14.
 */
class Worker extends Student{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return `I am a Worker. I have a job.`
    }
}
module.exports=Worker;