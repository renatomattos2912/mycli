import { ActionTree, MutationTree, GetterTree } from 'vuex';

export const state = () => ({
  item: undefined as string | undefined,
});

export type State = ReturnType<typeof state>;

export const getters: GetterTree<State, State> = {
  getItem: (state) => state.item,
};

export const mutations: MutationTree<State> = {
  SET_ITEM(state, payload = undefined) {
    state.item = payload;
  },
};

export const actions: ActionTree<State, State> = {
  // async doSomething({ state, commit }) {
  //   // todo
  // },
};
