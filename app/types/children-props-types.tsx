export type ChildrenProps = {
  children: React.ReactNode
}

export type BannerProps = {
  text?: string,
  img?: string,
  video?: string,
  animated?: boolean
}

export type TitleProps = {
  title: string,
  subtitle?: string
}

type ServiceCardType = {
  title: string;
  price: string;
  services: string[];
};

export type ServiceProps = {
  id_tag: string,
  img: string, 
  title: string, 
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
