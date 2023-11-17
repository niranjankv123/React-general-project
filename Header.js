import Image from "./image1.jpeg"
import Image1 from "./image2.jpg"
import  {useState} from 'react';
import React from "react"
import './Header.css';
   function Headers()
   {
      const[counts,setCounts]=useState(0);
      const[counts1,setCounts1]=useState(0);
      const[counts2,setCounts2]=useState(0);
      function  high()
      {
         setCounts(counts+1);
      }
      function  low()
      {
         setCounts(counts-1);
      }
      function  high1()
      {
         setCounts1(counts1+1);

      }
      function  high2()
      {
         setCounts2(counts2+1);
      }
      function  low2()
      {
         setCounts2(counts2-1);
      }
  return (
    <div className="profile">
      <h2>I'M GRoot
      </h2>
       <img src={Image1} height="500px" width="400px" alt="img"/>
      <div className="profile-info">
        <button onClick={high}><b>l'M GRoot🥰</b></button>
         <button onClick={low}><b>I'M GROOT😣</b></button>
         <span>{counts}</span>
         <button onClick={high1}>Comment</button>
         <span>{counts1}</span>
      </div>
      <div className="posts">
        <h3>New Posts</h3>
        <div className="post">
        <img src={Image} height="500px" width="400px" alt="img"/>
        <p className="post-caption">hi i'm niranjan</p>
        <h2>Unknown</h2>
        <p>Email: xxxxxx@example.com</p>
        <p>Location: Banglore City, Bharat Country</p>
        <button onClick={high2}>👍</button>
         <button onClick={low2}>👎</button>
         <span>{counts2}</span>
        </div>
        {/* Add more posts as needed */}
      </div>
      <div className="posts">
        <h3>New Posts</h3>
        <div className="post">
        <img src={Image} height="500px" width="400px" alt="img"/>
        <p className="post-caption">hi i'm niranjan</p>
        <h2>Unknown</h2>
        <p>Email: xxxxxx@example.com</p>
        <p>Location: Banglore City, Bharat Country</p>
        <button onClick={high2}>👍</button>
         <button onClick={low2}>👎</button>
         <span>{counts2}</span>
        </div>
        {/* Add more posts as needed */}
      </div>
      <div className="posts">
        <h3>New Posts</h3>
        <div className="post">
        <img src={Image} height="500px" width="400px" alt="img"/>
        <p className="post-caption">hi i'm niranjan</p>
        <h2>Unknown</h2>
        <p>Email: xxxxxx@example.com</p>
        <p>Location: Banglore City, Bharat Country</p>
        <button onClick={high2}>👍</button>
         <button onClick={low2}>👎</button>
         <span>{counts2}</span>
        </div>
      </div>
      <footer>
         <p>all rights reserved</p>
      </footer>
    </div>
  );
};

export default Headers;
