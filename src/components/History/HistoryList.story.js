import { storybookDefaults as defaults, statusMocks } from '>/helpers'
import { storiesOf } from '@storybook/vue'
import { historyMock } from '>/mockdata'

import HistoryListUI from './HistoryListUI'

storiesOf('History List', module)
  .add('Default', () => defaults({
    render: h => h(HistoryListUI, {
      props: {
        history: historyMock,
        status: statusMocks.default(),
        canLoadMore: false,
        fetchMore: () => {},
      },
    }),
  }))
