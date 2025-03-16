import SectionLayout from "../../section-layout";
import Button from "@/app/components/button";

const ServicesHomepage = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-12">
        <h3 className="text-6xl font-bold">Services</h3>
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <Button pill>
              <p className="font-bold lg:text-3xl">
                Weddings
              </p>
            </Button>
            <Button pill>
              <p className="font-bold lg:text-3xl">
                XVs Celebration
              </p>
            </Button>
            <Button pill>
              <p className="font-bold lg:text-3xl">
                Birthday Celebration
              </p>
            </Button>
            <Button pill>
              <p className="font-bold lg:text-3xl">
                Maternity
              </p>
            </Button>
            <Button pill>
              <p className="font-bold lg:text-3xl">
                Commercial Shoots
              </p>
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div>
              <Button>
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