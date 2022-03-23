async function pause(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

/**
 * Retry async generator
 * @param {number} attempts the number of attempts
 * @param {number} delay the delay to wait between attempts
 */
async function* retry(attempts, delay) {
  for (let i = 0; i < attempts; i++) {
    yield i;
    await pause(delay);
  }
}

const service = {
  count: 0,
  async getJob() {
    return {
      status: this.count++ < 4 ? 'PENDING' : 'FINISHED'
    }
  }
}

async function waitForJobFinished() {
  const maxAttempts = 4;
  let jobFinished = false;
  for await (const i of retry(maxAttempts, 1000)) {
    console.log(`Attempt no. ${i}`)
    const job = await service.getJob();
    if (job?.status === 'FINISHED') {
      jobFinished = true;
      break; 
    }
  }
  if (!jobFinished) 
    throw new Error(`Job is still not finished after ${maxAttempts} attempts.`);
}

waitForJobFinished();

