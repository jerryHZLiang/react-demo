import _ from 'lodash';
import j from 'jquery'
function component () {
  //var element = document.createElement('div');
  var element = j('<div></div>');
  element.html(_.join(['Hi','webpack'], ' '))
  return element.get(0);
 
  //element.innerHTML = _.join(['Hello','webpack'], ' ');

  //return element;
}

document.body.appendChild(component());