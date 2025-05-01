import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // ถ้ามีการจัดสไตล์ในไฟล์นี้

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="header">ติดต่อเรา</h2>
      <p>หากคุณมีคำถามหรือต้องการติดต่อ กรุณากรอกข้อมูลด้านล่าง:</p>
      <form className="contact-form">
        <input type="text" placeholder="ชื่อของคุณ" required />
        <input type="email" placeholder="อีเมลของคุณ" required />
        <textarea placeholder="ข้อความของคุณ" rows="4" required />
        <button type="submit">ส่งข้อความ</button>
      </form>

      {/* ปุ่มกลับหน้าแรก */}
      <Link to="/" className="back-home-btn">กลับไปหน้าแรก</Link>
    </div>
  );
}

export default Contact;
