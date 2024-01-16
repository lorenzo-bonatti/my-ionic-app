import {IonButton, IonContent, IonPage} from "@ionic/react";
import {useContext} from "react";
import AuthContext from "../context.tsx";

export default function Login() {
    const auth = useContext(AuthContext);
    return (
        <IonPage>
            <IonContent className="ion-padding ion-text-center">
                <h1>Login</h1>
                <IonButton onClick={auth.login}>Access</IonButton>
            </IonContent>
        </IonPage>
    )
}