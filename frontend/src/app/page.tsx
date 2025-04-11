'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string | null>('Loading...');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('http://localhost:8080/common/hello'); // Spring Boot API 호출
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setMessage(text);
      } catch (error: any) {
        setMessage(`Failed to fetch message: ${error.message}`);
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Next.js Frontend</h1>
      <p className="text-lg">Message from ChatBotService Spring Boot: {message}</p>
    </div>
  );
}