///array set operations ...

function diff (a, b) {
  //returns a\b meaning all members of a that are not members of b
  return a.filter(function (v) {return b.indexOf(v) < 0;});
}

function union (a, b) {
  return a.concat(b);
}

function intersect(a,b) {
  return a.filter(function (v) {return b.indexOf(v) > -1;});
}

function symetric_diff (a, b) {
  // is the set of all objects that are a member of exactly one of A and B (elements which are in one of the sets, but not in both).
  return diff(a.concat(b), intersect(a,b))
}


module.exports = {
  diff: diff,
  intersect: intersect,
  union: union,
  symetric_diff: symetric_diff
}
