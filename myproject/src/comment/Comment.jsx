import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from '../assets/2.jpg'
import { useSelector } from 'react-redux'

const Comment = () => {
    const [comment, setComment] = useState('')
    const [commentData, setCommentData] = useState('')
    const [replyData, setReplyData] = useState('')
    const [replyCommentData, setReplyCommentData] = useState('')
    // console.log('comment', commentData)
    const user = useSelector((state) => state.login.user)
    const id = localStorage.getItem("ProductID")
    const [handle, setHandle] = useState(false)
    const [handleReply, setHandleReply] = useState(false)

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
    }, [handle, handleReply])

    const blogcomment = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/blogcommentview/${id}`)
            const res = response.data
            // console.log(res)
            let dataitem = []
            for (let data in res) {
                dataitem.push(res[data])
            }
            // console.log('data0', dataitem[0])
            // console.log('data1', dataitem[1])
            // console.log(dataitem[1][0])
            setCommentData(dataitem[0])
            setReplyCommentData(dataitem[1][0])

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
            // console.log(res)
            setHandleReply(true)

        } catch (error) {
            console.log(error)
        }
        setReplyData('')

    }
    // let dataitem = []
    // for (let data in commentData){
    //     console.log(commentData[data])
    //     dataitem.push(commentData[data])
    // }
    // console.log('data0',dataitem[0])
    // console.log('data1',dataitem[1])


    return (
        <div className='container border row'>
            Comment
            <div className="container">
                <form onSubmit={handleCommentSubmit}>
                    <input type="text" className='form-control my-2' value={comment} onChange={(e) => setComment(e.target.value)} />
                    {(user !== null && user !== "") && <button type='submit' className="btn btn-primary my-2" >Submit</button>}
                </form >
                <div className="container">

                    {
                        Object.keys(commentData).map((item, index) => {
                            // console.log(commentData[item])
                            // console.log('data11', replyCommentData[commentData[item].sno])
                            return <div key={index} className="row">
                                <div className="col-sm-2 my-2">
                                    <img src={Image} style={{ width: '75%', borderRadius: '20px', border: '2px solid black', maxHeight: '10vh', maxWidth: '10vh' }} />
                                </div>
                                <div className="col-sm-10">
                                    <div style={{ fontFamily: 'times-roman' }}>{commentData[item].user.charAt(0).toUpperCase() + commentData[item].user.slice(1)}</div>
                                    <div>{commentData[item].comment}</div>
                                    <div>{commentData[item].time}</div>
                                    <div className="container">
                                        {replyCommentData[commentData[item].sno] !== undefined && <div> 
                                            {
                                                Object.keys(replyCommentData[commentData[item].sno]).map((items, indexs) => {
                                                    console.log(commentData[item].sno, replyCommentData[commentData[item].sno][items].user)
                                                    return <div key={indexs}>
                                                        <div className="row">
                                                            <div className="col-sm-2 my-2">
                                                                <img src={Image} style={{ width: '100%', borderRadius: '20px', border: '2px solid black', maxHeight: '10vh', maxWidth: '10vh' }} />
                                                            </div>
                                                            <div className="col-sm-10">
                                                                {commentData[item].sno && <div>
                                                                    <div>{replyCommentData[commentData[item].sno][items].user.charAt(0).toUpperCase() + replyCommentData[commentData[item].sno][items].user.slice(1)}</div>
                                                                    <div>{replyCommentData[commentData[item].sno][items].comment}</div>
                                                                    <div>{replyCommentData[commentData[item].sno][items].time}</div>
                                                                </div>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>}
                                        <p>
                                            {(user !== null && user !== "") && <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${index}`} aria-expanded="false" aria-controls="collapseExample">
                                                Reply
                                            </button>}
                                        </p>
                                        <div className="collapse" id={`collapseExample${index}`}>
                                            <form onSubmit={handleReplySubmit}>
                                                <div className="card card-body">
                                                    <input type="text" value={replyData} onChange={(e) => setReplyData(e.target.value)} className="form-control" />
                                                    <button type='submit' id={commentData[item].sno} onClick={handleClick} className='btn btn-primary my-2' style={{ marginLeft: '433px' }}  >Submit</button>
                                                </div>
                                            </form>
                                        </div>


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