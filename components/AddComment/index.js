import React from 'react'
import styles from '../../styles/AddComment.module.scss'
import CommentBox from '../CommentBox'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const AddComment = ( props ) => {

    const { closeHandler } = props ;
    return (
        <div className={styles.addCommentBox} >
            <ClearOutlinedIcon onClick={closeHandler} style={{color:"red", cursor:"pointer"}} />
            <CommentBox drawer />
        </div>
    )
}

export default AddComment
