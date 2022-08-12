module.exports = function check(str, bracketsConfig) {
  let array = [];
  let h=0;
  str=str.split('');

  for(let i=0; i<str.length; i++){
    while(bracketsConfig.length>h){
      if(str[i]===bracketsConfig[h][1] ||str[i]===bracketsConfig[h][0]){
        if(str[i]===bracketsConfig[h][1]&&array[array.length-1]===bracketsConfig[h][0]){
          array.pop();
        }else{
          array.push(str[i]);
        }
      }
      h++;
    }
    h=0;
  }

  return !array.length;
}
