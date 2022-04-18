const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// const = variables that do not change, let = variables that change
randomize.addEventListener('click', result);

function result() {
  // create a new variable  newstory = storyText
  let newStory = 'storyText';
  let xitem = randomValueFromArray(insertX);
  let yitem = randomValueFromArray(insertY);
  let zitem = randomValueFromArray(insertZ);
  // create 3 more variables, xitem, yitem, zitem
  // let xitem = randomValueFromArray(insertX)


  // replace :insertx: :inserty: :insertx:
  string.replace(:insertX:, xitem)
  string.replace(:insertY:, yitem)
  string.replace(:insertZ:, zitem)
  if(customName.value !== '') {
    const name = customName.value;
    // step 4
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    // turn weight into string
    // add string and stone together to create one string
    const temperature =  Math.round(94);

    //replace values in string with temp and weight variables

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

// replace function - newstory = newstory.replace
