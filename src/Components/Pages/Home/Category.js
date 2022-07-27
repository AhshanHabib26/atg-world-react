import React from 'react';
import {IoMdArrowDropdown} from 'react-icons/io'
import {MdOutlineGroupAdd} from 'react-icons/md'
import Styles from '../../Styles/Category.module.css'

const Category = () => {
    return (
        <div className='component mt-5'>
            <div className={Styles.main_wrapper}>
                <div className={Styles.category_container}>
                <ul>
                    <li>All Posts(32)</li>
                    <li>Article</li>
                    <li>Event</li>
                    <li>Education</li>
                    <li>Job</li>
                </ul>
                </div>
                <div className={Styles.outer_wrapper}>
                    <div className={Styles.inner_post}>
                        <p>Write Post</p>
                        <span><IoMdArrowDropdown/></span>
                    </div>
                    <div className={Styles.inner_group}>
                        <span><MdOutlineGroupAdd color='#fff' /></span>
                        <p>Join Group</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;