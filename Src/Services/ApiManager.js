import endpoints from './Endpoints'

let subordinates = []

const getEmployeeSubordinates = async (employeeName, reset) => {
    if(reset) subordinates = []

    await fetch(endpoints.DOMAIN+endpoints.EMPLOYEE_DETAILS+employeeName)
    .then((res) => res.json())
    .then((response) => {
        reset = false
        if(response.length > 1  && response[1]['direct-subordinates']){
            response[1]['direct-subordinates'].forEach(name => {
                if(!subordinates.includes(name)) {
                    getEmployeeSubordinates(name, false);
                    subordinates.push(name)
                }
            });
        }        
    })

    return subordinates;
}

export {
    getEmployeeSubordinates
}