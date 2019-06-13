"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimeFromUnixTime = exports.getDateFromUnixTime = void 0;

var _dateFns = require("date-fns");

var getDateFromUnixTime = function getDateFromUnixTime(unixTime) {
  var date = new Date(unixTime * 1000);
  return (0, _dateFns.format)(date, 'MM/DD/YYYY');
};

exports.getDateFromUnixTime = getDateFromUnixTime;

var getTimeFromUnixTime = function getTimeFromUnixTime(unixTime) {
  var date = new Date(unixTime * 1000);
  return (0, _dateFns.format)(date, 'hh:mm A');
};

exports.getTimeFromUnixTime = getTimeFromUnixTime;