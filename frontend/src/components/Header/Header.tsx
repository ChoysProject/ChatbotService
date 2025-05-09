// src/components/Header/Header.tsx
import Link from 'next/link';
import styles from './Header.module.css'; // 모듈 스타일 임포트

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className="container"> {/* 전역 스타일 클래스 사용 */}
        <div className={styles.headerContainer}> {/* 내부 flex 레이아웃 */}
          <div className={styles.logo}>로고</div>
          <nav>
            <ul className={styles.navLinks}>
              <li><Link href="/talk">TALK</Link></li>
              <li><Link href="/create">제작하기</Link></li>
              <li><Link href="/explore">둘러보기</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}