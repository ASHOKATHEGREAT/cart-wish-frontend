import React from 'react'

const Logout = () => {
    useEffect(() => {
       logout();
        window.location = '/'; 
    }, [])
  return null;
}

export default Logout