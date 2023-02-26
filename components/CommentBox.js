import React, { useState } from 'react'
import styles from '../styles/commentbox.module.scss'

const CommentBox = () => {

    const [ commentText, setCommentText ] = useState("")

    const onChangeHandler = (e) => {
        setCommentText(e.target.value)
    }
  return (
    <div className={styles.commentBox}>
          <div className={styles.commentTitle}>Write a comment</div>
          <div className={styles.divider}>
            <div className={styles.dividerColor}></div>
          </div>
          <div className={styles.commentInputContainer}>
            <textarea onChange={onChangeHandler} className={styles.commentInput} placeholder="Add a comment"/>
            { commentText && (
                <button>Post</button>
            ) }
          </div>
    </div>
  )
}

export default CommentBox