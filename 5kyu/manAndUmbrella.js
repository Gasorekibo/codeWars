function minUmbrella(arr) {
  let umbrella = 0;
  let backHome = arr.map((ele, idx) => idx % 2 !== 0 && ele).filter(each => each);
  let fromHome = arr.map((ele, idx) => idx % 2 === 0 && ele).filter(each => each);
if(fromHome.length >= backHome.length) {
    for(let i =0; i<backHome.length ;i++) {
        if(fromHome[i] === 'rainy') {
            umbrella++;
        }
    }
}
}
console.log(
  minUmbrella([
    'rainy',
    'clear',
    'cloudy',
    'clear',
    'sunny',
    'thunderstorms',
    'cloudy',
    'thunderstorms',
    'rainy',
    'thunderstorms',
  ])
); //
