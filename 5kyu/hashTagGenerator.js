function generateHashtag(str) {
    let result = "";
    result = str
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .map((each) => each[0]?.toUpperCase() + each.slice(1))
      .join("");
      if (str === "" || str === " " || str === " ".repeat(200) || result.length === 0 || result.length >= 140) {
          return false;
        }
      return "#" + result;
  }
console.log(generateHashtag("a".repeat(139)));
 