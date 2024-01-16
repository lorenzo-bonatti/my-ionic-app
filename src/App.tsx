import {IonApp, setupIonicReact, IonRouterOutlet} from '@ionic/react';
import {IonReactRouter} from "@ionic/react-router";
import {Redirect, Route} from "react-router-dom";
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import {useContext} from "react";
import AuthContext from "./context.tsx";
import Login from "./pages/login.tsx";

setupIonicReact();

export default function App() {
    const auth = useContext(AuthContext);
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/login" exact render={() => !auth.isAuth ? <Login/> : <Redirect to="/"/>}/>
                    <Route path="/" exact render={() => auth.isAuth ? <Home/> : <Redirect to="/login"/>}/>
                    <Route path="/about" exact render={() => auth.isAuth ? <About/> : <Redirect to="/login"/>}/>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    )
}