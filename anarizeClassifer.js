'use strict';

// モジュールを読込む。
const nlu = require('./nlu');

nlu.analyze({
  text: '住所',
  features: {
    classifications: {
      model: '20f1cfca-4dbf-416f-9227-53ae853e9b63'
    }
  },
  language: 'ja'
})
  .then(v => {
    console.log(v.result);
  })
  .catch(e => {
    console.log('error:', e);
  });
