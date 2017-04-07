'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AutosizeTextarea = undefined;

var _autosize = require('autosize');

var _autosize2 = _interopRequireDefault(_autosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutosizeTextarea = exports.AutosizeTextarea = {

	props: ['value'],

	template: '<textarea ref="textarea" @input="updateValue($event.target.value)">{{ value }}</textarea>',

	methods: {
		updateValue: function updateValue(val) {
			(0, _autosize2.default)(this.$el);
			this.$emit('input', val);
		}
	},

	mounted: function mounted() {
		(0, _autosize2.default)(this.$el);
	}
};