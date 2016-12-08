// import {_addEvent} from '../../commons/utiles';

/*
  DOM0 / DOM2 / IE 方法来添加事件
*/
let _addEvent = (element, action, event, fn) => {
  if(action === 'on' ) {

    if (element.addEventListener) {
      // DOM2 级事件处理  ,
      // 第三个参数 true ，添加到捕获阶段
      // 为 false 添加到 冒泡阶段
      element.addEventListener(event, fn, false);
    } else if(element.attachEvent) {
      //  IE 添加到冒泡阶段
      element.attachEvent( "on" + event, fn);
    } else {
      // DOM0 级事件处理
      element["on" + event ] = fn;
    }

  }else if(action === 'remove') {

    if (element.addEventListener) {
      element.removeEventListener(event, fn, false);
    } else if(element.detachEvent) {
      element.detachEvent( "on" + event, fn);
    } else {
      element["on" + event ] = null;
    }

  } else {
    throw Error('the second parameter of _addEvent Function can only be "on" or "remove" ');
  }
}


class Loading extends React.PureComponent {
  static defaultProps = {
    prevent: true,
    addStyle: {},
  }

  static propTypes = {
    // 是否要阻止默认点击，移动事件。
    // true 的话，preventDefault 会在 component will mount 的时候设置，在 unmount 的时候取消
    prevent: React.PropTypes.bool,
    // （非必需）有需要控制最外层的 样式。
    addStyle: React.PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.displayName = 'Loading';

    this.prevTouch = this.prevTouch.bind(this);
  }

  prevTouch() {
    console.log('touch');
    event.preventDefault();
  }

  componentWillMount() {
    if(this.props.prevent) {
      _addEvent (document, 'on', 'touchstart', this.prevTouch);
      _addEvent (document, 'on', 'touchmove', this.prevTouch);
      _addEvent (document, 'on', 'touchend', this.prevTouch);
      _addEvent (document, 'on', 'click', this.prevTouch);
    }
  }

  componentWillUnmount() {
    console.log("LOADING will unmounted");
    if(this.props.prevent) {
      _addEvent (document, 'remove', 'touchstart', this.prevTouch);
      _addEvent (document, 'remove', 'touchmove', this.prevTouch);
      _addEvent (document, 'remove', 'touchend', this.prevTouch);
      _addEvent (document, 'remove', 'click', this.prevTouch);
    }
  }

  render() {
    return(
      <div className="loading__wrap">
        <div className="loading" style={this.props.addStyle}>
          <span className="icon-loading iconfont">
            &#xe756;
          </span>
        </div>
      </div>
    );
  }
}

export default Loading;
