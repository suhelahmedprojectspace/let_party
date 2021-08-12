import "firebase/auth";
import fire from "./firebase";
export let register = async ({ email, password }) => {
    const resp = await fire.auth()
        .createUserWithEmailAndPassword(email, password);
    return resp.user;
}
export let login = async ({ email, password }) => {
    const res = await fire.auth().signInWithEmailAndPassword(email, password);
    return res.user;

}
