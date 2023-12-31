import './ChallengesTab.scss';

import {
  SplitLayout,
  SplitCol,
  View,
  Panel,
  Group,
  CellButton
} from '@vkontakte/vkui';

import SpringModalSheet from '../_springSheet/SpringModalSheet';
import MyChallenge from '../_myChallenge/MyChallenge';
import CreateChallenge from '../_createChallenge/CreateChallenge';
import Market from '../_market/Market';

export default function ChallengesTab() {

  const market = () => (
    <></>
  )

  const myChallenges = () => (
    <></>
  )

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel="modals">
          <Panel id="modals">
            <Group>
              <div style={{ marginTop: '5%' }}>
                <div className="animation-box-left--first">
                  <CreateChallenge />
                </div>
                <div className="animation-box-right--first">
                  <MyChallenge />
                </div>
                <div className="animation-box-right--second">
                  <Market />
                </div>
                <SpringModalSheet />
              </div>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  )
}
