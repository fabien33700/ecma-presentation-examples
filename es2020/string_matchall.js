const logs = `\
2022-03-22T13:38:56.951Z [info] PostController : GET /posts/18
2022-03-22T13:38:56.951Z [info] PostController : POST /posts { message: '', author: ''}
2022-03-22T13:38:56.951Z [warn] MongoConnectionManager : the mongo instance is slower than expected (avg. 458 ms to respond)
`

const reDate = /(?<date>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)/;
const reLevel = /\[\s*(?<level>fatal|error|warn|info|debug|silly)+\s*\]/;
const reMessage = /(?<message>.*)/;

const regexp = new RegExp([reDate, reLevel, reMessage].map(re => re.source).join('\\s+'), 'gmi');

function displayLogDetails(match) {
  const [globalMatch] = match;
  const { index, groups: { date, level, message } } = match;

  console.log(`globalMatch : ${globalMatch}`);
  console.log(`index       : ${index}`);
  console.log(`-- groups --`);
  console.log(`  date      : ${date}`);
  console.log(`  level     : ${level}`);
  console.log(`  message   : ${message}`);
  console.log(`-----------------------------`);
}

let matches = logs.matchAll(regexp);
for (const match of matches) { 
  displayLogDetails(match);
}

// l'itérateur est stateful, il faut en régénérer un pour reproduire l'itération
for (const match of matches) { 
  console.log('on ne passe pas ici', match);
}


// Avant cette feature 
while ((match = regexp.exec(logs)) !== null) {
  displayLogDetails(match);
}
