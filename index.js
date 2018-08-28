var Web3_etc = require('./lib/web3');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
    window.Web3 = Web3_etc;
}

module.exports = Web3_etc;
