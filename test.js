const crypto = require('crypto');

// 해시 생성 예제
const hash = crypto.createHash('sha256');
hash.update('Hello, world!');
const digest = hash.digest('hex');

console.log('Hash:', digest);