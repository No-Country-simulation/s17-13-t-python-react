interface Props {
  error: string;
  color?: string;
  customClass?: string;
}
export default function ErrorMessage({ error, color, customClass }: Props) {
  return (
    <p
      className={`text-xs text-white font-semibold ${customClass || ''}`}
      style={{ color }}
    >
      {error}
    </p>
  );
}
