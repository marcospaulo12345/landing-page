import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam fuga tenetur saepe, nisi in sequi
          sapiente voluptas cupiditate quo est, alias similique commodi nulla ipsa libero facere iusto illo ratione!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
