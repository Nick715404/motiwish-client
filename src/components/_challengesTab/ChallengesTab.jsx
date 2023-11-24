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

export default function ChallengesTab() {
  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel="modals">
          <Panel id="modals">
            <Group>
              <CellButton>
                <div className="MyChallenge__img-box" />
                <div className="MyChallenge__item-title">
                  Мои челленджи
                </div>
              </CellButton>
              <CellButton>
                <div className="MyChallenge__img-box" />
                <div className="MyChallenge__item-title">
                  Создать челлендж
                </div>
              </CellButton>
              <CellButton>
                <div className="MyChallenge__img-box" />
                <div className="MyChallenge__item-title">
                  Магазин
                </div>
              </CellButton>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  )
}
