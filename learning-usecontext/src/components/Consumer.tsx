import { useContext } from "react";
import { UserContext } from "./Provider";

export default function Consumer() {
    const user = useContext(UserContext);
    console.log(user?.userName);
    console.log("password is: ", user?.password);

    return (
        <div>
            the provider is consumed here
        </div>
    )
}