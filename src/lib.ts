// jQuery
declare var jQuery: any;

// RxJS
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';

// Smartadmin Dependencies
window['jQuery'] = require('jquery');
window['$'] = window['jQuery'];
// import 'jquery-ui-npm/jquery-ui.min.js'

// require('bootstrap/js/src/tooltip.js'); // required for X-editable
// require('bootstrap/js/src/popover.js'); // required for X-editable
// require('bootstrap/js/src/dropdown.js'); // required for bootstrap-colorpicker
// require('bootstrap/js/src/tab.js'); //
// require('bootstrap/js/src/modal.js'); //

window['moment'] = require('moment');


require('smartadmin-plugins/notification/SmartNotification.min.js');

