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

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel="modals">
          <Panel id="modals">
            <Group>
              <MyChallenge />
              <CreateChallenge />
              <Market />
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  )
}
