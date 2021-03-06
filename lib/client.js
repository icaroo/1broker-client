// Generated by CoffeeScript 1.12.0
var _, default_config;

_ = require('lodash');

default_config = require('./config');

module.exports = function(api_key, referral_id) {
  var api, client, config, helper;
  if (!api_key) {
    console.warn("Warning: api_key is required in order to call 1Broker's API");
    return;
  }
  config = _.defaults({
    api_key: api_key,
    referral_id: referral_id
  }, default_config);
  api = function(file) {
    return _.partial(require("./api/" + file), config);
  };
  client = {
    user: {
      details: api('user/details'),
      overview: api('user/overview'),
      bitcoin_deposit_address: api('user/bitcoin_deposit_address'),
      transaction_log: api('user/transaction_log'),
      quota_status: api('user/quota_status')
    },
    order: {
      open: api('order/open'),
      create: api('order/create'),
      cancel: api('order/cancel')
    },
    position: {
      open: api('position/open'),
      edit: api('position/edit'),
      close: api('position/close'),
      close_cancel: api('position/close_cancel'),
      history: api('position/history')
    },
    market: {
      categories: api('market/categories'),
      list: api('market/list'),
      details: api('market/details'),
      quotes: api('market/quotes'),
      bars: api('market/bars'),
      ticks: api('market/ticks')
    },
    info: module.exports.info,
    add: module.exports.add,
    get: module.exports.get,
    calculate: module.exports.calculate
  };
  helper = function(file) {
    return _.partial(require("./helpers/" + file), client);
  };
  client.long = helper('long');
  client.short = helper('short');
  return client;
};

module.exports.info = {
  symbols: require('./info/symbols'),
  details: require('./info/details')
};

module.exports.add = {
  points: require('./helpers/add/points'),
  percentage: require('./helpers/add/percentage')
};

module.exports.get = {
  points: require('./helpers/get/points'),
  percentage: require('./helpers/get/percentage')
};

module.exports.calculate = require('./helpers/calculate');
