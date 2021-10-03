import fetch from 'node-fetch';

const response = await fetch('https://api.solscan.io/account?address=2KDwGzcoPVRLwxnvLZkNtpmxeLaoFLXFLw7HUvHs5oJB');
const body = await response.text();

console.log(body);
