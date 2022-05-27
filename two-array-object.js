"use strict";

// add whatever parameters you deem necessary & write docstring

/**takes two arrays return obj with array one being
 * keys and array 2 being key values. if array 2 is longer ignore extra values,
 * if array 1 is longer keys = null
 * 
 * twoArrayObject(['x', 'y', 'z'], [1,2]); // {'x': 1, 'y': 2, 'z': null}
 */

function twoArrayObject(keys, values) {
  const obj = {};
  const valuesLength = values.length;

  for (let i = 0; i < keys.length; i++) {
    //Could implement ternary
    //obj[keys[i]] = (i < valuesLength ? values[i] : null);

    if (i < valuesLength) {
      obj[keys[i]] = values[i];
    } else {
      obj[keys[i]] = null;
    }
  }
  return obj;
}
