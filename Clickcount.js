// import { SettingsInputAntennaTwoTone } from '@mui/icons-material'
import React, { Component } from 'react'
import EnComponent from './HOC'
 class Clickcounts extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //        count:0
    //     }
    //   } 
    //   inc=()=>{
    //       this.setState(({count:
    //           this.state.count+1}))
    //   }
          render(props) {
          return (
            <div>
            <button onClick={this.inc}>
                Clickcount{this.state.count}
            </button>
            </div>
          )
        }
      }
      export default EnComponent(Clickcounts)
