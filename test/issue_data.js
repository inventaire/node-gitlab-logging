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

const getErr = function () {
  const err = new Error('doh!')
  const checksum = __checksum(err.stack)
  return { err, checksum }
}

describe('issue data', function () {
  describe('general', function () {
    it('should be a function', function (done) {
      __data.should.be.a.Function()
      done()
    })

    it('should return an object', function (done) {
      const { err, checksum } = getErr()
      __data(err, options, checksum).should.be.an.Object()
      done()
    })
  })

  describe('title', function () {
    it('should be a string', function (done) {
      const { err, checksum } = getErr()
      __data(err, options, checksum).title.should.be.a.String()
      done()
    })

    it('should content the checksum', function (done) {
      const { err, checksum } = getErr()
      __data(err, options, checksum).title.split(checksum).length.should.equal(2)
      done()
    })
  })

  describe('description', function () {
    it('should be a string', function (done) {
      const { err, checksum } = getErr()
      __data(err, options, checksum).description.should.be.a.String()
      done()
    })
  })

  describe('labels', function () {
    it('should be the same object as the one passed', function (done) {
      const { err, checksum } = getErr()
      err.labels = null
      should(__data(err, options, checksum).labels).not.be.ok()
      err.labels = ['bla', 'tests']
      __data(err, options, checksum).labels.should.be.an.Array()
      done()
    })
  })
})
