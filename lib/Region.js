'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Region = function (_Component) {
	_inherits(Region, _Component);

	function Region() {
		_classCallCheck(this, Region);

		return _possibleConstructorReturn(this, (Region.__proto__ || Object.getPrototypeOf(Region)).apply(this, arguments));
	}

	_createClass(Region, [{
		key: 'renderHandles',
		value: function renderHandles() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('div', { 'data-dir': 'se', className: _style.regionHandleSE + ' region-handle-se' }),
				_react2.default.createElement('div', { 'data-dir': 'sw', className: _style.regionHandleSW + ' region-handle-sw' }),
				_react2.default.createElement('div', { 'data-dir': 'nw', className: _style.regionHandleNW + ' region-handle-nw' }),
				_react2.default.createElement('div', { 'data-dir': 'ne', className: _style.regionHandleNE + ' region-handle-ne' })
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var localStyle = {
				width: this.props.width * this.props.zoom + 'px',
				height: this.props.height * this.props.zoom + 'px',
				left: this.props.x * this.props.zoom + 'px',
				top: this.props.y * this.props.zoom + 'px'
			};
			var dataRenderArgs = {
				data: this.props.data,
				isChanging: this.props.changing,
				index: this.props.index
			};

			return _react2.default.createElement(
				'div',
				{
					style: (0, _objectAssign2.default)({}, localStyle, this.props.customStyle, this.props.data.regionStyle),
					className: _style.region + ' region',
					onMouseDown: this.props.onCropStart,
					onTouchStart: this.props.onCropStart,
					'data-wrapper': 'wrapper'
				},
				this.props.handles ? this.renderHandles() : null,
				this.props.dataRenderer ? this.props.dataRenderer(dataRenderArgs) : null
			);
		}
	}]);

	return Region;
}(_react.Component);

Region.propTypes = {
	x: _propTypes.PropTypes.number.isRequired,
	y: _propTypes.PropTypes.number.isRequired,
	width: _propTypes.PropTypes.number.isRequired,
	height: _propTypes.PropTypes.number.isRequired,
	index: _propTypes.PropTypes.number.isRequired,
	onCropStart: _propTypes.PropTypes.func.isRequired,
	handles: _propTypes.PropTypes.bool,
	changing: _propTypes.PropTypes.bool,
	dataRenderer: _propTypes.PropTypes.func,
	data: _propTypes.PropTypes.object,
	customStyle: _propTypes.PropTypes.object,
	zoom: _propTypes.PropTypes.number
};

Region.defaultProps = {
	zoom: 1
};

module.exports = Region;