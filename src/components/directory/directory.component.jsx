import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor(){
        super();
        this.state={
           sections: [
               {
                   title:'HATS',
                   imageUrl:'https://images.unsplash.com/photo-1568123326923-105aaedcee23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                   size:'large',
                   id:1
               },
               {
                   title:'JACKETS',
                   imageUrl:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                   size:'large',
                   id:2
               },

               {
                title:'SNEAKERS',
                imageUrl:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
                size:'large',
                id:3
               },
              {
                title:'WOMENS',
                imageUrl:'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                size:'large',
                id:4
              },
              {
                title:'MENS',
                imageUrl:'https://images.unsplash.com/photo-1599577180675-470e88ebe8dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                size:'large',
                id:5
               }
           ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
              {
                this.state.sections.map(({title,imageUrl,id,large}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={large} />
                ))
              }
             
            </div>

        )
    }

}
export default Directory;