
import { FaCircleCheck } from "react-icons/fa6";

const ServiceCard = () => {
  return (
    <article className="flex flex-col gap-4 bg-[#282828] border p-[30px] w-[360px] border-none gap-4 rounded-[20px]">
      <p className="text-2xl font-bold textn-center">Silver Wedding Collection</p>
      <h3 className="text-5xl font-bold text-center">
        CA $799
      </h3>
      <ul>
        <li className="flex items-center gap-4">
          <FaCircleCheck />
          <p className="text-[20px] font-bold">4 hours coverage</p>
        </li>
        <li className="flex items-center gap-4">
          <FaCircleCheck />
          <p className="text-[20px] font-bold">4 hours coverage</p>
        </li>
        <li className="flex items-center gap-4">
          <FaCircleCheck />
          <p className="text-[20px] font-bold">4 hours coverage</p>
        </li>
        <li className="flex items-center gap-4">
          <FaCircleCheck />
          <p className="text-[20px] font-bold">4 hours coverage</p>
        </li>
        <li className="flex items-center gap-4">
          <FaCircleCheck />
          <p className="text-[20px] font-bold">4 hours coverage</p>
        </li>
        <li className="flex items-center gap-4">
          <FaCircleCheck />
          <p className="text-[20px] font-bold">4 hours coverage</p>
        </li>
        <li className="flex items-center gap-4">
          <FaCircleCheck />
          <p className="text-[20px] font-bold">4 hours coverage</p>
        </li>
        <li className="flex items-center gap-4">
          <FaCircleCheck />
          <p className="text-[20px] font-bold">4 hours coverage</p>
        </li>
        
      </ul>
    </article>
  );
}

export default ServiceCard;