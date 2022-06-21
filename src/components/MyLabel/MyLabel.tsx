import "./mylabel.css";

interface MyLabelProps {
    /**
     * this is the message to display in the tag
     */
    label: string;
    /**
     * this is size of the tag
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * this is the color of the tag
     **/
    color: "primary" | "secondary" | "tertiary";
    /**
     * this is to capitalize the label
     **/
    allCaps: boolean;
    /**
     * custom font color
     */
    fontColor?: string;

    /**
     * custom background color
     */
    backgroundColor?: string;
}

export const MyLabel = ({
    label = "No Label",
    size = "normal",
    color = "primary",
    allCaps = false,
    fontColor,
    backgroundColor = "transparent",
}: MyLabelProps) => {
    return (
        <span
            style={{
                color: fontColor,
                backgroundColor,
            }}
            className={`label ${size} text-${color} ${allCaps && "capitalize"}`}
        >
            {label}
        </span>
    );
};
