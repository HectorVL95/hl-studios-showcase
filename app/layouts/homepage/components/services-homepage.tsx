import { useRouter } from "next/navigation";
import Button from "@/app/components/button";
import SectionLayout from "../../section-layout";
import TitlenSubtitle from "@/app/components/title";

const ServicesHomepage = () => {
  const router = useRouter();

  return (
    <SectionLayout>
      <div className="flex flex-col gap-12">
        <TitlenSubtitle title={'Services'}/>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <Button onClick={() => router.push('/services?service=Weddings#wed')} pill>
              <p className="font-bold lg:text-3xl">
                Weddings
              </p>
            </Button>
            <Button onClick={() => router.push('/services?service=XVs Celebrations#xv')} pill>
              <p className="font-bold lg:text-3xl">
                XVs Celebration
              </p>
            </Button>
            <Button onClick={() => router.push('/services?service=Birthday Celebrations#bd')} pill>
              <p className="font-bold lg:text-3xl">
                Birthday Celebration
              </p>
            </Button>
            <Button onClick={() => router.push('/services?service=Maternity#mat')} pill>
              <p className="font-bold lg:text-3xl">
                Maternity
              </p>
            </Button>
            <Button onClick={() => router.push('/services?service=Commercial Shoots#comm')} pill>
              <p className="font-bold lg:text-3xl">
                Commercial Shoots
              </p>
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div>
              <Button onClick={() => router.push('/services')}>
                View More
              </Button>
            </div>
          </div>
      </div>
      </div>
    </SectionLayout>
  );
}

export default ServicesHomepage;