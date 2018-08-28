var Web3_etc = require('./lib/web3');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Web3_etc === 'undefined') {
    window.Web3_etc = Web3_etc;
}

module.exports = Web3_etc;
