const states = [
    {state: "SP", value: 67836.43},
    {state: "RJ", value: 36678.66},
    {state: "MG", value: 29229.88},
    {state: "ES", value: 27165.48},
    {state: "Outros", value: 19849.53},
]

function calcPercentual() {
    const totalValue = states.reduce((sum, state) => sum + state.value, 0);
    
    states.forEach((state) => {
        const percentage = (state.value / totalValue) * 100;
        console.log(`${state.state}: ${percentage.toFixed(2)}%`);
    });
}

calcPercentual()
