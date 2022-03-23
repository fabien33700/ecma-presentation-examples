
const success = Promise.resolve(42);
const failure = Promise.reject(new Error('fail'));

async function execute(promise) {
  try {
    const value = await promise;
    console.log(value);
  } catch(reason) {
    console.error(reason.message);
  } finally {
    console.log('Task finished')
  }
}

execute(success).then(() => execute(failure));