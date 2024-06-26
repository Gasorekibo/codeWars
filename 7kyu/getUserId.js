function getUsersIds(str) { 
  let result = []
   const toReplace = /uid/
   const hashTag = /#/g
 str.replace(hashTag, "").split(",").map((string) => {
   result.push(string.toLowerCase().replace(toReplace, "").trim())
 });
return result
 
}