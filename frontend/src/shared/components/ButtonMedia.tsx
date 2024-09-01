interface Props {
  text?: string;
  iconNode: JSX.Element;
  background: string;
  size: number;
}

export default function ButtonMedia({ text, iconNode, size, background }: Props) {
  return (
    <button
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: background,
      }}
      className="interactive-btn overflow-hidden rounded-[50%] p-2"
      type="button"
      title={`Ingresar con ${text}`}
    >
      {iconNode}
      {text && <span className="read-only:">{`Ingresar con ${text}`}</span>}
    </button>
  );
}
