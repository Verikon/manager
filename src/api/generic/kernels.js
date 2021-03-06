import {
  genConfig, ReducerGenerator, genActions,
  ONE, MANY,
} from '~/api/internal';

export const config = genConfig({
  plural: 'kernels',
  endpoint: id => `/linode/kernels/${id}`,
  supports: [ONE, MANY],
});

export const actions = genActions(config);
export const { reducer } = new ReducerGenerator(config);
