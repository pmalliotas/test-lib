import * as React from "react"
import classes from "./DatePickerInput.module.css"


import { DatePickerInput as MantineDatePickerInput } from "@mantine/dates"
import { type DatePickerInputProps as MantineDatePickerInputProps, type DatePickerType } from "@mantine/dates"
import { IconArrowLeft, IconArrowRight, IconCalendarDue } from "@tabler/icons-react"

export type DatePickerInputProps<T extends DatePickerType = "default"> = MantineDatePickerInputProps<T> & {

}

export function DatePickerInput(props: DatePickerInputProps) {

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <MantineDatePickerInput
            placeholder="Select Date"
            rightSection={<IconCalendarDue />}
            nextIcon={<IconArrowRight />}
            previousIcon={<IconArrowLeft />}
            classNames={{
                calendarHeader: classes.calendarHeader,
                calendarHeaderControl: classes.calendarHeaderControl,
                weekday: classes.weekday,
                day: classes.day,
                section: props.disabled ? classes.sectionDisabled : classes.sectionEnabled,
                calendarHeaderLevel: classes.calendarHeaderLevel,
                input: classes.input
            }}
            {...props}
        />
    )
}

DatePickerInput.extend = MantineDatePickerInput.extend