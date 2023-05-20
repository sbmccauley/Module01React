let sheri = 'Sheri McCauley';
let steve = 'Steve McCauley';
let max = 'Max McCauley';
let hamish = 'Hamish The Hamster McCauley';
let bob = 'Bob The Beagle McCauley';
let sutter = 'Sutter The Schnauzer McCauley';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'magenta',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sheri), /*#__PURE__*/React.createElement("li", null, steve), /*#__PURE__*/React.createElement("li", null, max), /*#__PURE__*/React.createElement("li", null, hamish.toLowerCase()), /*#__PURE__*/React.createElement("li", null, bob), /*#__PURE__*/React.createElement("li", null, sutter.toUpperCase()));
ReactDOM.render(element, document.getElementById('content'));