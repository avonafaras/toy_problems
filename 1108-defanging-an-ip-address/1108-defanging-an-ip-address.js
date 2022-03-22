/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var defanged = address.split('');
    for (let i = 0; i < defanged.length; i++) {
        if (defanged[i] === '.') {
            defanged[i] = '[.]'
        }
    } 
    return defanged.join('');
};