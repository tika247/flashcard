interface GlobalPropsType {
  $modalMode: {
    type: string | boolean;
    index: number | null;
  };
}
interface WordType {
  word?: string;
  meaning?: string;
  japanese?: string;
  example?: string;
  note?: string;
  state?: string | undefined;
}
type PartialWordType = Partial<WordType>;
interface objectKeyType<T> {
  [key: string]: T;
}

// class Type
interface DragControllerType {
  init: (root: HTMLTableRowElement) => void;
}
