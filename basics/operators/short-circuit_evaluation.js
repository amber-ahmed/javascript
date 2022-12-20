let username = '';
let defaultName = username || 'Stranger';
console.log(defaultName); 
let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'
console.log(`The ${writingUtensil} is mightier than the sword.`);
tool = 'marker'
writingUtensil = tool || 'pen'
console.log(`The ${writingUtensil} is mightier than the sword.`);