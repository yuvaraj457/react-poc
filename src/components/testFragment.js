import React, {Component} from 'react';

class EmployeDetails extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <table>
                <thead>
                    <th>Name</th>
                    <th>Dob</th>
                    <th>Team</th>
                </thead>
                <tbody>
                    <tr>
                        <Details/>
                    </tr>
                </tbody>
            </table>
        )
    }
}

class Details extends Component {
    render(){
        return(
            <>
            <td>Yuvaraj D</td>
            <td>04-05-1999</td>
            <td>LAMP</td>
            </>
        )
    }
}

export default EmployeDetails;