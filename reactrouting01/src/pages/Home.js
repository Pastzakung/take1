import React from 'react';
import '../App.css'; // หรือแยกเป็น Home.css ก็ได้

function Home() {
  return (
    <div className="home-container">
      <h1>ยินดีต้อนรับ!</h1>
      <p>นี่คือหน้าแรกของเว็บไซต์</p>

      <div className="home-buttons">
        <a href="/register" className="btn">สมัครสมาชิก</a>
        <a href="/contact" className="btn">ติดต่อเรา</a>
      </div>
    </div>
  );
}

export default Home;
