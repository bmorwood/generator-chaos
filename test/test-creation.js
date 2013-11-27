/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('chaos generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('chaos:app', [
                '../../app', [
                    helpers.createDummyGenerator(),
                    'mocha'
                ]
            ]);
            done();
        }.bind(this));
    });
});
