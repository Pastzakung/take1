import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      console.log('ข้อมูลที่สมัคร:', formData);
      alert('สมัครสมาชิกสำเร็จ!');
      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
      });
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="register-container">
      <h2>สมัครสมาชิก</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="username"
          placeholder="ชื่อผู้ใช้"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="รหัสผ่าน"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="ยืนยันรหัสผ่าน"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">สมัครสมาชิก</button>
      </form>

      {/* ปุ่มกลับหน้า Home */}
      <Link to="/" className="back-home-btn">กลับไปหน้าแรก</Link>
    </div>
  );
}

export default Register;
