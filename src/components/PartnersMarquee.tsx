import { Partner } from "@/types/partner";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface PartnersMarqueeProps {
  partners: Partner[];
}

const PartnersMarquee: React.FC<PartnersMarqueeProps> = ({ partners }) => {
  return (
    <div>
      <Marquee gradient className="h-12">
        {partners.map((partner) => {
          return (
            // <Image
            //   src={partner.image}
            //   alt={partner.name}
            //   title={partner.name}
            //   width={128}
            //   height={64}
            //   className="grayscale text-lg text-gray-500"
            // />
            <img
              src={partner.image}
              alt={partner.name}
              className="mx-10 grayscale text-lg text-gray-500 h-12"
            />
          );
        })}
      </Marquee>
    </div>
  );
};

export default PartnersMarquee;
