function bingo(ticket, win) {
    let count = 0;
    for (let i = 0; i < ticket.length; i++) {
        for (let j = 0; j < ticket[i][0].length; j++) {
        if (ticket[i][0].charCodeAt(j) === ticket[i][1]) {
            count++;
            break;
        }
        }
    }
    return count >= win ? 'Winner!' : 'Loser!';
}
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    2
  )
);
