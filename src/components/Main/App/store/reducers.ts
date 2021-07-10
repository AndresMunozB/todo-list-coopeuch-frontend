import { ActionPayload, createReducer } from 'store';
import { getCaches } from './actions';


export type Cache = {
  value: number
};

export type State = {
  cache: Cache;
};

const initialState: State = {
  cache: {
    value: 0
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getCaches.SUCCESS, (state, action: ActionPayload<Cache>) => {
    console.log("state :>>", state)
    console.log("action :>>", action)
  })
});

export default reducer;
