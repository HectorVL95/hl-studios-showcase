export type BtnProps = {
  onClick?: () => void,
  children: React.ReactNode,
  pill?: boolean,
  type_btn?: 'button' | 'submit' | 'reset'
}