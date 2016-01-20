var cx = require('classnames/index'); // for some reason webpack was bringing in multiple versions of classnames if it wasn't defined like classnames/index

function convertStringToClassSetObject(classNames) {
  var classSetObject = {};

  classNames.split(' ').forEach(function(className) {
    classSetObject[className] = true;
  });

  return classSetObject;
}

function mergeClassSetObjects(baseObject, objectToMerge) {
  var clonedObject = JSON.parse(JSON.stringify(baseObject));

  for (className in objectToMerge ) {
    if (objectToMerge.hasOwnProperty(className)) {
      clonedObject[className] = objectToMerge[className];
    }
  }

  return clonedObject;
}

function combineClassName(className) {
  if (className === undefined) {
    className = {};
  }

  if (typeof className === 'string') {
    className = convertStringToClassSetObject(className)
  }

  var propClassName = this.props.className;
  if (typeof propClassName === 'string') {
    propClassName = convertStringToClassSetObject(propClassName)
  }

  var componentClassName = {};
  if (typeof this.getComponentClassName === 'function') {
    componentClassName = this.getComponentClassName();

    if (typeof componentClassName === 'string') {
      componentClassName = convertStringToClassSetObject(componentClassName)
    }
  }

  var mergedClassName = mergeClassSetObjects(componentClassName, className);
  mergedClassName = mergeClassSetObjects(mergedClassName, propClassName);

  return cx(mergedClassName);
}

module.exports = combineClassName;