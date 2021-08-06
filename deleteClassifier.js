'use strict';

// モジュールを読込む。
const
  fs = require('fs'),
  nlu = require('./nlu');

nlu.deleteClassificationsModel({
  modelId: '74beddef-2cf8-41aa-9e8f-35e34a9a9f82'
})
  .then(v => {
    console.log(v.result);
  })
  .catch(e => {
    console.log('error:', e);
  });
