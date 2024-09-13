interface Props {
  error: string;
  color?: string;
}
export default function ErrorMessage({ error, color }: Props) {
  return (
    <p
      className="absolute translate-y-1 pl-5 text-xs font-bold tracking-wide text-secondary"
      style={{ color }}
    >
      {error}
    </p>
  );
}
