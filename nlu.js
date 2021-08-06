'use strict';

// モジュールを読込む。
const
  NaturalLanguageUnderstanding = require('ibm-watson/natural-language-understanding/v1'),
  { IamAuthenticator } = require('ibm-watson/auth');

const nlu = new NaturalLanguageUnderstanding({
  version: '2021-08-01',
  authenticator: new IamAuthenticator({ apikey: '' })
});
nlu.setServiceUrl('https://api.jp-tok.natural-language-understanding.watson.cloud.ibm.com/instances/6a3235a4-db62-4c23-9e2e-b8b6d033f9e1');

module.exports = nlu;
