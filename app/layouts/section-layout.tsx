import { ChildrenProps } from "../types/children-props-types";

const SectionLayout: React.FC<ChildrenProps> = ({ children }) => {

  return (
    <section className="py-24 px-8">
      {children}
    </section>
  );
}

export default SectionLayout;