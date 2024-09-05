interface Props {
  text: string;
  customClass?: string;
  type?: 'base' | 'relaxed';
}

export default function Paragraph({ text, customClass, type = 'base' }: Props) {
  const leading = {
    base: 'leading-normal',
    relaxed: 'leading-relaxed',
  } as const;

  return (
    <p className={`text-xl font-normal ${leading[type]} ${customClass || ''}`}>
      {text || 'Sin información'}
    </p>
  );
}
