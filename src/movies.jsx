import React, { Component } from 'react'
import {getMovies} from './fakeapi'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Pagination from './pagination';
import Paginate from './paginate';
export default class Movies extends Component {

     state={
      movies:getMovies(),
      itemCount:5,
      pageSize:2,
      currentPage:1,




     };

     handleDelete=(id)=>
     {
        const movies=this.state.movies.filter(m=>m.id!==id);
        this.setState({movies});
     }

     hanldePagination=(page)=>{
   const currentPage=page
   //Note i dint write currentPage inside { } and hence i was getting error
   this.setState({currentPage})
     }
  render() {
//note everyline here is written in const 
const  {movies:allMovies,itemCount,pageSize,currentPage}=this.state;
       const movies=Paginate(allMovies,currentPage,pageSize)

//note we cant access the movies property directly by using movies.length
// we have to use following method only
  const {length}=this.state.movies

  if(length===0) return(

  <div ><p></p>
  
         <p className="">There are no movies in Datebase</p>
  </div>
  )
    return (

         <div className=' w-75 mx-auto'>
         <p></p>

<p>Showing {length} movies from the Database</p> 
 


<table className=' table align-middle table-bordered'>
 
<thead>
  

  <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Duration</th>
          <th></th>
         
  </tr>
  </thead>

<tbody>
  
          {movies.map(m=>(
                  <tr>
                          <td>{m.Title}</td>
                          <td>{m.Year}</td>
                          <td>{m.Runtime}</td>
                          <td><button className='btn btn-sm btn-danger' onClick={()=>this.handleDelete(m.id)}> Delete</button></td>
                          
                  </tr>
          ))}
  
</tbody>



  

</table>
<Pagination pageSize={this.state.pageSize} itemCount={this.state.itemCount}
handleClickPagination={this.hanldePagination}></Pagination>

    </div>
    )

  }
}

