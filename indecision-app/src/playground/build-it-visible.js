console.log('Visibility App Running');
const appRoot = document.getElementById('app');
const button = document.querySelector('.button');

let hidden = true;

const onHiddenClick = () => {
    hidden = !hidden;
    renderPage();
    return hidden;
};

const renderPage = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onHiddenClick}>{hidden ? 'Show Text' : 'Hide Text'}</button>
            {!hidden && (
                <div>
                    <p>Hey! These are some details you can now see!</p>
                </div>
                )}
        </div>
    );

    ReactDOM.render(template, appRoot)
};

renderPage();

button.addEventListener('click', () => {
    alert('Visibility Toggle App Running');
});