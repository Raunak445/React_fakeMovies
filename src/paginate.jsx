import _ from 'lodash'

const Paginate = (item,pageNumber,pageSize) => {
        const startIndex=(pageNumber-1)*pageSize
        return _(item).slice(startIndex).take(pageSize).value();
}

export default Paginate;
