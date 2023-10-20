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
import { Input as MantineInput, createPolymorphicComponent } from "@mantine/core";
import { forwardRef } from "react";
export var Input = createPolymorphicComponent(forwardRef(function (props, ref) {
    return (_jsx(MantineInput, __assign({}, props, { ref: ref })));
}));
