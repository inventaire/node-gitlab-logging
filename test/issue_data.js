const should = require('should')
const __data = require('../src/issue_data')
const __checksum = require('../src/checksum')
const options = {
    host: 'https://gitlab.server.tld',
    user: 'gitlab.user',
    token: 'USER_GITLAB_TOKEN',
    project_id: 114,
    assignee_id: 2,
    environment: 'production'
}

const err = new Error('doh!')
const checksum = __checksum(err.stack)
console.log(checksum)

describe('issue data', function () {
  it('should be a function', function (done) {
    __data.should.be.a.Function()
    done()
  })

  it('should return an object', function (done) {
    __data(err, options, checksum).should.be.an.Object()
    done()
  })

  it('should return with a title', function (done) {
    __data(err, options, checksum).title.should.be.a.String()
    done()
  })

  it('should return with a title', function (done) {
    __data(err, options, checksum).description.should.be.a.String()
    done()
  })

  it('should return a title with the checksum', function (done) {
    __data(err, options, checksum).title.split(checksum).length.should.equal(2)
    done()
  })
})
