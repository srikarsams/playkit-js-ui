//@flow
import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {Container} from '../container';
import {bindActions} from 'utils/bind-actions';
import {actions} from 'reducers/shell';
import {PresetVideoAreaContainer} from 'components/side-panels-container';

/**
 * mapping state to props
 * @param {*} state - redux store state
 * @returns {Object} - mapped state to this component
 */
const mapStateToProps = state => ({
  activePresetName: state.shell.activePresetName,
  allowVideoArea: state.shell.presetSettings.allowVideoArea
});

@connect(
  mapStateToProps,
  bindActions(actions)
)
export class VideoArea extends Component {
  static defaultProps = {};

  render() {
    const {activePresetName, allowVideoArea} = this.props;

    return allowVideoArea ? (
      <PresetVideoAreaContainer>
        {context => (
          <div>
            <Container key={activePresetName} name={'VideoArea'} style={context.style} />
          </div>
        )}
      </PresetVideoAreaContainer>
    ) : null;
  }
}
