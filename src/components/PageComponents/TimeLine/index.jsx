import TLComp from "./TLComp";
import Reveal from "../../Utilites/Reveal";
function TimeLine() {
  return (
    <section
      id="timeline"
      className="flex flex-col w-full items-center bg-black/60 py-20"
    >
      <div className="flex flex-col w-fit">
        <p class="font-bold text-[50px] light-purple text-white ">Time Line</p>
        <span class="horizontal-bar"></span>
      </div>
      <Reveal hiddenY={100} className="w-full">
      <div className="flex flex-col w-full items-center my-24 relative ">
        
        <TLComp title={'Khai mạc Đại hội Global Shapers Hanoi Hub - HUB Forum'} time={'8h30 - 9h00'} detail={['Đại diện Thành đoàn HN phát biểu khai mạc','Đại diện Tập đoàn FPT phát biểu chào mừng']}  />
        <TLComp left={false} title={'Đại hội Câu lạc bộ Kiến tạo Địa cầu thành phố Hà Nội'} time={'9h00 - 10h40'} detail={ ['Hiệp thương bầu Đoàn Chủ tịch, Ban Thư ký, Ban Thẩm tra tư cách đại biểu','Báo cáo kiểm điểm','Thông qua đề án nhân sự BCH nhiệm kỳ 2023 - 2025','Hiệp thương nhân sự BCH nhiệm kỳ 2023 - 2025','Ban chấp hành nhiệm kỳ mới ra mắt Đại hội','Trình bày báo cáo Tổng kết công tác Câu lạc bộ Kiến tạo Địa cầu nhiệm kỳ 2021- 2023 và phương hướng nhiệm kỳ 2023 - 2025','Tham luận tại Đại hội','Ban chấp hành nhiệm kỳ mới ra mắt Đại hội']}  />
        <TLComp  title={'Lễ ra mắt mạng lưới Hub Network miền Nam'} time={'10h40 - 10h50'} /> 
        <TLComp left={false} title={'Lễ ký kết hợp tác hỗ trợ thanh niên khởi nghiệp tại các trường Đại học '}   time={'10h50 - 11h05'} />
        <TLComp title={'Ra mắt demo nền tảng quản lý hoạt động Đổi mới sáng tạo và chuyển đổi số '} time={'11h05 - 11h30'}  />
        <TLComp left={false} title={'Chương trình trao đổi học sinh tới trường TH, THCS và THPT Hy Vọng '} time={'13h30- 15h00'} />
        <TLComp title={'Chuỗi 05 hội thảo ứng dụng khoa học công nghệ, khởi nghiệp đổi mới sáng tạo- Hub Forum 2023'} time={'13h30- 17h30'} detail={['Hội thảo giao lưu và trình diễn các công nghệ phát triển','Hội thảo ứng dụng khoa học và công nghệ vào các lĩnh vực đời sống','Tập huấn tư vấn cho các nhà đầu từ, doanh nghiệp vừa và nhỏ về gọi vốn, đầu tư và phát triển doanh nghiệp','Hội thảo giao lưu về các công nghệ tân tiến của thời ','Hội thảo khoa học ứng dụng công nghệ Thực tại ảo, Thực tại tăng cường (VR/AR)']} />
        <TLComp left={false} title={'Bế mạc'} time={'17h30- 17h40'} />
        <div className="absolute top-0 bottom-0 w-1 bg-white rounded-full"></div>
      </div>
      </Reveal>
    </section>
  );
}

export default TimeLine;
