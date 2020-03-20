const { URL } = require('url');

const myUrl = new URL(
  'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (difference between this and 'Host' is this doesn't get the port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Loop through Params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
