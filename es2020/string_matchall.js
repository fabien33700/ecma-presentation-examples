const logs = `\
2022-03-22T13:38:56.951Z [info] PostController : GET /posts/18
2022-03-22T13:38:56.951Z [info] PostController : POST /posts { message: '', author: ''}
2022-03-22T13:38:56.951Z [warn] MongoConnectionManager : the mongo instance is slower than expected (avg. 458 ms to respond)
`

const reDate = /(?<date>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)/;
const reLevel = /\[\s*(?<level>fatal|error|warn|info|debug|silly)+\s*\]/;
const reMessage = /(?<message>.*)/;

const regex = new RegExp([reDate, reLevel, reMessage].map(re => re.source).join('\\s+'), 'gmi');

for (const match of logs.matchAll(regex)) { 
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

// TODO Exemple avant cette feature
// TODO Exemple sans groupe nommés
// TODO Démontrer le caractère stateful de l'itérateur