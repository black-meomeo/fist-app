import { useState } from 'react';
import Header from './components/Header';
import PostItem from '~/components/PostItem';
import Footer from './components/Footer';
import Form from './components/Form';

function Button({ label, type, placeholder, onClick }) {
  return (
    <div>
      <label> {label} </label>
      <input type={type} placeholder={placeholder} onFocus={onClick} />
    </div>
  );
}

function App() {
  return (
    <div id="wrapper">
      <Header />
      <Button label="Name" type="text" placeholder="loi no" onClick={() => console.log(Math.random())} />
      <PostItem
        title="Hình ảnh về Ngã, Mùa hạ, Rừng. Sử dụng miễn phí."
        img="https://cdn.pixabay.com/photo/2023/08/15/17/25/fall-8192375_1280.png"
        description=" Ngày 14/9, Bộ Công an có Công điện gửi Thủ trưởng các đơn vị: Bộ Tư lệnh Cảnh sát cơ động; Cục Cảnh sát phòng
        cháy, chữa cháy và cứu nạn, cứu hộ; Cục Cảnh sát giao thông; Cục Cảnh sát quản lý trại giam, cơ sở giáo dục bắt
        buộc, trường giáo dưỡng; Cục Truyền thông CAND và Giám đốc Công an các tỉnh: Lào Cai, Yên Bái, Lai Châu, Sơn La,
        Điện Biên, Tuyên Quang, Phú Thọ, Hòa Bình, Hà Giang, Cao Bằng, Bắc Kạn, Thái Nguyên, Lạng Sơn, Quảng Ninh và
        Thanh Hóa về việc tập trung khắc phục hậu quả lũ quét tại Lào Cai và chủ động ứng phó mưa lũ ở miền núi, trung
        du Bắc Bộ"
        public2="Một ngày trước .  5 phút đọc"
      />
      <button onClick={() => console.log(Math.random())}>click me !!</button>
      <Footer />
    </div>
  );
}

export default App;
