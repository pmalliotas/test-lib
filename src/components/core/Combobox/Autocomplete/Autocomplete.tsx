import { Autocomplete as MantineAutocomplete } from "@mantine/core"
import { type AutocompleteProps as MantineAutocompleteProps } from "@mantine/core"

export function Autocomplete(props: MantineAutocompleteProps) {

    return (
        <MantineAutocomplete {...props} />
    )
}

export type AutocompleteProps = MantineAutocompleteProps