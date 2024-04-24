import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TechTags from "../TechList/TechTags";
import Bounded from "@/components/Bounded";

/**
 * Props for `AllTechsYouKnow`.
 */
export type AllTechsYouKnowProps =
  SliceComponentProps<Content.AllTechsYouKnowSlice>;

/**
 * Component for "AllTechsYouKnow" Slices.
 */
const AllTechsYouKnow = ({ slice }: AllTechsYouKnowProps): JSX.Element => {
  return (
    <Bounded>
      <div className="flex gap-5 flex-wrap">
        {slice.items.map(({ techs_you_know }, index) => (
          <TechTags
            key={index}
            label={techs_you_know}
          />
        ))}
      </div>
    </Bounded>
  );
};

export default AllTechsYouKnow;
