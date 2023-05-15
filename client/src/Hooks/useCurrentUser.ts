import { currentUserState } from "@/atoms/atoms"
import { useRecoilState } from "recoil"

export const useCurrentUser = () =>{
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
    return { currentUser, setCurrentUser};
}