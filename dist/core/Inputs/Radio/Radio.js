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
import { Radio as MantineRadio, RadioGroup as MantineRadioGroup } from "@mantine/core";
export function Radio(props) {
    return (_jsx(MantineRadio, __assign({}, props)));
}
export function RadioGroup(props) {
    return (_jsx(MantineRadioGroup, __assign({}, props)));
}
