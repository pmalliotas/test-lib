import { Stepper as MantineStepper } from "@mantine/core"
import { type StepperProps as MantineStepperProps } from "@mantine/core"

export type StepperProps = MantineStepperProps & {}

export function Stepper(props: StepperProps) {

    return (
        <MantineStepper {...props} />
    )
}
