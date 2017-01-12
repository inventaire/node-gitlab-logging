const NS = 'gitlab-logging/issue_data'

// Process issue data
module.exports = function (errorData, options, checksum) {
    const FN = '[' + NS + '.__data' + ']'
    return {
        title: `${errorData.message} [${checksum}]`,
        description: '```javascript\n' + errorData.stack + '\n```',
        labels: errorData.labels
    }
}
