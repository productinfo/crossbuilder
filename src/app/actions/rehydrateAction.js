import { REHYDRATE } from 'redux-persist/constants';
import * as actions from './counter';

const rehydrateAction = (store) => {
  return (key, data) => {
    if (key === 'extension' && data.status === 'sent') {
      console.warn('key', key, data);
      store.dispatch(actions[data.fN]());
    }

    return {
      type: REHYDRATE,
      key: key,
      payload: data
    }
  };
};

export default rehydrateAction;