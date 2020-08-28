"use strict";

var traverseDomAndCollectElements = function traverseDomAndCollectElements(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  } // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ

}; // Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function selectorTypeMatcher(selector) {
  // tu código aquí
  if (selector[0] === '#') {
    return 'id';
  } else if (selector[0] === '.') {
    return 'class';
  } else if (selector.split('.').length > 1) {
    return 'tag.class';
  }

  return 'tag';
}; // NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.


var matchFunctionMaker = function matchFunctionMaker(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {} else if (selectorType === "class") {} else if (selectorType === "tag.class") {} else if (selectorType === "tag") {}

  return matchFunction;
};

var $ = function $(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};