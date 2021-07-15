import {Link,useRouteMatch,useParams} from 'react-router-dom';
export const Home = (props)=> {
    console.log(props);
    return(
        <div>
            <h1>Hello {props.user}, Welcome</h1>
        </div>
    )
}

export const About = (props)=> {
    return(
        <div>
            <h2>Name : {props.about.UserName}</h2>
            <h2>Age : {props.about.Age}</h2>
            <h2>Designation : {props.about.Designation}</h2>
            <h2>Team : {props.about.Team}</h2>
        </div>
    )
}

export const Contact = (props)=> {
    return(
        <div>
            <h2>Email : {props.contact.Email}</h2>
            <h2>Mobile : {props.contact.Mobile}</h2>
        </div>
    )
}

export const Courses = (props)=> {
    let {url} = useRouteMatch();
    return(
        <div>
            <ul>
                {props.courses.map((item,index) => 
                    <li key={index}>
                        <Link to={`${url}/${item}`}>{item}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export const Topic = () => {
    let {topicId} = useParams();
    return(
        <div>
            <h3>You Selected {topicId}</h3>
        </div>
    )
}

