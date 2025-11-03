import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from "./features/userSlice.js"
function App() {
  const dispatch = useDispatch()
  const { user, status, error } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchUser(1))  // fetch user with id=1
  }, [dispatch])

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failed') return <p>Error: {error}</p>

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>AsyncThunk Example</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  )
}

export default App
