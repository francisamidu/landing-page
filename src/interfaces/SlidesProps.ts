type SlidesProps = {
  heading: string;
  preHeading: string;
  content: string;
  image: string;
  buttonText: string;
  order: 'normal' | 'reversed';
  onClick?: (args: any) => void;
};
export type { SlidesProps };
