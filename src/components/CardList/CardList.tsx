import {Alert, SafeAreaView, ScrollView} from 'react-native';
import React, {FunctionComponent, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//components
import Card from '../Card';
import SubmitButton from '../Button';
import {RootReducer} from '../../redux/reducers';
import {CardsAction} from '../../redux/actions/cards';

//styles
import {styles} from './CardListStyles';

const CardList: FunctionComponent = () => {
  const {cards} = useSelector((state: RootReducer) => state);
  const dispatch = useDispatch();

  const resetUser = useCallback(() => dispatch(CardsAction.request()), [
    dispatch,
  ]);

  const onSubmit = () => {
    Alert.alert(`Selected images id: ${cards.chosenId.join(',')}`);
  };

  useEffect(() => {
    resetUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        {cards &&
          cards.cards?.data.map(item => (
            <Card item={item} key={item.id} listOfId={cards.chosenId} />
          ))}
        <SubmitButton onSubmit={onSubmit} isDisabled={!cards.chosenId.length} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardList;
