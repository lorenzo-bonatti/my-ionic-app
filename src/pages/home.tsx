import {IonButton, IonContent, IonPage} from "@ionic/react";
import AuthContext from "../context.tsx";
import {useContext} from "react";

export default function Home() {
    const auth = useContext(AuthContext);
    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding ion-text-center">
                <h1>Hello World!</h1>
                <p>This is my new Ionic App</p>
                <IonButton routerLink="/about">About</IonButton>
                <IonButton onClick={auth.logout}>Logout</IonButton>
            </IonContent>
        </IonPage>
    )
}