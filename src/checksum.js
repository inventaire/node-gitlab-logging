const NS = 'gitlab-logging/checksum';
const crypto = require('crypto');

// Process issue checksum
module.exports = function(errorMessage) {
    const FN = '[' + NS + '.__checksum' + ']';

    return crypto.createHash('md5').update(errorMessage).digest('hex');
}
