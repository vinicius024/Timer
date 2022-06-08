import React, {useState, useEffect} from "react";
import {Tittle, Wrapper, Count, Buttons, StartButton, StopButton, ZeroButton} from "./styled";

function CountdownTimer() {

    // armazenando os valores!
    const [count , setCount] = useState(0);
    const [state, setState] = useState(false);

    // RODANDO A CONTAGEM!
    useEffect( () => {
        setTimeout(() => {

             if (state === true ) {

                setCount(count + 1);
                return;

            }else {
                clearTimeout();
                return;
            }
        }, 70)
    })
    
    //FUNÇÃO PARA INICIAR A CONTAGEM DO CRONOMETRO
    function handleStartClick(event) {

        event.preventDefault();

        setState(true);

    }


    //FUNÇÃO PARA PARAR O CRONOMETRO
    function handleStopClick(event) {

        event.preventDefault();

        
        setState(false);

    }

    function handleZeroClick(event) {

        event.preventDefault();

        
        setCount(0);
    }

    //COMPONENTES DA INTERFACE
    return (
        <Wrapper>
            <Tittle>Hello Timer</Tittle>

            <Count>{count}</Count>

            <Buttons>
                <StartButton onClick={handleStartClick}>start</StartButton>
                <StopButton onClick={handleStopClick} >stop</StopButton>
                <ZeroButton onClick={handleZeroClick} >zero</ZeroButton>
            </Buttons>
        </Wrapper>
    );
}

export default CountdownTimer;