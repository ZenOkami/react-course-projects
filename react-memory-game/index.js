class GeneNumber extends React.Component {
    componentDidUpdate(prevProps) {
        let time, digit;

        digit = this.props.level.main + 2;
        time = 100 * Math.min(digit, 5) + 400 * Math.max(digit - 5, 0);

        let number = document.getElementById('number');
        setTimeout(function () {
            number.innerHTML = number.innerHTML.replace(/\w/gi, '&#183')
        }, time)
    }
    componentDidMount() {
        let number = document.getElementById('number');
        setTimeout(function () {
            number.innerHTML = number.innerHTML.replace(/\w|\W/gi, '&#183')
        }, 1200)
    }

    render() {
        return (React.createElement('div', {className: "number-box"},
            React.createElement('div', {className: 'info-box'},
                React.createElement('p', {className: 'level'}, 'Level: ', this.props.level.main, " - ", this.props.level.sub ), 
                    React.createElement('p', {className: 'mistakes'})
            ))
    )}
};