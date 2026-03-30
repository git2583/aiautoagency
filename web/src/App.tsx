import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  ChevronRight, 
  Database, 
  MessageCircle, 
  Zap, 
  Mail,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  TrendingUp,
  Clock,
  Layout,
  AlertCircle
} from 'lucide-react';
import './index.css';

const App: React.FC = () => {
  const fadeIn: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="glass" style={{ padding: '20px 0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.04em', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap fill="var(--primary)" size={24} />
            AIAUTO
          </div>
          <div style={{ display: 'flex', gap: '40px', fontWeight: 600, alignItems: 'center' }}>
            <a href="#problems" className="nav-link">문제점</a>
            <a href="#services" className="nav-link">솔루션</a>
            <a href="#testimonials" className="nav-link">성공사례</a>
            <button className="btn btn-primary" style={{ padding: '10px 24px' }}>무료 진단</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section" style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at 50% -20%, var(--primary-light) 0%, transparent 70%)', zIndex: -1 }} />
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div {...fadeIn}>
            <span className="badge">🚀 SMB를 위한 실무형 AI 자동화</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '32px' }}>
              팀이 <span className="text-gradient">집계 작업</span>에 잡혀 있나요?<br />
              2-3배 빠른 자동화를 시작하세요.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 48px', lineHeight: '1.8' }}>
              50-500명 규모의 성장 중인 기업들이 우리와 함께 <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>60-90일 내에</span><br />
              운영 시간을 50% 줄이고 있습니다.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '1.125rem' }}>
                🚀 무료 자동화 진단받기 (5분) <ChevronRight size={20} />
              </button>
              <button className="btn btn-secondary" style={{ padding: '18px 40px', fontSize: '1.125rem' }}>
                문의: hello@aiautoagency.kr
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ marginTop: '80px', position: 'relative' }}
          >
            <div className="card glass animate-float" style={{ maxWidth: '900px', margin: '0 auto', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed' }}>
              <div style={{ textAlign: 'center', opacity: 0.4 }}>
                <Layout size={80} style={{ marginBottom: '24px' }} />
                <p style={{ fontWeight: 600 }}>대시보드 미리보기 및 자동화 시뮬레이션 영역</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problems" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div {...fadeIn} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>당신의 팀, 이 중 하나라도 겪고 있나요?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>귀한 인재들이 비효율적인 수작업에 갇혀 성장 기회를 놓치고 있습니다.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}
          >
            {[
              { 
                icon: <Mail size={24} />, 
                title: "마케팅 팀이 엑셀에 묻혀 있다", 
                problem: "리드 응답 시간: 6-24시간 (경쟁사는 5분)",
                result: "월 20-30건 리드 누수, ROI 추적 불가"
              },
              { 
                icon: <Database size={24} />, 
                title: "데이터가 곳곳에 흩어져 있다", 
                problem: "CRM, 메일, 광고 데이터가 각각 독립적",
                result: "의사결정이 추측일 뿐, 정교한 캠페인 불가능"
              },
              { 
                icon: <MessageCircle size={24} />, 
                title: "고객 지원팀의 단순 문의 번아웃", 
                problem: "일일 중복 문의 60-80% 차지",
                result: "CSAT 하락 및 재구매율 20% 감소"
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="card">
                <div style={{ marginBottom: '24px', backgroundColor: 'var(--primary-light)', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{item.title}</h3>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <p>{item.problem}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', color: '#EF4444', fontWeight: 700 }}>
                    <TrendingUp size={18} style={{ flexShrink: 0, marginTop: '3px', transform: 'rotate(180deg)' }} />
                    <p>결과: {item.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <motion.div {...fadeIn} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>우리가 <span className="text-gradient">3가지</span>로 해결합니다</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>60-90일 내에 체감할 수 있는 실질적인 지표 변화를 약속합니다.</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {[
              {
                icon: <Bot size={40} />,
                title: "마케팅 자동화",
                desc: "리드 캡처 → 스코링 → 육성 → 영업 연결까지 전 과정 자동화",
                how: "이메일, CRM, 웹 폼 연결 및 자동 분류 알림 설정",
                stats: [
                  { label: "운영 시간", value: "50-70%↓" },
                  { label: "응답 속도", value: "3-5배↑" }
                ]
              },
              {
                icon: <Database size={40} />,
                title: "데이터 파이프라인 구축",
                desc: "CRM, 광고, 결제 데이터를 한눈에 보는 실시간 대시보드",
                how: "데이터 소스 연결 및 정제, BI 대시보드 구성",
                stats: [
                  { label: "보고서 작업", value: "0시간" },
                  { label: "전환율 향상", value: "15-25%↑" }
                ]
              },
              {
                icon: <MessageCircle size={40} />,
                title: "AI 챗봇 구축 (24/7)",
                desc: "한국어 최적화 AI가 반복 문의 80%를 초 단위로 해결",
                how: "한국어 AI 학습 + 카카오톡/Slack/웹 채널 연결",
                stats: [
                  { label: "지원팀 부담", value: "60-80%↓" },
                  { label: "고객 만족도", value: "25%↑" }
                ]
              }
            ].map((service, idx) => (
              <motion.div key={idx} className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', padding: '60px' }} {...fadeIn}>
                <div style={{ flex: '1 1 500px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                    <div style={{ color: 'var(--primary)' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '2rem' }}>{service.title}</h3>
                  </div>
                  <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '16px' }}>{service.desc}</p>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="var(--primary)" /> <strong>방법:</strong> {service.how}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '60px' }}>
                    {service.stats.map((stat, sIdx) => (
                      <div key={sIdx}>
                        <div className="stats-value">{stat.value}</div>
                        <div className="stats-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ flex: '1 1 300px', background: 'var(--bg-secondary)', borderRadius: '24px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--card-border)' }}>
                  <TrendingUp size={80} color="var(--primary)" style={{ opacity: 0.2 }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section" style={{ backgroundColor: 'var(--text-main)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40%', height: '100%', background: 'radial-gradient(circle at bottom right, rgba(99, 102, 241, 0.15) 0%, transparent 70%)', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeIn} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>실제 고객들은 이렇게 변했습니다</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '32px' }}>
            {[
              {
                quote: "매달 80시간 잃던 마케팅 팀이 전략가가 됐어요. 가장 놀라웠던 건 60-90일 후 ROI 계산이 초 단위로 나온 것. 이제 데이터로 얘기할 수 있어요.",
                author: "김민지",
                role: "이커머스 스타트업 마케팅 리드"
              },
              {
                quote: "고객 데이터가 통합되니 영업이 확 달라졌습니다. 다들 같은 숫자를 본다는 게 이렇게 큰 변화를 줄 줄 몰랐어요. 전환율이 18% 올랐습니다.",
                author: "박준호",
                role: "SaaS 회사 CTO"
              }
            ].map((t, idx) => (
              <motion.div key={idx} className="glass" style={{ padding: '60px', borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.1)' }} {...fadeIn}>
                <p style={{ fontSize: '1.5rem', lineHeight: '1.6', marginBottom: '40px', fontWeight: 500 }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{t.author[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>{t.author}</div>
                    <div style={{ fontSize: '1rem', opacity: 0.6 }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="card" 
            style={{ 
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', 
              color: 'white', 
              padding: '100px 60px', 
              border: 'none', 
              textAlign: 'center' 
            }} 
            {...fadeIn}
          >
            <h2 style={{ fontSize: '3.5rem', marginBottom: '32px' }}>다음 달 자동화, 오늘부터 시작하세요</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '56px', opacity: 0.9, maxWidth: '800px', margin: '0 auto 56px' }}>
              당신의 팀 상황에 맞춰 2주 내 맞춤 제안을 드립니다.<br />
              <strong>초기 무료 진단 → 필요한 것만 구성 → ROI 명확.</strong>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <button className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', fontSize: '1.25rem', padding: '24px 64px', borderRadius: '16px' }}>
                <Calendar size={24} /> 📅 무료 상담 예약 (1:1 온라인, 30분)
              </button>
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', opacity: 0.8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><ShieldCheck size={20} /> 30+ 팀 자동화 지원</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={20} /> 평균 60-90일 내 ROI 달성</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={20} /> 국내 PIPA 규정 준수</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 0', borderTop: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap fill="var(--primary)" size={28} /> AIAUTO
              </div>
              <p style={{ maxWidth: '300px' }}>성장하는 기업의 운영 효율을 극대화하는 AI 자동화 파트너</p>
            </div>
            <div style={{ display: 'flex', gap: '80px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>서비스</h4>
                <a href="#" className="nav-link">마케팅 자동화</a>
                <a href="#" className="nav-link">데이터 분석</a>
                <a href="#" className="nav-link">AI 챗봇</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>문의</h4>
                <p>hello@aiautoagency.kr</p>
                <p>서울특별시 강남구 테헤란로</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
            <p>© 2026 AI Auto Agency. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#">개인정보처리방침</a>
              <a href="#">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
