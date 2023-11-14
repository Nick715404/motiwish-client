import './Mars.scss';
import { View, Panel } from '@vkontakte/vkui';

export default function Mars() {
  return (
    <View activePanel='mars'>
      <Panel id='mars'>
        <div className='mars'>
          <div className='mars-box'>
            <div className='mars-bg'></div>
          </div>
        </div>
      </Panel>
    </View>
  )
}
