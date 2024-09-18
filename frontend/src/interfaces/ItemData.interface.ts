export interface ItemData {
  text: string;
  alt: string;
  icon: JSX.Element;
}

export type ActionType = 'like' | 'dislike' | 'empty';

export interface ItemInfo extends Omit<ItemData, 'alt'> {}
export interface ItemBar extends Omit<ItemData, 'icon'> {}
export interface ThumbButton extends Pick<ItemData, 'icon'> {
  alt: ActionType;
}
