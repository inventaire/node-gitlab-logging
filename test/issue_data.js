require('should')
const __data = require('../src/issue_data')
const options = {
    host: 'https://gitlab.server.tld',
    user: 'gitlab.user',
    token: 'USER_GITLAB_TOKEN',
    project_id: 114,
    assignee_id: 2,
    environment: 'production'
}

describe('issue data', function () {
  it('should be a function', function (done) {
    __data.should.be.a.Function()
    done()
  })

  it('should return an object', function (done) {
    const err = new Error('doh!')
    __data(err, options).should.be.an.Object()
    done()
  })

  it('should return with a title', function (done) {
    const err = new Error('doh!')
    __data(err, options).title.should.be.a.String()
    done()
  })

  it('should return with a title', function (done) {
    const err = new Error('doh!')
    __data(err, options).description.should.be.a.String()
    done()
  })
})
