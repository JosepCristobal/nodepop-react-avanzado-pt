import { adverts, initialState } from './reducers';
import { ADVERTS_LOADED_SUCCESS, ADVERTS_DETAIL_SUCCESS } from './types';

// Test OK

describe('adverts', () => {
  test('should manage ANY action', () => {
    const state = initialState.adverts;
    const action = { type: 'ANY' };
    const nextState = adverts(state, action);
    expect(nextState).toBe(state);
  });

  test('should manage ADVERTS_LOADED_SUCCESS action', () => {
    const state = initialState.adverts;
    //const advertsData = [];
    const action = { type: ADVERTS_LOADED_SUCCESS, payload: [] };
    const expectedState = {
      ...initialState.adverts,
      loaded:true,
      data: action.payload,
    };
    const nextState = adverts(state, action);
    expect(nextState).toStrictEqual(expectedState);
  });

  test('should manage ADVERTS_DETAIL_SUCCESS action', () => {
    const state = initialState.adverts;
    const advert = {};
    const action = { type: ADVERTS_DETAIL_SUCCESS, payload: advert };
    const expectedState = {
      ...initialState.adverts,
      loaded: false,
      data:[...initialState.adverts.data, advert],
    };
    const nextState = adverts(state, action);
    expect(nextState).toStrictEqual(expectedState);
  });
});
