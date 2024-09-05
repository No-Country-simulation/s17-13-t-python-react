interface Props {
  text: string;
  type?: 'button' | 'reset' | 'submit';
  customClass?: string;
}

export default function ButtonBase({ text, customClass, type = 'button' }: Props) {
  return (
    <button
      className={`h-9 w-full max-w-40 rounded-3xl bg-auxiliary text-lg font-medium text-secondary shadow-[0px_4px_4px_0px_#00000040] ${customClass || ''}`}
      type={type}
      title={text}
    >
      {text}
    </button>
  );
}
