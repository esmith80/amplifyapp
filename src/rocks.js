const fieldHeight = 660;
// create rocks in a fieldHeight ft X fieldHeight ft field (x and y coordiantes are integers in a 660 X 660 foot grid)
const setRock = () => {
  return { x: Math.ceil(Math.random() * fieldHeight), y: Math.ceil(Math.random() * fieldHeight) }
}

// implements a simple algorithm whereby field is checked in increments based on width of combine
// if a rock is detected pathchecker moves one foot down and check again
// assumption: combine is a 1 dimensional object with ability to be positioned on very edge of field
// assumption: combine width is same as its auger length
const calcCoverage = (rowHeight, rocks) => {
  let sqFeetCoverage = 0;
  let rowBegin = 0;
  let lastPass = false;

  while(!lastPass) {
    let rowEnd = rowBegin + rowHeight;    
    // assumption: tractor cannot extend past edge of field and must turn to allow its width to occupy bottom edge of field
    if(rowEnd > fieldHeight) {
      rowBegin = fieldHeight - rowHeight;
      rowEnd = fieldHeight;
      lastPass = true;
    }
    // test for rock in that row
    let rockFound = false;
    for(let rock of rocks) {
      // if rock found, move combine width down by one foot and try again
      if(rowBegin <= rock.y && rowEnd >= rock.y) {
        rowBegin++;
        rockFound = true;
        break;
      }      
    }
    if(!rockFound) {
      // move combine down an entire width and add total to square feet coverage
      sqFeetCoverage += rowHeight * fieldHeight;
      // 0.1 is added so that in a case where combine successfully does 2 consecutive rows, the boundary between those consecutive rows is not counted twice when considering the area (can result in an area covered of over 100%)
      rowBegin += rowHeight + 0.1;
    }
  }
  // this only happens if no rocks
  const percentCoverage = (sqFeetCoverage / (fieldHeight * fieldHeight)) * 100;
  console.log(`square feet covered: ${sqFeetCoverage.toFixed()}`);
  console.log(`percent covered: ${percentCoverage.toFixed(1)}%`);
}


let rocks = [];
rocks.push(setRock());
rocks.push(setRock());
rocks.push(setRock());
console.log(rocks);
calcCoverage(8.7, rocks);