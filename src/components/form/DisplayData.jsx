import React, { useState } from "react"

export const FormDataList = ({ formdata, signupformdata, blogpostformdata }) => {


    return (<>
        <ul style={{ display: 'block', padding: '5px' }}>
            {formdata.map((index) => (<li key={index}>{formdata}</li>))}
        </ul>

        <ul style={{ display: 'block', padding: '5px' }}>
            {signupformdata.map((index) => (<li key={index}>{signupformdata}</li>))}
        </ul>

        <ul style={{ display: 'block', padding: '0px' }}>
            {blogpostformdata.map((index) => (<li key={index}>{blogpostformdata}</li>))}
        </ul>
    </>
    )
}

export const LoginData = ({ addLoginData }) => {
    const [newLoginData, setNewLoginData] = useState('')
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        addLoginData(newLoginData)
        setNewLoginData('')
    }
    return (
        <form onSubmit={handleLoginSubmit} style={{ display: 'block', padding: '5px' }}>
            <input type='text' value={newLoginData} onChange={(e) => setNewLoginData(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}
export const SignupData = ({ addSignupData }) => {
    const [newSignupData, setNewSignupData] = useState('')

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        addSignupData(newSignupData)
        setNewSignupData('')
    }

    return (
        <form onSubmit={handleSignupSubmit} style={{ display: 'block', padding: '5px' }}>
            <input type='text' value={newSignupData} onChange={(e) => setNewSignupData(e.target.value)} />
            <button type="submit">Signup</button>
        </form>
    )
}

export const BlogPostData = ({ addBlogPostData }) => {
    const [newBlogPostData, setNewBlogPostData] = useState('')

    const handleBlogPostSubmit = (e) => {
        e.preventDefault();
        addBlogPostData(newBlogPostData)
        setNewBlogPostData('')
    }

    return (
        <form onSubmit={handleBlogPostSubmit} style={{ display: 'block', padding: '5px' }}>
            <input type='text' value={newBlogPostData} onChange={(e) => setNewBlogPostData(e.target.value)} />
            <button type="submit">BlogPost</button>
        </form>
    )
}