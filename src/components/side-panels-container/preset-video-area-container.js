//@flow
import {h, Component} from 'preact';
import {connectToUIPresetsStore} from '../side-panel';
import style from '../../styles/style.scss';

// todo sakal change to video-area component
@connectToUIPresetsStore
export class PresetVideoAreaContainer extends Component {
  shouldComponentUpdate(nextProps: PropsType): boolean {
    return nextProps.sidePanelsStore !== this.props.sidePanelsStore;
  }

  render() {
    const {children, sidePanelsStore} = this.props;
    const videoStyle = sidePanelsStore.calculateVideoStyles();
    console.log(`sakal render Preset Video Area  Container`);
    return children[0]({ className: style.videoSize, style: videoStyle});
  }
}