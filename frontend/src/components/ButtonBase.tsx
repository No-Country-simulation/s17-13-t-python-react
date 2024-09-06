import { CSSProperties } from "react";

interface Props {
  text: string;
  alt: string;
  type: 'button' | 'reset' | 'submit';
  customClass: string;
  style: CSSProperties;
  icon: JSX.Element;
  hoverStyles: boolean;
  handleCLick: () => void;
}

interface BtnTemplate {
  children: JSX.Element | JSX.Element[];
  btnTemplateClass: string;
}

export default function ButtonBase({
  text,
  customClass,
  icon,
  alt,
  hoverStyles,
  handleCLick,
  style,
  type = 'button',
}: Partial<Props>) {
  const buttonStyles = `grid place-content-center max-w-40 rounded-3xl bg-auxiliary text-lg font-medium text-secondary shadow-[0px_4px_4px_0px_#00000040] text-inherit ${customClass || ''} ${hoverStyles && 'interactive-btn'}`;
  const BtnTemplate = ({ children, btnTemplateClass }: Partial<BtnTemplate>) => (
    <button
      className={`${buttonStyles} ${btnTemplateClass || ''}`}
      style={style}
      onClick={handleCLick}
      type={type}
      title={alt}
    >
      {children}
    </button>
  );

  if (icon && text) {
    return (
      <BtnTemplate btnTemplateClass="size-10 sm:w-full rounded-[50%] sm:rounded-3xl sm:h-9">
        <span className="hidden sm:block">{text}</span>
        <span className="block sm:hidden">{icon}</span>
      </BtnTemplate>
    );
  }

  if (icon) {
    return <BtnTemplate btnTemplateClass="size-10 rounded-[50%]">{icon}</BtnTemplate>;
  }

  return (
    <BtnTemplate btnTemplateClass="w-full h-9">
      <span>{text || 'Click'}</span>
    </BtnTemplate>
  );
}
