import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

export default function About() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot={"start"}>
                        <IonBackButton/>
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>About me</h1>
                <p>My name is John Doe</p>
                <p>I am a software developer</p>
            </IonContent>
        </IonPage>
    )
}