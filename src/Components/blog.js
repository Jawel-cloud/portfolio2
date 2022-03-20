import React, { useState } from 'react';
const Blog = () => {

    const [blog1, setBlog1] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, libero consequatur sint labore, atque tempore rem a assumenda dicta reprehenderit architecto eius laborum maxime aspernatur!');
    const [more1, setMore1] = useState('Read more >');
    const [blog2, setBlog2] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, libero consequatur sint labore, atque tempore rem a assumenda dicta reprehenderit architecto eius laborum maxime aspernatur!');
    const [more2, setMore2] = useState('Read more >');
    const handleBlog1More =(e)=>{
        console.log(e.target.textContent);
        if (more1 === 'Read more >'){
            setMore1('Show less');
            setBlog1('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis rem distinctio similique, sequi et, voluptatum laudantium animi nesciunt nostrum nulla suscipit aliquid blanditiis molestiae earum id asperiores velit magnam alias.Amet laudantium blanditiis fugiat, optio et incidunt vero consequatur, voluptate rerum modi, recusandae repellendus reiciendis similique. Ratione assumenda enim non qui ipsa possimus beatae, laborum exercitationem consequatur neque officiis similique!')
        }else{
            setMore1('Read more >');
            setBlog1('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis rem distinctio similique, sequi et, voluptatum laudantium animi nesciunt nostrum nulla suscipit aliquid blanditiis molestiae earum id asperiores!')
        }
    }
    const handleBlog2More =()=>{
        if (more2 === 'Read more >'){
            setMore2('Show less');
            setBlog2('Placeat consequuntur iure iste libero rem culpa nam earum quos itaque? Nostrum dolore dicta ipsa. Tempore fugit repellat quisquam nihil amet dicta? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis rem distinctio similique, sequi et, voluptatum laudantium animi nesciunt nostrum nulla suscipit aliquid blanditiis molestiae earum id asperiores velit magnam alias.Amet laudantium blanditiis fugiat, optio et incidunt vero consequatur, voluptate rerum modi, recusandae repellendus reiciendis similique. Ratione assumenda enim non qui ipsa possimus beatae, laborum exercitationem consequatur neque officiis similique!')
        }else{
            setMore2('Read more >');
            setBlog2('Placeat consequuntur iure iste libero rem culpa nam earum quos itaque? Nostrum dolore dicta ipsa. Tempore fugit repellat quisquam nihil amet dicta?')
        }}
    const blogs = [
        {name: 'myWorks__blog-blog1', title: 'Title 01', more: more1,
         content: blog1, click: handleBlog1More,
        },{name: 'myWorks__blog-blog2', title: 'Title 02', more: more2,
          content: blog2, click: handleBlog2More,}];

    const myBlogs = blogs.map(blog=>{
        return(
            <div className="myWorks__blog">
            <div className={blog.name}></div>
            <div className="blog__content">
                <div className="blog__content-props">
                    <h2>&#47;&#47;{blog.title}</h2>
                    <p className="blog-other">author, 01.09.2020</p>
                </div>
                <p className="description">Secondary Title</p>
                <p>{blog.content}</p>
                <div className="blog-other-wrapper"><p onClick={blog.click} name={blog.name}
                className="blog-other">{blog.more} </p></div>
            </div>
        </div>
        )})

    return ( 
        <div className='Blog-wrapper'>

        <h2 id="blog">&#47;&#47; Blog posts</h2>
        <p class="description">Hints and tips</p>
        {myBlogs}
        </div>
     );
}
export default Blog;