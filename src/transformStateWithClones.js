'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let clone = Object.assign({}, state);

  return actions.map((action) => {
    clone = Object.assign({}, clone);

    switch (action.type) {
      case 'addProperties':
        Object.assign(clone, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((element) => {
          delete clone[element];
        });
        break;

      case 'clear':
        for (const key in clone) {
          delete clone[key];
        }
        break;
    }

    return clone;
  });
}

module.exports = transformStateWithClones;
