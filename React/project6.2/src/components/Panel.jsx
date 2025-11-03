import React from 'react'

const Panel = ({title,isActive,children,onShow}) => {
  return (
    <div>
      <h3>{title}</h3>
      {
          isActive ? (<p>{children}</p>) : (<button onClick={onShow}>Show</button>)
      }
    </div>
  )
}

export default Panel


















// import React from 'react'

// const Panel = ( {title,
//   children,
//   isActive,
//   onShow}) => {
//   return (
//     <div>
//       <h3>{title}</h3>
//       {
//         isActive ? (<p>{children}</p>) : (<button onClick={onShow}>Show</button>
//       )}
//     </div>
//   )
// }

// export default Panel
