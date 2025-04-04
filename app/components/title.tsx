import { TitleProps } from "../types/children-props-types";

const TitlenSubtitle: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
    <h3 className="mt-4 text-4xl lg:mt-8 lg:text-6xl lg:text-left">{title}</h3>
    { 
      subtitle && <p className="text-[24px]  lg:text-[32px] lg:align-middle">{subtitle}</p>
    }

    </>
  );
}

export default TitlenSubtitle;