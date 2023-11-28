import * as React from "react"

import { Stepper as MantineStepper } from "@mantine/core"
import { type StepperProps as MantineStepperProps } from "@mantine/core"

export type StepperProps = MantineStepperProps & {}

export function Stepper(props: StepperProps) {

    return (
        <MantineStepper {...props} />
    )
}

Stepper.Step = MantineStepper.Step
Stepper.Completed = MantineStepper.Completed

Stepper.extend = MantineStepper.extend