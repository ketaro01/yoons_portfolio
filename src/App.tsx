import React, { useEffect } from "react";
import "./App.scss";
import $ from "jquery";
import useCheckMobile from "./utils/useCheckMobile";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Menu from "./components/Menu";
import Section from "./components/Section";
import { Avatar, Grid } from "@material-ui/core";
import myAvatar from "./assets/wwwww.png";
import DevIcons from "./components/DevIcons";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import careers from "./data/careers.json";
import skills from "./data/skills.json";
import PageUp from "./components/PageUp";

const styles = {
  settings: { position: "absolute" as "absolute", right: 0, bottom: 20 },
  setting: { margin: 5, opacity: 0.5, cursor: "pointer", color: "#fff" }
};

const App: React.FC = () => {
  const isMobile = useCheckMobile();

  useEffect(() => {
    function parallax_height() {
      const scroll_top = $(window).scrollTop() || 0;
      let header_height = $(".sample-header-section").outerHeight() || 0;
      $(".sample-section").css({ "margin-top": header_height });
      const headerSize = header_height - scroll_top;
      $(".sample-header").css({ height: headerSize });
      if (headerSize < 0) {
        $(".pageup-btn").css({ display: "" });
      } else {
        $(".pageup-btn").css({ display: "none" });
      }
    }
    parallax_height();
    $(window).scroll(function() {
      parallax_height();
    });
    $(window).resize(function() {
      parallax_height();
    });
  }, []);
  return (
    <div>
      <div className="sample-header">
        <Menu />
        <div style={styles.settings}>
          <IconButton aria-label="setting">
            <Icon style={styles.setting}>settings</Icon>
          </IconButton>
        </div>
        <div className="sample-header-section">
          <h2>Developer</h2>
          <h1>Daehun Yoon's Portfolio</h1>
        </div>
      </div>
      <div className="sample-section-wrap">
        <div className="sample-section">
          <Section title="About Me." icon="account_box" className="about">
            <Grid container>
              <Grid item xs={isMobile ? 12 : 4}>
                <Avatar
                  alt="Remy Sharp"
                  src={myAvatar}
                  style={{
                    margin: isMobile ? "0 auto" : 10,
                    width: 200,
                    height: 200
                  }}
                />
                <div
                  style={{
                    width: isMobile ? "100%" : 200,
                    textAlign: "center",
                    margin: 10
                  }}
                >
                  <h4 style={{ marginBottom: 5 }}>윤대훈</h4>
                  <p>1988년 12월 12일</p>
                </div>
              </Grid>
              <Grid
                item
                xs={isMobile ? 12 : 8}
                style={{ marginTop: isMobile ? 10 : "" }}
              >
                <h3>새로운 도전을 두려워하지 말라</h3>
                <p>
                  중학교 시절 취미로 나모웹에디터와 제로보드 게시판을 만들어
                  커뮤니티를 만들어보고 javascript 책을 한권 사서 조금씩
                  사이트를 꾸며나가며 소소하게 즐겼던 취미가 이제는 저의 직업이
                  되었습니다. 처음엔 그저 취미였지만 개발자로서의 진로를
                  결정하게 된 계기는 이때의 추억이 큰 부분을 차지한 것 같습니다.
                  병역을 끝마치고 JAVA 프로그래밍 학원에 등록하여 프로그래밍
                  기초를 배우고 난 뒤 취업을 하여 이후 C#, .NET, javascript,
                  jQuery, MSSQL 등을 이용하여 개발 및 서비스를 하였습니다. 이후
                  react.js, vue.js 등을 이용한 개발 경험을 통하여 개발자로서의
                  시야를 넓히고 새로운 기술들을 받아들이며 끊임없이 앞서가는
                  발전된 개발자의 모습을 꿈꾸게 되었습니다. 새로운 경험을
                  두려워하지 않고 받아드리며 흡수할 수 있는 사람이 되는 것을
                  목표로 노력하고 있습니다.
                </p>
              </Grid>
            </Grid>
          </Section>
          <Section title="Skills." icon="widgets" className="skills">
            {skills.map((v, i) => (
              <div className="skill-group" key={`skill-group-${i}`}>
                <h3>{v.group}</h3>
                {v.items.map((iv, k) => (
                  <div key={`skill-group-${i}-${k}`}>
                    <DevIcons
                      name={iv.icon}
                      title={iv.title}
                      isLast={k === v.items.length - 1}
                    />
                  </div>
                ))}
              </div>
            ))}
          </Section>
          <Section title="Career." icon="linear_scale" className="careers">
            <Timeline lineColor={"#ddd"}>
              {careers.map((v, i) => (
                <TimelineItem
                  key={`timeline-${i}`}
                  dateText={`${v.date}`}
                  dateInnerStyle={{ background: "#BBBBD1", color: "#fff" }}
                >
                  <h3>{v.project}</h3>
                  <h4>{v.company}</h4>
                  <div className="careers-box">
                    <h5>서버환경</h5>
                    <p>{v.env}</p>
                    <h5>사용기술</h5>
                    <p>{v.useSkills.join(", ")}</p>
                    <h5>업무내용</h5>
                    <p>{v.description}</p>
                    <h5>성과</h5>
                    <p>{v.result}</p>
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </Section>
        </div>
      </div>
      <PageUp />
    </div>
  );
};

export default App;
