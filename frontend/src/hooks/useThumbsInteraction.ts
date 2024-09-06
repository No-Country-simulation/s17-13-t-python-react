import { ActionType } from "@/interfaces/ItemData.interface";
import { useState } from 'react';

export function useThumbsInteraction(initialAction: ActionType = 'empty') {
  const [action, setAction] = useState<ActionType>(initialAction);
  // TODO actualizar en la DB
  const handleAction = (type: ActionType): void => {
    if (type === action) {
      return setAction('empty');
    }

    setAction(type);
  }

  return {
    handleAction,
    action,
  };
}
