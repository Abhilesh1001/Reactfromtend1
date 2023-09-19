import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from '../assets/2.jpg'

const Comment = () => {
    const [comment, setComment] = useState('')
    const [commentData, setCommentData] = useState('')
    const [replyData, setReplyData] = useState('')
    // console.log('comment', commentData)
    const id = localStorage.getItem("ProductID")
    const [handle, setHandle] = useState(false)

    const handleCommentSubmit = async (e) => {
        e.preventDefault()
        // console.log('ok')
        const userId = localStorage.getItem('UserId')
        const id = localStorage.getItem("ProductID")
        const data = {
            comment: comment,
            user: parseInt(userId),
            product: parseInt(id)
        }
        // console.log(data)
        try {
            const response = await axios.post('http://127.0.0.1:8000/blogcomment/', data)
            const res = response.data
            // console.log(res)
            setHandle(true)
        } catch (error) {

            console.log(error)
        }
        setComment('')
    }

    useEffect(() => {
        blogcomment()
    }, [handle])

    const blogcomment = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/blogcommentview/${id}`)
            const res = response.data
            // console.log(res)
            setCommentData(res)
        } catch (error) {
            console.log(error)
        }
    }

    const handleReplySubmit = (e) => {
        e.preventDefault()
        // console.log('ok')
    }

    const handleClick = async (e) => {
        console.log(e.target.id, replyData)
        const userId = localStorage.getItem('UserId')
        const id = localStorage.getItem("ProductID")
        const parent = parseInt(e.target.id)
        const data = {
            comment: replyData,
            user: parseInt(userId),
            product: parseInt(id),
            parent: parent
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/blogreply/', data)
            const res = response.data
            console.log(res)

        } catch (error) {
            console.log(error)
        }
        setReplyData('')

    }


    return (
        <div className='container border row'>
            Comment
            <div className="container">
                <form onSubmit={handleCommentSubmit}>
                    <input type="text" className='form-control my-2' value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button type='submit' className="btn btn-primary my-2" >Submit</button>
                </form >
                <div className="container">

                    {
                        Object.keys(commentData).map((item, index) => {
                            // console.log(commentData[item])
                            return <div key={index} className="row">
                                <div className="col-sm-2 my-2">
                                    <img src={Image} style={{ width: '100%' }} />
                                </div>
                                <div className="col-sm-10">
                                    <div>{commentData[item].user}</div>
                                    <div>{commentData[item].comment}</div>
                                    <div>{commentData[item].time}</div>
                                    <div className="container">
                                        <div className="row">
                                            {/* <div className="col-sm-2 my-2">
                                                <img src={Image} style={{ width: '100%' }} />
                                            </div> */}
                                            {/* <div className="col-sm-10">
                                                
                                            </div> */}
                                        </div>
                                        {/* <p>
                                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${index}`} aria-expanded="false" aria-controls="collapseExample">
                                                Reply
                                            </button>
                                        </p> */}
                                        {/* <div className="collapse" id={`collapseExample${index}`}>
                                            <form onSubmit={handleReplySubmit}>
                                                <div className="card card-body">
                                                    <input type="text" value={replyData} onChange={(e) => setReplyData(e.target.value)} className="form-control" />
                                                    <button type='submit' id={commentData[item].sno} onClick={handleClick} className='btn btn-primary my-2' style={{ marginLeft: '433px' }}  >Submit</button>
                                                </div>
                                            </form>
                                        </div> */}


                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>

        </div >
    )
}

export default Comment