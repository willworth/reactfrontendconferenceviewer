import React, { Component } from 'react'
import confsJson from './confs.json'
export default class Container extends Component {
    constructor(props){
        super(props);
        this.state= {
            confs: confsJson.conferences
        }
    }
    render() {
        return (
            <div className="Container">
                 conf title is  + {this.state.confs[0].title}
            </div>
        )
    }
}
