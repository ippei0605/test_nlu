'use strict';

// モジュールを読込む。
const
  fs = require('fs'),
  nlu = require('./nlu');

nlu.createClassificationsModel({
  language: 'ja',
  trainingData: fs.createReadStream('./training-data.json'),
  name: 'MyCategoriesModel',
  modelVersion: '1.0.0'
})
  .then(v => {
    console.log(v.result);
  })
  .catch(e => {
    console.log('error:', e);
  });
