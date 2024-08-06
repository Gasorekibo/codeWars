function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600) === 0? "00":Math.floor(seconds / 3600) <10? "0"+Math.floor(seconds / 3600):Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60) === 0?"00":Math.floor((seconds % 3600) / 60)<10?"0"+Math.floor((seconds % 3600) / 60):Math.floor((seconds % 3600) / 60);
    let secs = (seconds % 60) ===0?"00":(seconds % 60)<10?"0"+(seconds % 60):(seconds % 60);
    return `${(hours)}:${(minutes)}:${(secs)}`;
  }
  console.log(humanReadable(9)) // '99:59:59'