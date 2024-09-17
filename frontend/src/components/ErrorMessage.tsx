interface Props {
  error: string;
  color?: string;
  customClass?: string;
}
export default function ErrorMessage({ error, color, customClass }: Props) {
  return (
    <p
      className={`text-center text-xl font-semibold text-red-500 ${customClass || ''}`}
      style={{ color }}
    >
      {error}
    </p>
  );
}
