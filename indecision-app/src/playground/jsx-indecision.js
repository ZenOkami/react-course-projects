
function getLocation(location) {
    if (location) {
      return <p>Location: {location}</p>;
    }
}

const user = {
    name: 'Gianpaolo Stasi',
    age: 29,
    location: 'Boulder'
}
const { name: userName, age, location: userLocation = 'Weston' } = user;

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
}
let { title, subtitle, options } = app;

const appRoot = document.getElementById('app');
const button = document.querySelector('.button')
const loadOptions = () => {
    const optionsJSON = localStorage.getItem('options');

    try {
        return optionsJSON ? JSON.parse(optionsJSON) : [];
    } catch (e) {
        return [];
    };
}
loadOptions();
options = loadOptions()
const saveOptions = () => localStorage.setItem('options', JSON.stringify(options));
const getOptions = () => options;

let i = 0;

const dummyData = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=10`);
    
    if (response.status === 200) {
        const data = await response.json();
        const dummyPeople = data.results;
        return dummyPeople;
    } else {
        throw new Error('Unable to fetch results')
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log(option);

    if (option) {
        options.push(option);
        e.target.elements.option.value = '';
        console.log('option added', options)
        saveOptions()
        renderOption();
    }
};

function removeAll() {
    options = [];
    saveOptions();
    renderOption();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    alert(option);
    console.log(randomNum);
};

function renderOption() {
    const templateOption = (    
        <div>
        <h1>{title}</h1> 
        {app.subtitle && <p>{subtitle}!</p>}
            <p>{options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
            <button disabled={options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>)
    
    ReactDOM.render(templateOption, appRoot);
}

async function renderPage () {
    const dummyPeople = await dummyData();
    const template = [(    
        <div>
        <h1>{title}</h1> 
        {app.subtitle && <p>{subtitle}!</p>}
            <p>{options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
            <button disabled={options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>),
        (<div>
            <h1>{user.name ? `${userName}!` : 'Anonymous'}</h1>
            {age >= 18 && <p>Age: {age}</p>}
            {getLocation(userLocation)}
        </div>),
        (<div>
            <p>{dummyPeople.length > 0 ? 'List of People:' : 'No One to Report'}</p>
            <ol>
            {
                dummyPeople.map((person) => <li key={person.name.last}>{`${properTitle(person.name.title)} ${person.name.first} is a ${person.gender} that lives in ${person.location.city}, ${person.location.country}.`}</li>)
            }
            </ol>
        </div>)
                ];
    ReactDOM.render(template[i], appRoot);
                
    button.addEventListener('click', () => {
        i++;
        if (i === template.length) {
            i = 0;
        }
        ReactDOM.render(template[i], appRoot);
    })
}

renderPage();

function properTitle(string) {
    if (string === 'Mr' || string === 'Mrs' || string === 'Ms') {
        return `${string}.`
    } else {
        return string
    }
}