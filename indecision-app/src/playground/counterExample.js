let count = 0;
const addOne = () => {
    count++;
    console.log(count);
    renderCount();
}
const minusOne = () => {
    count--;
    console.log(count);
    renderCount();
}
const reset = () => {
    count = 0;
    console.log(count);
    renderCount();
}

(<div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button> <button onClick={minusOne}>-1</button> <button onClick={reset}>Reset</button>
</div>)

function renderCount() {
    const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button> <button onClick={minusOne}>-1</button> <button onClick={reset}>Reset</button>
    </div>)
    ReactDOM.render(templateTwo, appRoot);
    i = -1;
}