// JSX - JavaScript XML
console.log('App.js is running!');

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!'
        const options = ['Thing One', 'Things Two', 'Things Four']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>)
    }
};

class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options)
    }
    render() {
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
                <ol>
                    {this.props.options.map((option, key) => <Option key={key} optionText={option} /> )}
                </ol>
            </div>
            )
        }
    }   
    
class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.optionText}</li>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
    
        if (option) {
            e.target.elements.option.value = '';
            console.log('option added', option)
            alert(option)
        }
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" placeholder="Add Option Here"></input>
                <button>Add Option</button>
            </form>
        </div>)
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));