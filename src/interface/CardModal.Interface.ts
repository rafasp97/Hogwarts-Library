import { ICharacter } from "./Character.Interface";

export interface ICardModal {
  character: ICharacter;
  onClose: () => void;
}
