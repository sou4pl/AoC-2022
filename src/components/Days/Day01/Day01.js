import input from '../../../input/01'
import { ListGroupItem } from 'react-bootstrap'

const Day01 = () => {

  const inputArr = input.split('\n\n')
  //console.log(inputArr)
  const elves = inputArr.map((elf) => elf.split("\n").map((calories) => parseInt(calories)))
  //console.log(elves)
  const totalCalories = elves.map((elf) => elf.reduce((acc, current) => acc + current), 0)
  //console.log(totalCalories)
  const elvesSorted = totalCalories.sort((a,b) => b - a)
  //console.log(elvesSorted)
  const bestElf = elvesSorted.slice(0,1);
  const top3 = elvesSorted.slice(0,3).reduce((acc, current) => acc + current, 0)

  return (
    <ListGroupItem>
      <div>best elf-supplier delivers: {bestElf}</div> 
      <div>top-3 elf-supplier deliver: {top3}</div>  
    </ListGroupItem>
  )
}

export default Day01;
