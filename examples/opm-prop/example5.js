"use strict";
var qg = require("../../dist/index");
/**
 * EXAMPLE 5
 * delete a property by adding a new state with
 * as an instance of opm:Deleted
 */
var input = {
    propertyURI: 'https://localhost/opm/Property/3b5b00d8-9bcc-4a58-aba2-df059b5ded97',
    reliability: 'deleted'
};
var sc = new qg.OPMProp();
var q = sc.setReliability(input);
console.log(q);