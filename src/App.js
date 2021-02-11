import React from 'react'
import logo from './logo.svg';
import './App.css';
import CoolHeader from './header.js'
import images from './data.js' 
import ImageList from './ImageList.js'
import ImageItem from './ImageItem.js'

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '', 
  }

  render(){

    const uniqueCategory = Array.from(new Set(images.map(image => image.keyword)));

    const filteredImages = images.filter((image) => {
      if(!this.state.keyword) return true; 
    
      if(this.state.keyword === 'all') return true;
    
      if(image.keyword === this.state.keyword) return true;

      return false;
    })

    const filteredHorns = filteredImages.filter((image) => {

      if(!this.state.horns) return true; 
    
      if(this.state.horns === 'all') return true;
    
      if(image.horns.toString() === this.state.horns) return true;
      console.log(image.horns, this.state.horns);

      return false;
    })

    const imagesUnique = images.map((image) => {
       return <ImageItem key={image.title} image={image}/>
    }) 
      
    return(
      <>
        <CoolHeader/>
        <div className="image-sorter">
          <form>
            Sort images by keyword <br/>
            <select value={this.state.keyword} 
            onChange={(e) =>{
            this.setState({keyword: e.target.value})
            }}
            >
              <option value='all'>All</option>
              <option value='addax'>Addax</option>
              <option value='chameleon'>Chameleon</option>
              <option value='dragon'>Dragon</option>
              <option value='lizard'>Lizard</option>
              <option value='markhor'>Markhor</option>
              <option value='mouflon'>Mouflon</option>
              <option value='narwhal'>Narwhal</option>
              <option value='rhino'>Rhino</option>
              <option value='triceratops'>Triceratops</option>
              <option value='unicorn'>Unicorn</option>
              <option value='unilego'>Unilego</option>
            </select>
            
          </form>

           <form>
           Grab them by the horns! <br/>
            <select value={this.state.horns} 
            onChange={(e) =>{
            this.setState({horns: e.target.value})

            }}
            >
              <option value='all'>All</option>
              <option value='1'>Single horn</option>
              <option value='2'>Dual horn</option>
              <option value='3'>Triple horn</option>
              <option value='100'>Too many horns</option>
            </select><br/>
            <button>View All</button>
          </form> 
        </div>

        <div className='image-view'>
          <ImageList images={filteredHorns}/>
        </div> 
      </>
    );
  }
}