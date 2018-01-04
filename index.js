// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block === 42) {
    return 0
  } else if (block > 42) {
    return block - 42
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  const blocks = distanceFromHqInBlocks(block)

  return blocks * 264
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264
}

function calculatesFarePrice() {

}
