import { ListGroupItem } from 'react-bootstrap';
import input from '../../../input/02'

const Day02 = () => {

  let score = 0;
  let score2 = 0;

//  const input = `A Y
//B X
//C Z`

  console.log(input)
  const arrInput = input.split('\n')
  console.log(arrInput)
  for (let round of arrInput) {
    let roundSplitted = round.split('');
    let cMove = roundSplitted[0];
    let pMove = roundSplitted[2];

    //part1
    if (pMove === 'X'){score += 1}
    else if (pMove==='Y'){score += 2}
    else {score +=3}

    if (cMove === 'A' && pMove === 'Y' || cMove === 'B' && pMove === 'Z' || cMove === 'C' && pMove === 'X'){score +=6}
    else if (cMove === 'A' && pMove === 'X' || cMove === 'B' && pMove === 'Y' || cMove === 'C' && pMove === 'Z'){score +=3}

    //part2
    let result = roundSplitted[2];
    let cMove2 = roundSplitted[0];
    let pMove2 = '';

    if (result === 'X'){
      if(cMove2 === 'A'){pMove2 = 'Z'}
      else if (cMove2 === 'B'){pMove2 = 'X'}
      else {pMove2 = 'Y'}
    }
    else if (result === 'Y'){
      score2 +=3
      if(cMove2 === 'A'){pMove2 = 'X'}
      else if (cMove2 === 'B'){pMove2 = 'Y'}
      else {pMove2 = 'Z'}
    }
    else {
      score2 +=6;
      if(cMove2 === 'A'){pMove2 = 'Y'}
      else if (cMove2 === 'B'){pMove2 = 'Z'}
      else {pMove2 = 'X'}
    }
    console.log(score2)
    if (pMove2 === 'X'){score2 +=1}
    else if (pMove2==='Y'){score2 +=2}
    else if (pMove2==='Z'){score2 +=3}
  }

  return (
    <ListGroupItem>
      <div>Best strategy score is: {score}</div>
      <div>Whoopsie. Strategy misunderstood! Updated score: {score2} </div>
    </ListGroupItem>
  )
}

export default Day02;
