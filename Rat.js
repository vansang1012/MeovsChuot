let Rat=function (name,weight,status) {
this.name=name;
this.weight=weight;
this.speed=10;
this.status=status;
this.txt="";
this.checkIsDead=function () {
   if(this.status){
       return true;
   }else {
       return false;
   }
}
this.say=function (txt) {
    this.txt=txt;
}
}