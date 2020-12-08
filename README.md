# fastify-share
![Node.js CI](https://github.com/gmvbr/fastify-share/workflows/Node.js%20CI/badge.svg)
![Node.js Package](https://github.com/gmvbr/fastify-share/workflows/Node.js%20Package/badge.svg)

share common objects

# Decorate

``` typescript

// fastify.singleton
interface Singleton {
    [k: string]: unknown
}

// fastify.factory
interface Factory {
    [k: string]: unknown
}

// fastify.model
interface Model {
    [k: string]: unknown
}

// fastify.service
interface Service {
    [k: string]: unknown
}

// fastify.util
interface Util {
    [k: string]: unknown
}
```

## Example

### JS
```javascript
const fastify = require('fastify');

const app = fastify();

app.register(fastifyShare)
  .after(() => {
    app.singleton.x = 20
  })

app.register(async () => {
  const {x} = app.singleton;
  console.log(x);
});

// ...
```
### TS

```typescript
import fastify from 'fastify'
import fastifyShare from 'fastify-share'

//
// define the types of common objects
//
declare namespace 'fastify-share' {

    interface Singleton {
        x: number;
    }
}

const app = fastify();

app.register(fastifyShare)
  .after(() => {
    app.singleton.x = 20
  })

app.register(async () => {
  const {x} = app.singleton;
  console.log(x);
});

// ...
```
