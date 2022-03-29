// match(res) {
//   when({ status: 200, body, ...rest }): handleData(body, rest)
//   when({ status, destination: url }) if (300 <= status && status < 400):
//     handleRedirect(url)
//   when({ status: 500 }) if (!this.hasRetried): do {
//     retry(req);
//     this.hasRetried = true;
//   }
//   default: throwSomething();
// }