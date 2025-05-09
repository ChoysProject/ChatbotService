// src/components/Footer/Footer.tsx
import styles from './Footer.module.css'; // 모듈 스타일 임포트

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className="container"> {/* 전역 스타일 클래스 사용 */}
        {/* 푸터 내용 */}
        <p>&copy; 2025 Graduate School of Software Convergence, Kookmin University. All rights reserved.</p>
      </div>
    </footer>
  );
}