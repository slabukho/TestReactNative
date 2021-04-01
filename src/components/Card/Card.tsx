import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

//components
import {CardsAction} from '../../redux/actions/cards';

//types
import {CardPropTypes} from '../../types';

//styles
import {styles} from './CardStyles';

const Card: FunctionComponent<CardPropTypes> = ({item, listOfId}) => {
  const {name, imageUrl, id} = item;
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setActive(listOfId.some(elem => elem === id))
  },[listOfId])
  const resetUser = useCallback(
    () => dispatch(CardsAction.setChosenId(listOfId)),
    [dispatch, listOfId],
  );

  const onPress = () => {
    !isActive
      ? listOfId.push(id)
      : listOfId.splice(
          listOfId.findIndex(elem => elem === id),
          1,
        );
    setActive(!isActive);
    resetUser();
  };

  const textColor = isActive ? '#FF0000' : '#000';
  const backColor = isActive ? '#f2f3f4' : '#fff';

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, {backgroundColor: backColor}]}>
        <Text style={[styles.text, {color: textColor}]}>{name}</Text>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
