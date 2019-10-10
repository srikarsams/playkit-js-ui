//@flow
import style from '../../styles/style.scss';
import {h, Component} from 'preact';
import {withPlayer} from '../player';
import {PresetVideoAreaContainer} from '../side-panels-container';

@withPlayer
/**
 * VideoPlayer component
 *
 * @class VideoPlayer
 * @example <VideoPlayer>...</VideoPlayer>
 * @extends {Component}
 */
class VideoPlayer extends Component {
  _el: HTMLElement;

  /**
   * this component should not render itself when player object changes.
   *
   * @returns {void}
   * @memberof VideoPlayer
   */
  shouldComponentUpdate() {
    return false;
  }

  /**
   * appending the player view to component after the component was mounted
   *
   * @returns {void}
   * @memberof VideoPlayer
   */
  componentDidMount() {
    this._el.appendChild(this.props.player.getView());
  }

  _setRef = ref => {
    this._el = ref;
  };

  /**
   * render component
   *
   * @returns {React$Element} - component element
   * @memberof VideoPlayer
   */
  render(): React$Element<any> {
    return (
      <PresetVideoAreaContainer>
        {context => <div className={context.className + ' ' + style.videoPlayer} style={context.style} ref={this._setRef} />}
      </PresetVideoAreaContainer>
    );
  }
}

export {VideoPlayer};
