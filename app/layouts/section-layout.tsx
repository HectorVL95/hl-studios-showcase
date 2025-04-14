import { useResponsive } from "../hooks/useResponsive";
import { ChildrenProps } from "../types/children-props-types";

const SectionLayout: React.FC<ChildrenProps> = ({ children }) => {
  const { is_mobile } = useResponsive();

  return (
    <section className={`py-24 ${is_mobile ? 'px-4' : 'px-8'}`}>
      {children}
    </section>
  );
}

export default SectionLayout;