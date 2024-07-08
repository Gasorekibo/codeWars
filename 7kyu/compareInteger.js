function d01(a, b) {
  const result = a.toString().localeCompare(b.toString());
  console.log(result)
  if (!result) {
    return true;
  } else {
    return false;
  }
}

// ======= Typescript Version =======
/*
function d01(a:number, b:number):boolean {
  const result = a.toString().localeCompare(b.toString());
  if (!result) {
    return true;
  } else {
    return false;
  }
}
*/