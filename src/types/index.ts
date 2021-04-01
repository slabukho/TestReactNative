export type RootStackParamList = {
  CardList: CatsData;
};

export type CardProp = {
  id: number;
  name: string;
  imageUrl: string;
};

export interface CardPropTypes {
  item: CardProp;
  listOfId: number[];
}

export interface ButtonSubmit {
  onSubmit: () => void;
  isDisabled: boolean;
}

export type CatsData = {
  data: CardProp[];
};
