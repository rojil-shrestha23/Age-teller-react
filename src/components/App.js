import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
 
class App extends React.Component{
    render() {
        return(
            <div className= "App"> 
                <Form inline>
                    <h2> Enter Your Birthday</h2>
                    <FormControl type = "date">
                    </FormControl>
                    {' '}
                    <Button>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    } 
}

export default App;
