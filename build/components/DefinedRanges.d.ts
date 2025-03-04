import React from "react";
import { DefinedRange, DateRange } from "../types";
type DefinedRangesProps = {
    setRange: (range: DateRange) => void;
    selectedRange: DateRange;
    ranges: DefinedRange[];
};
declare const DefinedRanges: React.FunctionComponent<DefinedRangesProps>;
export default DefinedRanges;
