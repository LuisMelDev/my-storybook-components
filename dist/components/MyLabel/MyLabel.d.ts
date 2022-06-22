/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
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
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
