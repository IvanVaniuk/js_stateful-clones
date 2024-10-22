'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let stateClone = Object.assign({}, state);
  const history = [];

  actions.forEach((action) => {
    stateClone = Object.assign({}, stateClone);

    switch (action.type) {
      case 'addProperties':
        Object.assign(stateClone, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((element) => {
          delete stateClone[element];
        });
        break;

      case 'clear':
        for (const key in stateClone) {
          delete stateClone[key];
        }
        break;
    }
    history.push(stateClone);

    return history;
  });
}

module.exports = transformStateWithClones;
