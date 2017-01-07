const NS = 'gitlab-logging/issue_data'

// Process issue data
module.exports = function (errorData, options, checksum) {
    const FN = '[' + NS + '.__data' + ']'

    var description = '```javascript\n' + errorData.stack + '\n```'
    description += `[ERROR@${options.environment}] (${checksum})\n`

    return {
      title: errorData.message,
      description: description
    }
}
