var assert = require('assert')
var hasAdjacentSiblingSelector = require('..')

var adjacentSiblingSelectors = [
  'li + li',
  '#foo .bar .baz + .baz'
]

var noAdjacentSiblingSelectors = [
  'foo',
  '#bar',
  'li > li'
]

describe('has-adjacent-sibling-selector', function() {

  it('should do something return true when an adjacent sibling selector exists', function() {
    adjacentSiblingSelectors.forEach(function(selector) {
      assert.ok(hasAdjacentSiblingSelector(selector))
    })
  })

  it('should do something return false when no adjacent sibling selector exists', function() {
    noAdjacentSiblingSelectors.forEach(function(selector) {
      assert.ok(!hasAdjacentSiblingSelector(selector))
    })
  })
})
