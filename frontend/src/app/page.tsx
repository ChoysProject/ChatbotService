// src/app/page.tsx
'use client'; // Client Component임을 명시

// useCallback 훅을 임포트합니다.
import { useEffect, useState, useCallback } from 'react';
// import Head from 'next/head'; // <-- 이 줄을 삭제합니다.

// 사용할 레이아웃 컴포넌트들을 임포트
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeContent from '../components/HomeContent/HomeContent'; // 메인 섹션들을 담은 컴포넌트

// globals.css는 src/app/layout.tsx 에서 임포트됩니다.
// HomeContent.module.css 등은 해당 컴포넌트 파일에서 직접 임포트합니다.

export default function Home() {
  const [message, setMessage] = useState<string | null>('Loading...');

  const fetchMessage = useCallback(async () => {
    try {
      const apiUrl = 'http://ec2-13-209-68-67.ap-northeast-2.compute.amazonaws.com:8080/common/hello';
      console.log(`Workspaceing from: ${apiUrl}`);

      const response = await fetch(apiUrl);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
      }
      const text: string = await response.text();
      setMessage(text);
    } catch (error: unknown) {
        let errorMessage = 'Failed to fetch message: Unknown error';
        if (error instanceof Error) {
          errorMessage = `Failed to fetch message: ${error.message}`;
          console.error('Error fetching message:', error);
        } else {
          console.error('Error fetching message:', error);
        }
        setMessage(errorMessage);
      }
  }, []);

  useEffect(() => {
    fetchMessage();
  }, [fetchMessage]);

  return (
    <>
      {/* layout.tsx에 <Head>가 있다면 여기서 중복 정의 피하기 */}
      {/* <Head> 이 부분을 주석 처리 해두었으므로 Head 임포트는 삭제합니다. */}
      {/* <Head>
        <title>챗봇 서비스</title>
        <meta name="description" content="우리의 챗봇 서비스를 만나보세요" />
      </Head> */}

      <Header />

      <HomeContent apiMessage={message} />

      <Footer />
    </>
  );
}