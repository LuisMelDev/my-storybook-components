import { Meta, ComponentStory } from "@storybook/react";
import { MyLabel } from "./MyLabel";

export default {
    title: "UI/mylabel",
    component: MyLabel,
    argTypes: {
        size: {
            control: "select",
        },
        color: {
            control: "select",
        },
        fontColor: {
            control: "color",
        },
        backgroundColor: {
            control: "color",
        },
    },
} as Meta<typeof MyLabel>;

const template: ComponentStory<typeof MyLabel> = (args) => (
    <MyLabel {...args} />
);

export const Basic = template.bind({});

Basic.args = {
    label: "Hello World",
    size: "normal",
    allCaps: false,
};

export const AllCaps = template.bind({});

AllCaps.args = {
    label: "Capitalized",
    size: "normal",
    allCaps: true,
};

export const Secondary = template.bind({});

Secondary.args = {
    label: "Secondary",
    color: "secondary",
};

export const Tertiary = template.bind({});

Tertiary.args = {
    label: "Tertiary",
    color: "tertiary",
};

export const CustomColor = template.bind({});

Tertiary.args = {
    label: "Custom color",
};
