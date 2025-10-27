'use client'
import { useState } from "react";

type ModalState<T> = {
  open: boolean;
  data: T | null;
};

type UseModalStateOptions<T> = {
  initialData?: T | null;
};

type UseModalStateReturn<T> = {
  state: ModalState<T>;
  open: (data?: T | null) => void;
  close: () => void;
  setOpen: (open: boolean) => void;
  setData: (data: T | null) => void;
  reset: () => void;
};

export const useModalState = <T>(
  options: UseModalStateOptions<T> = {}
): UseModalStateReturn<T> => {
  const { initialData = null } = options;
  const [state, setState] = useState<ModalState<T>>({
    open: false,
    data: initialData,
  });

  const open = (data?: T | null) => {
    setState({ open: true, data: data ?? initialData });
  };

  const close = () => {
    setState({ open: false, data: initialData });
  };

  const setOpen = (openValue: boolean) => {
    setState((prev) => ({ open: openValue, data: prev.data }));
  };

  const setData = (data: T | null) => {
    setState((prev) => ({ open: prev.open, data }));
  };

  const reset = () => {
    setState({ open: false, data: initialData });
  };

  return {
    state,
    open,
    close,
    setOpen,
    setData,
    reset,
  };
};
