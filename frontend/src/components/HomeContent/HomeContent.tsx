// src/components/HomeContent/HomeContent.tsx
import Image from 'next/image';
import styles from './HomeContent.module.css';
import Link from 'next/link';

// apiMessage prop의 타입을 정의합니다.
interface HomeContentProps {
    apiMessage: string | null;
}

// props로 apiMessage를 받습니다.
export default function HomeContent({ apiMessage }: HomeContentProps) {
  return (
    <main>
      {/* 첫 번째 섹션: 쉽고 간편하게 */}
      <section className={`${styles.section} ${styles.sectionEasy}`}>
          <div className="container"> {/* 전역 스타일 클래스 사용 */}
              <div className={`${styles.flexContainer} ${styles.alignCenter}`}>
                  <div className={styles.textControl}>
                      <h1>쉽고 간편하게</h1>
                      <p>당신이 바라던 챗봇을<br/> 원하는 대로<br/> 심플, 많은 양의 추천부터<br/> 상태조회, 질문, 챗봇까지<br/> 다양한 형태의 챗봇을 맞춰 제작해드립니다.</p>
                  </div>
                  <div className={styles.largePlaceholder}>
                      Large Placeholder
                  </div>
              </div>
          </div>
      </section>

      {/* 두 번째 섹션: 나에게 맞는 챗봇 */}
      <section className={`${styles.section} ${styles.sectionCustom}`}>
          <div className="container">
              <h2 className={styles.sectionHeading}>나에게 맞는 챗봇을 원하는 대로~</h2>
              <p className={styles.subtitle}>둘러보기에서 챗봇 데모를 확인, 제작하기에서 의뢰를 맡길 수 있습니다.</p>

              {/* 여기에 API 메시지 표시 영역 추가 */}
              <div className={styles.apiMessageArea}>
                <p><strong>Spring Boot API 메시지:</strong> {apiMessage}</p>
              </div>


              <div className={`${styles.flexContainer} ${styles.spaceBetween}`}>
                  {/* 좌측 블록: 챗봇 데모 소개 */}
                  <div className={styles.contentBlock}>
                      <div className={styles.blockHeader}>
                           <h3 className={styles.blockTitle}><span className={styles.icon}>📄</span> 챗봇 데모 소개</h3>
                           <button className={`${styles.button} ${styles.outlineButton}`}>둘러보기</button>
                      </div>
                      <p className={styles.blockText}>프로필 제작하는 챗봇 데모 (프로필, 정보제공, 랭킹)까지! 데모 보러가기</p>
                      <div className={styles.smallPlaceholder}>
                          Small Placeholder 1
                      </div>
                  </div>

                  {/* 우측 블록: 의뢰 요청 */}
                  <div className={styles.contentBlock}>
                       <div className={styles.blockHeader}>
                          <h3 className={styles.blockTitle}><span className={styles.icon}>✍️</span> 의뢰 요청</h3>
                          <button className={`${styles.button} ${styles.filledButton}`}>제작하기</button>
                       </div>
                       <p className={styles.blockText}>주문 제작 의뢰를 하시려면, 의뢰하기 기능과 신청서 작성 후 보내주시면 바로 제작에 들어갑니다.</p>
                      <div className={styles.smallPlaceholder}>
                          Small Placeholder 2
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}