import _ from 'lodash'


const Pagination=(props)=> {

        const {itemCount,pageSize}=props;
      const pagesCount=Math.ceil(itemCount/pageSize)
      const pages=_.range(1,pagesCount+1)

        
  return (

    <div>

<nav aria-label="Page navigation example">
  <ul class="pagination">

{pages.map(m=>( <li  class="page-item"><a class="page-link"
onClick={()=>props.handleClickPagination(m)}>{m}</a></li>))}

   


  </ul>
</nav>  
    </div>
  )
}

export default Pagination;



