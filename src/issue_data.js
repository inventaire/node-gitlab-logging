const NS = 'gitlab-logging/issue_data'

// Process issue data
module.exports = function (errorData, options, checksum) {
    const FN = '[' + NS + '.__data' + ']'

    const { message, labels, stack, context } = errorData

    let description = '```\n' + stack + '```'
    if (context) {
      description += '```\n' + JSON.stringify(context, null, 2) + '```'
    }

    return {
        title: `${message} [${checksum}]`,
        description,
        labels
    }
}
