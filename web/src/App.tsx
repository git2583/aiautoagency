import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Bot, 
  ChevronRight, 
  Database, 
  MessageCircle, 
  Users, 
  Zap, 
  Mail,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import './index.css';

const App: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="home">
      {/* Navbar */}
      <nav style={{ padding: '20px 0', borderBottom: '1px solid var(--card-border)', position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>AIAUTO</div>
          <div style={{ display: 'flex', gap: '32px', fontWeight: 600 }}>
            <a href="#problems">Problems</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <button className="btn btn-primary" style={{ padding: '8px 20px' }}>무료 진단</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section" style={{ padding: '120px 0', textAlign: 'center', background: 'radial-gradient(circle at top, #EFF6FF 0%, #FFFFFF 50%)' }}>
        <div className="container">
          <motion.div {...fadeIn}>
            <span className="badge">AI & Automation for SMBs</span>
            <h1 style={{ fontSize: '4rem', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              비즈니스 성장의 병목,<br />
              <span className="text-gradient">데이터와 자동화</span>로 해결합니다
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.8' }}>
              마케팅 운영 시간 70% 단축, 리드 응답 속도 5배 향상.<br />
              성장하는 기업을 위한 실무 중심의 AI 자동화 솔루션을 만나보세요.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '16px 32px' }}>지금 무료 진단 받기</button>
              <button className="btn" style={{ fontSize: '1.125rem', border: '1px solid var(--card-border)' }}>서비스 자세히 보기</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problems" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div {...fadeIn} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>혹시 우리 팀도 이런 '성장통'을 겪고 있나요?</h2>
            <p style={{ color: 'var(--text-muted)' }}>귀한 인재들이 반복적인 수작업에 갇혀 있지는 않은지 점검해 보세요.</p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { 
                icon: <Zap size={24} color="var(--primary)" />, 
                title: "쏟아지는 리드, 하지만 응답은 24시간 뒤?", 
                desc: "문의가 들어와도 담당자 확인까지 평균 6~24시간이 소요됩니다. 그 사이 잠재 고객의 40%는 이미 경쟁사로 떠납니다." 
              },
              { 
                icon: <BarChart3 size={24} color="var(--primary)" />, 
                title: "엑셀 데이터 통합에만 매달리는 마케팅팀", 
                desc: "CRM, 광고 플랫폼, 웹 로그 데이터가 제각각이라 리포트 하나 만드는 데만 매주 5시간 이상의 수작업이 반복됩니다." 
              },
              { 
                icon: <Users size={24} color="var(--primary)" />, 
                title: "반복되는 FAQ에 지쳐가는 고객센터", 
                desc: "단순 문의가 전체 상담의 80%를 차지합니다. 정작 중요한 복합 상담에 집중할 시간은 부족하고, 팀원의 번아웃은 심화됩니다." 
              }
            ].map((item, idx) => (
              <motion.div key={idx} className="card" {...fadeIn} transition={{ delay: idx * 0.1 }}>
                <div style={{ marginBottom: '20px', backgroundColor: 'var(--accent)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <motion.div {...fadeIn} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>실질적인 지표 변화를 만드는 3가지 핵심 솔루션</h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {[
              {
                icon: <Bot size={32} />,
                title: "마케팅 워크플로우 자동화",
                desc: "리드 캡처부터 스코어링, 육성까지 전 과정을 자동화합니다.",
                stats: [
                  { label: "운영 시간 절감", value: "50~70%" },
                  { label: "우수 리드 전환율", value: "20~40%+" }
                ]
              },
              {
                icon: <Database size={32} />,
                title: "실시간 데이터 파이프라인 구축",
                desc: "분산된 고객 데이터를 하나로 통합하여 실시간 대시보드를 구축합니다.",
                stats: [
                  { label: "수동 리포트 시간", value: "0시간" },
                  { label: "예측 정확도 향상", value: "60%+" }
                ]
              },
              {
                icon: <MessageCircle size={32} />,
                title: "24/7 인텔리전트 AI 챗봇",
                desc: "한국어에 최적화된 AI가 고객 문의를 실시간으로 해결합니다.",
                stats: [
                  { label: "단순 FAQ 자동화", value: "60~80%" },
                  { label: "응답 속도", value: "초 단위" }
                ]
              }
            ].map((service, idx) => (
              <motion.div key={idx} className="card" style={{ display: 'flex', alignItems: 'center', gap: '48px', padding: '48px' }} {...fadeIn}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ color: 'var(--primary)' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '1.75rem' }}>{service.title}</h3>
                  </div>
                  <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '32px' }}>{service.desc}</p>
                  <div style={{ display: 'flex', gap: '40px' }}>
                    {service.stats.map((stat, sIdx) => (
                      <div key={sIdx}>
                        <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '4px' }}>{service.value}</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, backgroundColor: 'var(--bg-secondary)', height: '240px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--card-border)' }}>
                  <BarChart3 size={64} color="var(--card-border)" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section" style={{ backgroundColor: 'var(--text-main)', color: 'white' }}>
        <div className="container">
          <motion.div {...fadeIn} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>먼저 경험한 기업들의 생생한 목소리</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            {[
              {
                quote: "이전에는 마케팅 데이터 정리하는 데만 월요일 오전 전체를 다 썼어요. 자동화 도입 후에는 리드 응답 시간이 3배 빨라졌고, 팀원들은 이제 캠페인 전략에만 집중하고 있습니다.",
                author: "김성진 팀장",
                company: "성장기 이커머스 A사, 그로스 리드"
              },
              {
                quote: "고객 문의가 급증하면서 답변이 늦어져 이탈하는 고객이 많았습니다. AI 챗봇 도입 후 24시간 실시간 응대가 가능해졌고, 고객 만족도 점수가 이전 대비 25% 상승했습니다.",
                author: "이수민 운영이사",
                company: "SaaS 스타트업 B사, COO"
              }
            ].map((t, idx) => (
              <motion.div key={idx} style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }} {...fadeIn}>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '32px', fontStyle: 'italic', opacity: 0.9 }}>"{t.quote}"</p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '4px' }}>{t.author}</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.6 }}>{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <motion.div className="card" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '80px 40px', border: 'none' }} {...fadeIn}>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>이제 데이터로 증명되는 성장을 시작하세요</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '40px', opacity: 0.9 }}>
              복잡한 기술 고민은 저희에게 맡기고, 귀사는 비즈니스 본질에만 집중하세요.<br />
              지금 바로 우리 회사에 맞는 최적의 자동화 시나리오를 설계해 드립니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <button className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', fontSize: '1.25rem', padding: '20px 48px' }}>
                30분 무료 상담 및 자동화 진단 신청하기
              </button>
              <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                *현재 한정 기간 동안 첫 프로젝트 도입 시 2개월 무료 체험 혜택을 제공합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 0', borderTop: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>AIAUTO</div>
            <p>© 2026 AI Auto Agency. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
