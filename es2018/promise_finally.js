
const success = Promise.resolve(42);
const failure = Promise.reject(new Error('fail'));

function execute(promise) {
  return promise.then((value) => console.log(value))
    .catch((reason) => console.error(reason.message))
    .finally(() => console.log('Task finished'));
}

execute(success).then(() => execute(failure));