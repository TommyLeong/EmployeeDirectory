import endpoints from './Endpoints'

const subordinates = []

const getEmployeeSubordinates = async (employeeName) => {
    await fetch(endpoints.DOMAIN+endpoints.EMPLOYEE_DETAILS+employeeName)
    .then((res) => res.json())
    .then((response) => {
        console.log(response);
        if(response.length > 1  && response[1]['direct-subordinates']){
            response[1]['direct-subordinates'].forEach(name => {
                if(!subordinates.includes(name)) {
                    getEmployeeSubordinates(name);
                    subordinates.push(name)
                    console.log('continue calling')
                }
            });
        }        
    })

    return subordinates;
}

export {
    getEmployeeSubordinates
}