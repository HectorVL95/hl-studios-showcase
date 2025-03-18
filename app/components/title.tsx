import { TitleProps } from "../types/children-props-types";

const TitlenSubtitle: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
    <h3 className="text-6xl font-bold">{title}</h3>
    { 
      subtitle && <p className="text-[32px] align-middle font-semibold">{subtitle}</p>
    }

    </>
  );
}

export default TitlenSubtitle;