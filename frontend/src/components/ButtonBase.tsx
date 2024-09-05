interface Props {
  text: string;
  alt: string;
  type?: 'button' | 'reset' | 'submit';
  customClass?: string;
  icon?: JSX.Element;
}

interface BtnTemplate {
  children?: JSX.Element | JSX.Element[];
  btnTemplateClass?: string;
}

export default function ButtonBase({ text, customClass, icon, alt, type = 'button' }: Props) {
  const styles = `grid place-content-center max-w-40 rounded-3xl bg-auxiliary text-lg font-medium text-secondary shadow-[0px_4px_4px_0px_#00000040] ${customClass || ''}`;
  const BtnTemplate = ({ children, btnTemplateClass }: BtnTemplate) => (
    <button className={`${styles}${btnTemplateClass || ''}`} type={type} title={alt}>
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
