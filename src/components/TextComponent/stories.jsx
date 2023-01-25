import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nobis sed vitae nihil cumque aperiam consequuntur iste,
      nostrum tenetur ullam animi hic saepe possimus suscipit a,
      distinctio perferendis, non magnam quia.
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
