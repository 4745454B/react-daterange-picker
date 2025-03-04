import * as React from "react";
import { DateRange, DefinedRange } from "./types";
type Marker = symbol;
export declare const MARKERS: {
    [key: string]: Marker;
};
interface DateRangePickerProps {
    open: boolean;
    initialDateRange?: DateRange;
    definedRanges?: DefinedRange[];
    minDate?: Date | string;
    maxDate?: Date | string;
    onChange: (dateRange: DateRange) => void;
}
export { DateRange, DefinedRange } from "./types";
export declare const DateRangePicker: React.FunctionComponent<DateRangePickerProps>;
