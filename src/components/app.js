import React, { Component }  from "react";

function App(){
    state = {
        data: null
    };
    componentDidMount(); {
        this.callBackendAPI()
        .then(res => this.setState({data: res.express}))
        .catch(err =>  console.log(err))
    }

    callBackendAPI = async () =>{
        const response = await fetch('/')
        const body = await response.json()

        if (response.status !==200){
            throw Error (error )
}
        return body;
    }
    return <div>
        <h1>Hello world</h1>
        <p>How are you doing</p>
    </div>
}

export default App