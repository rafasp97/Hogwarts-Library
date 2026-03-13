import { ICharacter } from "./Character.Interface";

export interface IProfileModal {
  character: ICharacter;
  onClose: () => void;
}
