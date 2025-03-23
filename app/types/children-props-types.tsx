export type ChildrenProps = {
  children: React.ReactNode
}

export type BannerProps = {
  text?: String,
  img?: String,
  video?: string,
}

export type TitleProps = {
  title: String,
  subtitle?: String
}

type ServiceCardType = {
  title: string;
  price: string;
  services: string[];
};

export type ServiceProps = {
  img: string, 
  title: String, 
  service_card?: ServiceCardType[]
}

export type ServiceDataTypes = {
  id: number ;
  img: string
  title?: string;
  services_card?: ServiceCardType[];
}
