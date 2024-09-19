interface Props {
  error: string;
  color?: string;
  customClass?: string;
}
export default function ErrorMessage({ error, color, customClass }: Props) {
  return (
    <p className={`text-xs font-semibold text-white ${customClass || ''}`} style={{ color }}>
      {error}
    </p>
  );
}
