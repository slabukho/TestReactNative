import {
  all,
  SimpleEffect,
  AllEffect,
  ForkEffectDescriptor,
} from 'redux-saga/effects';
import cards from './Cards';

export default function* rootSaga(): Generator<
  AllEffect<SimpleEffect<'FORK', ForkEffectDescriptor<void>>>
> {
  const sagas: SimpleEffect<'FORK', ForkEffectDescriptor<void>>[] = [
    ...cards,
  ];

  yield all(sagas);
}
