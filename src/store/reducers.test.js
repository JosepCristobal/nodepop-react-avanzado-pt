import { adverts, initialState } from './reducers';
import { ADVERTS_LOADED_SUCCESS, ADVERTS_DETAIL_SUCCESS } from './types';


describe('adverts', () => {
  test('should manage ANY action', () => {
    const state = initialState.adverts;
    const action = { type: 'ANY' };
    const nextState = adverts(state, action);
    expect(nextState).toBe(state);
  });

  test('should manage ADVERTS_LOADED_SUCCESS action', () => {
    const state = initialState.adverts;
    const advertsData = [];
    const action = { type: ADVERTS_LOADED_SUCCESS, payload: advertsData };
    const expectedState = {
      ...initialState.adverts, advertsData,
    };
    const nextState = adverts(state, action);
    expect(nextState).toStrictEqual(expectedState);
  });

  test('should manage ADVERTS_DETAIL_SUCCESS action', () => {
    const state = initialState.adverts;
    const advert = {};
    const action = { type: ADVERTS_DETAIL_SUCCESS, payload: tweet };
    const expectedState = {
      ...initialState.adverts,...initialState.adverts, advert,
    };
    const nextState = adverts(state, action);
    expect(nextState).toStrictEqual(expectedState);
  });
});
