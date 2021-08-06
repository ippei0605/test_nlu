'use strict';

// モジュールを読込む。
const nlu = require('./nlu');

nlu.listClassificationsModels({})
  .then(v => {
    console.log(JSON.stringify(v.result, undefined, 2));
  })
  .catch(e => {
    console.log('error:', e);
  });
