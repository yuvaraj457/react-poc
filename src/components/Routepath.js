import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { Home as Homepage,About,Contact,Courses,Topic} from './navPage';
const Routepath = (props)=> {
    return(
                <Switch>
                        <Route exact path='/'>
                            <Homepage user={props.userDetails.UserName}/>
                        </Route>
                        <Route path='/about'>
                            <About about={props.userDetails}/>
                        </Route>
                        <Route path='/contact'>
                            <Contact contact={props.userDetails.contact} />
                        </Route>
                        
                        <Route exact path='/courses'>
                            <Courses courses={props.userDetails.courses} />
                        </Route>

                        <Route path={`/courses/:topicId`}>
                            <Topic/>
                        </Route>
                </Switch>
    )
}
export default Routepath;