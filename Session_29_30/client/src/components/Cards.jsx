// import React from 'react'
// import {RiDeleteBin7Line} from 'react-icons/ri'
// import {FaRegEdit} from 'react-icons/fa'
// import {BiCategoryAlt} from 'react-icons/bi'
// import notes from '../data/notes'
// import { Link } from 'react-router-dom'

// const Cards = (props) => {

//     const deleteHandler = (props.id) => {
//         if(window.confirm("Are You Sure?")){

//         }
//     }
//   return (
//     <div>
//         <div className='card-note'>
//             <div className='card-top'><BiCategoryAlt /><p>{props.category}</p></div>
//             <h3 className='unbounded'>{props.title}</h3>
//             <p className='card-note-para'>{props.content}</p>
//             <button className='circular-btn'><RiDeleteBin7Line size={30} /></button>
//             <Link to={`/note/${props.id}`}>
//             <button className='circular-btn'><FaRegEdit size={30} /></button>
//             </Link>
//           </div>
//     </div>
//   )
// }

// export default Cards