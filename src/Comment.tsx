
import React, { useEffect, useState } from 'react'

const Comment = () => {

    interface CommentType{
        postId: number,
        id: number,
        name: string,
        email: string,
        body: string
    }

    const [comments,setComments] = useState<CommentType[] | null>(null);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) =>{
        console.log(e);
    }

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments'
        ).then((response) =>{
            return response.json();
        }).then((data) =>{
            setComments(data);
        })
    },[])

  return (
    <div style={{display: "flex", flexWrap:"wrap", justifyContent: "space-evenly", padding: "20 px"}}>
        {comments === null? <h2>Nothing to show</h2>:
        comments.map<React.ReactNode>((comment: CommentType) =>{
            return(
                <div style={{display: "flex", height:"300px", width:"300px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", marginTop: "20px"}} key={comment.id}>
                    {comment.body}
                    <div style={{display: 'flex', height: '60px', width: '100%', position: 'relative', bottom: '0px', background: "black"}}>
                        <button onClick={handleSubmit}>Click me</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Comment