export interface propModal {
    setOpenModal: (bool: boolean) => void;
}

export interface propOptionModal {
    option: string;
    checkedItems: Record<string, boolean>;
    handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleGustos: (p1: string, p2: boolean) => void;
}