import './Challenges.scss';

import { Panel, View } from '@vkontakte/vkui';

import ChallengesTab from '../../components/_challengesTab/ChallengesTab';
import Header from './../../components/_header/Header';

export default function Challenges() {

  return (
    <View activePanel="challengesPanel">
      <Panel id='challengesPanel'>
        <Header />
        <div className="container">
          <ChallengesTab />
        </div>
      </Panel>
    </View>
  )
}