// Copyright (c)2022 Quinn Michaels
// ERROR test file

const {expect} = require('chai')
const error = require('./index.js');

describe(error.me.name, () => {
  beforeEach(() => {
    return error.init()
  });
  it('Check the Deva Object', () => {
    expect(error).to.be.an('object');
    expect(error).to.have.property('agent');
    expect(error).to.have.property('vars');
    expect(error).to.have.property('listeners');
    expect(error).to.have.property('methods');
    expect(error).to.have.property('modules');
  });
})
