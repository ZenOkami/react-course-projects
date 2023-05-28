const dummyData = async () => {
    const response = await fetch(`https://randomuser.me/api/?results=10`);

    if (response.status === 200) {
        const data = await response.json();
        console.log(data.results)
        const arrayOfDummyPeople = data.results;
        console.log(arrayOfDummyPeople)
        const template3 = (
            <div>
                <p>{arrayofDummyPeople.length > 0 ? 'List of People:' : 'No One to Report'}</p>
                <ol>
                    {arrayOfDummyPeople.length >= 1 && <li>{`${arrayOfDummyPeople[0].name.title}. ${arrayOfDummyPeople[0].name.first} is a ${arrayOfDummyPeople[0].gender} that lives in ${arrayOfDummyPeople[0].location.city}, ${arrayOfDummyPeople[0].location.country}.`}</li>}
                    {arrayOfDummyPeople.length >= 2 && <li>{`${arrayOfDummyPeople[1].name.title}. ${arrayOfDummyPeople[1].name.first} is a ${arrayOfDummyPeople[1].gender} that lives in ${arrayOfDummyPeople[1].location.city}, ${arrayOfDummyPeople[1].location.country}.`}</li>}
                    {arrayOfDummyPeople.length >= 3 && <li>{`${arrayOfDummyPeople[2].name.title}. ${arrayOfDummyPeople[2].name.first} is a ${arrayOfDummyPeople[2].gender} that lives in ${arrayOfDummyPeople[2].location.city}, ${arrayOfDummyPeople[2].location.country}.`}</li>}
                    {arrayOfDummyPeople.length >= 4 && <li>{`${arrayOfDummyPeople[3].name.title}. ${arrayOfDummyPeople[3].name.first} is a ${arrayOfDummyPeople[3].gender} that lives in ${arrayOfDummyPeople[3].location.city}, ${arrayOfDummyPeople[3].location.country}.`}</li>}
                    {arrayOfDummyPeople.length >= 5 && <li>{`${arrayOfDummyPeople[4].name.title}. ${arrayOfDummyPeople[4].name.first} is a ${arrayOfDummyPeople[4].gender} that lives in ${arrayOfDummyPeople[4].location.city}, ${arrayOfDummyPeople[4].location.country}.`}</li>}
                    {arrayOfDummyPeople.length >= 6 && <li>{`${arrayOfDummyPeople[5].name.title}. ${arrayOfDummyPeople[5].name.first} is a ${arrayOfDummyPeople[5].gender} that lives in ${arrayOfDummyPeople[5].location.city}, ${arrayOfDummyPeople[5].location.country}.`}</li>}
                    {arrayOfDummyPeople.length >= 7 && <li>{`${arrayOfDummyPeople[6].name.title}. ${arrayOfDummyPeople[6].name.first} is a ${arrayOfDummyPeople[6].gender} that lives in ${arrayOfDummyPeople[6].location.city}, ${arrayOfDummyPeople[6].location.country}.`}</li>}
                    {arrayOfDummyPeople.length >= 8 && <li>{`${arrayOfDummyPeople[7].name.title}. ${arrayOfDummyPeople[7].name.first} is a ${arrayOfDummyPeople[7].gender} that lives in ${arrayOfDummyPeople[7].location.city}, ${arrayOfDummyPeople[7].location.country}.`}</li>}
                    {arrayOfDummyPeople.length >= 9 && <li>{`${arrayOfDummyPeople[8].name.title}. ${arrayOfDummyPeople[8].name.first} is a ${arrayOfDummyPeople[8].gender} that lives in ${arrayOfDummyPeople[8].location.city}, ${arrayOfDummyPeople[8].location.country}.`}</li>}
                    {arrayOfDummyPeople.length >= 10 && <li>{`${arrayOfDummyPeople[9].name.title}. ${arrayOfDummyPeople[9].name.first} is a ${arrayOfDummyPeople[9].gender} that lives in ${arrayOfDummyPeople[9].location.city}, ${arrayOfDummyPeople[9].location.country}.`}</li>}
        
                </ol>
            </div>
        )
        
        ReactDOM.render(template3, appRoot)
    } else {
        throw new Error('Unable to fetch results')
    }
}

dummyData()