
import { FaCircleCheck } from "react-icons/fa6";


const ServiceCard = () => {
  return (
    <article className="flex flex-col gap-4 bg-[#282828] border p-[30px] w-[360px] border-none gap-4 rounded-[20px]">
      <p className="text-2xl font-bold textn-center">XV</p>
      <h3 className="text-5xl font-bold text-center">
        $70
      </h3>
      <ul>
        <li className="flex items-center gap-4">
          <FaCircleCheck />
          <p className="text-[20px] font-bold">4 photos</p>
        </li>
      </ul>
    </article>
  );
}

export default ServiceCard;