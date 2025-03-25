export type ChildrenProps = {
  children: React.ReactNode
}

export type BannerProps = {
  text?: String,
  img?: String,
  video?: string,
  animated?: boolean
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
  id_tag: string,
  img: string, 
  title: String, 
  service_card?: ServiceCardType[],
  selected_service: boolean,
}

export type ServiceDataTypes = {
  id: number;
  id_tag: string;
  img: string
  title?: string;
  services_card?: ServiceCardType[];
}
