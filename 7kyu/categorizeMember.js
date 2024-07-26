export function openOrSenior(data){
    return data.map(ele => ele[0] >=55 && ele[1] >7? "Senior":"Open")
  }