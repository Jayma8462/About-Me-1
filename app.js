'use strict';
var user = prompt('think you know me? lets find out, answer the following five Questions with "Y" or "N"');


var question1 = prompt('Does Tim know the riddle of steel?');
        if(question1 === 'Y') {
          alert( 'He actually knows a lot of nothing');
          console.log('Tim needs a job');
        }else{
          alert('no, he does not know anything');
            console.log('Tim really needs a job');

        }


var question2 = prompt('Does Tim brew beer?');
      if(question2 === 'Y') {
        alert('Yup, he will share when its bottled')
        console.log('you should give him a chance');
      }else{
        alert('Dude, who does not brew beer in the Pacific North West?');
        console.log('He works hard, he works all day long');
      }


var question3 = prompt('Does he collect vintage dairy products?');
    if(question3 === 'Y') {
          alert('yeah, he needs a hobby');
          console.log('He can clean, carry and dig')
      }else{
          alert('he does weird stuff')
          console.log('he can dig, clean and carry');
      }


  var question4 = prompt('would you hire tim?');
    if(question4 === 'Y') {
      alert('good choice he is great');
      console.log('he will work his butt for you, AND make coffee and buy doughnuts');
    }else{
      alert('are you sure? he will work all day')


}


var question5 = prompt('would you buy Tim a beer?');
if(question5 === 'Y') {
  alert('He will get the next round and throw in for nachos!');
  console.log('he works cheap, does not need health insurance, he was trained by uncle sam to clean toilets, they are the cleanest toilets you will ever see, thare are clean to military spec, give him a chance');
}else{
  alert( 'Why not? do you want him to die of dehydration?');
}
