import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import '../../css/blogs.css'
import { Link } from 'react-scroll';
import PostComment from "./comments";
function Blog() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);
  return (
    <div className="blog-single gray-bg">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-8 m-15px-tb">
            {postLists.map(({ title, postText, author, id }) => {
              return (
                <article className="article" key={id} id={`${id}`} data-aos="fade-up">
                  <div className="article-img">
                    <img src="https://via.placeholder.com/800x350/87CEFA/000000" title="" alt="" />
                  </div>
                  <div className="article-title">
                    <h3>{title}</h3>
                    <div className="media">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title="" alt="" />
                      </div>
                      <div className="media-body">
                        <label>{author.name}</label>
                      </div>
                    </div>
                  </div>
                  <div className="article-content">
                    <p>{postText}</p>
                  </div>
                </article>
              )
            })}
            <PostComment />
          </div>
          {postLists.map(({ title, author, id }) => {
            return (
              <div className="col-lg-4 m-15px-tb blog-aside" data-aos="fade-left" key={id}>
                <div className="widget widget-latest-post">
                  <div className="widget-title">
                    <h3>Latest Post</h3>
                  </div>
                  <div className="widget-body">
                    <div className="latest-post-aside media">
                      <div className="lpa-left media-body">
                        <div className="lpa-title">
                          <Link to={`${id}`}>
                            <h5>{title}</h5>
                          </Link>
                        </div>
                        <div className="lpa-meta">
                          <a className="name" href="/">
                            {author.name}
                          </a>
                        </div>
                      </div>
                      <div className="lpa-right">
                        <a href="/">
                          <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title="" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
