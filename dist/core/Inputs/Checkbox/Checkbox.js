var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox as MantineCheckbox, CheckboxGroup as MantineCheckboxGroup } from "@mantine/core";
export function Checkbox(props) {
    return (_jsx(MantineCheckbox, __assign({}, props)));
}
export function CheckboxGroup(props) {
    return (_jsx(MantineCheckboxGroup, __assign({}, props)));
}
export default Checkbox;
