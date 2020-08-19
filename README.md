# Introduction

Reproduction for https://github.com/prisma/prisma-client-js/issues/839

# To Reproduce

- Put `schema.sql` into a database
- Run `yarn prisma generate`
- Run `node index.js`

Note that the script hits the console log after Prisma disconnect in finally and the node script gets stuck.
