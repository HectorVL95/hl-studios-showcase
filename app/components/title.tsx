import { TitleProps } from "../types/children-props-types";

const TitlenSubtitle: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
    <h3 className="mt-8 text-6xl">{title}</h3>
    { 
      subtitle && <p className="text-[32px] align-middle">{subtitle}</p>
    }

    </>
  );
}

export default TitlenSubtitle;