import { Loader as MantineLoader } from "@mantine/core"
import { type LoaderProps as MantineLoaderProps } from "@mantine/core"

export type LoaderProps = MantineLoaderProps & {}

export function Loader(props: LoaderProps) {

    return (
        <MantineLoader {...props} />
    )
}

export default Loader