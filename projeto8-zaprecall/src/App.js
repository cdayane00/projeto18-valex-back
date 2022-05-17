import Tela1 from "./Tela1";
import Main from "./Main";
import React from 'react';

export default function App() {
    const [init, setInit] = React.useState(false);
    return (
        <>
            { !init ? <Tela1 setInit={setInit}/> : <Main />}
        </>  
    );
}