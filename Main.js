let rat=new Rat("jerry",3,true);
let cat=new Cat("tom",10);
rat.say("tao là jerry");
cat.say("tao là tom");
console.log(rat.checkIsDead());
cat.cathMouse(rat);
cat.eatMouse(rat);
console.log(cat);