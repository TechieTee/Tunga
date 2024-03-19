import React, { useState, useEffect } from "react"
import { LoginData, SignupData, BlogPostData, FormDataList } from './DisplayData';



const StoredData = () => {
  const [formData, setFormData] = useState([])
  const [formData2, setFormData2] = useState([])
  const [formData3, setFormData3] = useState([])
  const addLoginData = (data1) => {
    setFormData([...formData, data1])
  }
  const addSignupData = (data2) => {
    setFormData2([...formData2, data2])
  }
  const addBlogPostData = (data3) => {
    setFormData3([...formData3, data3])
  }
  useEffect(()=>{
const storedData = localStorage.getItem("firstData")
if (storedData){
  setFormData(storedData)
}
  },[])

  return (
    <div>
      <FormDataList formdata={formData} signupformdata={formData2} blogpostformdata={formData3} />
      <LoginData addLoginData={addLoginData} />
      <SignupData addSignupData={addSignupData} />
      <BlogPostData addBlogPostData={addBlogPostData} />
    </div>
  )
}

export default StoredData;