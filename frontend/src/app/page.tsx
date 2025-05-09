// src/app/page.tsx
'use client'; // Client Component임을 명시

// useCallback 훅을 임포트합니다.
import { useEffect, useState, useCallback } from 'react'; // <-- useCallback 추가
import Head from 'next/head'; // 필요하다면 사용 (layout.tsx에 Head가 있다면 불필요)

// 사용할 레이아웃 컴포넌트들을 임포트
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeContent from '../components/HomeContent/HomeContent'; // 메인 섹션들을 담은 컴포넌트

// globals.css는 src/app/layout.tsx 에서 임포트됩니다.
// HomeContent.module.css 등은 해당 컴포넌트 파일에서 직접 임포트합니다.

export default function Home() {
  const [message, setMessage] = useState<string | null>('Loading...');

  // fetchMessage 함수를 useCallback으로 감싸서 메모이제이션합니다.
  // 이 함수는 외부의 어떤 상태나 props에도 의존하지 않으므로, 의존성 배열은 비워둡니다 ([])
  const fetchMessage = useCallback(async () => {
    try {
      const apiUrl = 'http://ec2-13-209-68-67.ap-northeast-2.compute.amazonaws.com:8080/common/hello';
      console.log(`Workspaceing from: ${apiUrl}`); // 오타 수정 및 명확하게 'Fetching'으로 변경

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
  }, []); // <-- useCallback의 의존성 배열: 이 함수가 의존하는 값들이 없으므로 빈 배열

  useEffect(() => {
    // useCallback으로 안정화된 fetchMessage 함수를 호출합니다.
    fetchMessage();
    // useEffect의 의존성 배열에 안정화된 fetchMessage 함수를 넣어줍니다.
    // fetchMessage 함수는 useCallback 덕분에 안정적이므로 무한 루프를 유발하지 않습니다.
  }, [fetchMessage]); // <-- useEffect의 의존성 배열: fetchMessage 함수가 변경될 때마다 (하지만 useCallback 덕분에 거의 변경되지 않음) 실행

  return (
    <>
      {/* layout.tsx에 <Head>가 있다면 여기서 중복 정의 피하기 */}
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