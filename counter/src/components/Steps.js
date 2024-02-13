export function Steps ({steps, setSteps}) {

    function stepsHandler(){
        if(steps < 1) setSteps(1);
        return steps;
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
        }}>
            <button onClick={() => setSteps(steps - 1)}>-</button>
            <p>Step : {stepsHandler()}</p>
            <button onClick={() => setSteps(steps + 1)}>+</button>
        </div>
    )
}