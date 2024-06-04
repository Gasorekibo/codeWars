class HTMLGen {
  constructor() {}
  a(message) {
    return (document.createElement("a").innerText = message);
  }
  b(message) {
    return (document.createElement("b").innerText = message);
  }
  p(message) {
    return document.createElement("p").innerText = message
  }
  body(message) {
    return document.createElement("body").innerText = message
  }
  div(message) {
    
    return document.createElement("div").innerText = message
  }
  span(message) {

    return document.createElement("span").innerText = message
  }
  title(message) {
    return document.createElement("title").innerText = message
  }
  comment(message) {
    return document.createElement("comment").innerText = message
  }
}

g =  new HTMLGen();
paragraph = g.p('Hello, World!')
block = g.div(paragraph)
console.log(paragraph == '<p>Hello, World!</p>')
console.log(block == '<div><p>Hello, World!</p></div>')