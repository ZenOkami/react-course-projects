// JSX - JavaScript XML
// stateless functional component 

console.log('App.js is running!');

class IndecisionApp extends React.Component {
    constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
        options: []
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
            console.log('Fetching data...');
        } catch (e) {

        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Component is saved!');
        }
    }
    componentWillUnmount() {
        console.log('Component is unmounted!');
    }
    handleDeleteOptions() {
        this.setState(() => ({  options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option ) }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
        console.log(randomNum);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!'

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>)
    }
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision',
    
}

// class Header extends React.Component {
//     render() {
//         console.log(this.props)
//     }
//}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What should I do?
            </button>
        </div>
    )
}

// class Action extends React.Component {
//     render() {
//     }
// }

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please Add an Option to get started!</p>}    
        <ol>
                {props.options.map((option, key) => (
                    <Option 
                        key={key} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption} 
                    />) )}
            </ol>
        </div>
        )
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <ol>
//                     {this.props.options.map((option, key) => <Option key={key} optionText={option} /> )}
//                 </ol>
//             </div>
//             )
//         }
//     }   

const Option = (props) => {
    return (
        <div>
            <li>{props.optionText} 
                <button onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}>
                    remove
                </button>
            </li>
        </div>
    )
}
    
// class Option extends React.Component {
//     render() {
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = ({ error: undefined })
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }))
        
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" placeholder="Add Option Here"></input>
                <button>Add Option</button>
            </form>
        </div>)
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));