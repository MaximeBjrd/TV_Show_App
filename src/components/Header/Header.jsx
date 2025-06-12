import { LogoWatowatch } from "./LogoWatowatch"
import { SearchInput } from "./SearchInput"
import { Button } from "./Button"

export function Header() {
    return <>
        <LogoWatowatch/>
        <SearchInput/>
        <Button /*icon={}*/ text={"Sign in"}/>
        <Button /*icon={}*/ text={"Register"}/>
    </>
}