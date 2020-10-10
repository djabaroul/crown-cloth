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
                   imageUrl:'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                   
                   id:1,
                   linkUrl:'hats'
               },
               {
                   title:'JACKETS',
                   imageUrl:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                   
                   id:2,
                   linkUrl:''
               },

               {
                title:'SNEAKERS',
                imageUrl:'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                
                id:3,
                linkUrl:''
               },
              {
                title:'WOMENS',
                imageUrl:'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                size:'large',
                id:4,
                linkUrl:''
              },
              {
                title:'MENS',
                imageUrl:'https://images.unsplash.com/photo-1601333144314-e7884b3d63eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                size:'large',
                id:5,
                linkUrl:''
               }
           ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
              {
                this.state.sections.map(({id, ...OtherSectionsProps}) => (
                    <MenuItem key={id} {...OtherSectionsProps} />
                ))
              }
             
            </div>

        )
    }

}
export default Directory;