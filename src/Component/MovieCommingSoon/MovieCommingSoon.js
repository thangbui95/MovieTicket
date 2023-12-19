import React, { Component } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

export default class MovieCommingSoon extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/nowAndSoon`)
          .then(res => res.json())
          .then(dt => {
            this.setState({
              data: dt
            })
          })
      }
  render() {

    return (
                                <div className='movie'>
                            <div className='up'>
                                <p>Phim sap chieu</p>
                            </div>
                            <div className='down'>
                                <div className='contentcover'>
                                    {
                                        Object.keys(this.state.data).length>0 &&   this.state.data.movieCommingSoon?.map((n,i)=>{
                                            return <div key={i} className='moviecover' >
                                            <img
                                                src={n.imageLandscape}
                                            />
                                            <p className='eng'>{n.subName}</p>
                                            <p className='vn'>{n.name}</p>
                                        </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='buttoncover'>
                                <button>
                                    XEM THEM
                                    <span><AiOutlineArrowRight/></span>
                                </button>
                            </div>
                        </div>

    )
  }
}
