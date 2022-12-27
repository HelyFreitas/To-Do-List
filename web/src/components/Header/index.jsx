import {AccountMenu} from "../AccountMenu";
import * as C from "./styles";

export const Header = () => {
    return(
        <C.Container>
            <h1>To-Do List</h1>
            <AccountMenu />
        </C.Container>
    )
}