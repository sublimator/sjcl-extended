'use strict';
var sjcl = require('sjcl');

require('./sjcl-ecc-pointextras.js');
require('./sjcl-secp256k1.js');
require('./sjcl-extramath.js');
// Now in 1.0.3, we could remove this :)
require('./sjcl-montgomery.js');
require('./sjcl-validecc.js');
require('./sjcl-ecdsa-canonical.js');
require('./sjcl-ecdsa-der.js');
require('./sjcl-ecdsa-recoverablepublickey.js');
require('./sjcl-jacobi.js');

module.exports = sjcl;