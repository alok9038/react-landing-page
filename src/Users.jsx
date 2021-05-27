import React, { useEffect, useState } from "react"
// import { NavLink } from "react-router-dom"

const Users = () =>{
    const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/api/posts").then((result) =>{
    //         result.json().then((record) => {
    //             setData(record)
    //         })
    //     })
    //   }, [])

      useEffect(()=>{

        fetch("http://127.0.0.1:8000/api/posts").then(Response=>Response.json())
        .then(data => setData(data))
        },[])

    return (
        <>
            <div className="container bg-white round-25 p-3 mt-5 pt-3 shadow">
                <table className="table table-hover">
                <thead>
                    <tr className="bg-dark text-light">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Pincode</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((item) =>
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            {/* <th className="d-flex align-items-center"><img src={"http://127.0.0.1:8000/image/"+item.image} alt="" className="img-fluid user-avatar rounded-circle shadow"/> <h6 className="ms-3">{item.name}</h6></th> */}
                            <th className="h6 pt-4">{item.message}</th>
                            {/* <th className="h6 pt-4">{item.pincode}</th>
                            <th className="pt-4">
                                <div className="btn-group shadow">
                                    <NavLink to="" className="btn btn-info btn-sm rounded-0">e</NavLink>
                                    <NavLink to="" className="btn btn-info btn-sm rounded-0">v</NavLink>
                                    <NavLink to="" className="btn btn-info btn-sm rounded-0">x</NavLink>
                                </div>
                            </th> */}
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Users;