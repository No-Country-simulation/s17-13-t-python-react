import ButtonBase from '@/components/ButtonBase';
import { FaChalkboardUser } from 'react-icons/fa6';

interface ButtonFakeUserProps {
  handleClick: () => void;
}

export function ButtonFakeUser({ handleClick }: ButtonFakeUserProps) {
  return (
    <ButtonBase
      customClass="absolute top-12 right-12"
      icon={<FaChalkboardUser />}
      alt="Crear usuario"
      handleCLick={handleClick}
      hoverStyles={true}
    />
  );
}
