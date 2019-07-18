let Cat =function (name,weight) {
    this.weight=weight;
    this.name=name;
    this.speed=20;
    this.txt="";
    this.say=function (txt) {
        this.txt=txt;
    }
    this.cathMouse=function (mouse) {
        if(this.speed>mouse.speed){
            return true;
        }else{
            return false;
        }
    }
    this.eatMouse=function (mouse) {
       if( mouse.checkIsDead()&&this.cathMouse(mouse)){
           this.weight+=mouse.weight;
           alert("mèo ăn thịt chuột")
       }else{
           alert("chuột chết hoặc không có con chuột nào!");
       }
    }
}