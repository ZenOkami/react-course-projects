class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }))
                console.log('Fetching count... ' + count);
            }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
            console.log('Count Saved!');
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        console.log(this.state.count);
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
        console.log(this.state.count);
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        console.log(this.state.count);
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0;
// const addOne = () => {
//     count++;
//     console.log(count);
//     renderCount();
// }
// const minusOne = () => {
//     count--;
//     console.log(count);
//     renderCount();
// }
// const reset = () => {
//     count = 0;
//     console.log(count);
//     renderCount();
// }

// (<div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button> <button onClick={minusOne}>-1</button> <button onClick={reset}>Reset</button>
// </div>)

// function renderCount() {
//     const templateTwo = (
//     <div>
//     <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button> <button onClick={minusOne}>-1</button> <button onClick={reset}>Reset</button>
//     </div>)
//     ReactDOM.render(templateTwo, appRoot);
//     i = -1;
// }