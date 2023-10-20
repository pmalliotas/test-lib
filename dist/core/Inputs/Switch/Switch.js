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
import { Switch as MantineSwitch, SwitchGroup as MantineSwitchGroup } from "@mantine/core";
export function Switch(props) {
    return (_jsx(MantineSwitch, __assign({}, props)));
}
export function SwitchGroup(props) {
    return (_jsx(MantineSwitchGroup, __assign({}, props)));
}
