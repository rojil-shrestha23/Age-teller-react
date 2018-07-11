import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends React.Component{
    render() {
        return(
            <div>
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
