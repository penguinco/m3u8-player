import React from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer';  // VideoPlayer コンポーネントをインポート

function App() {
  return (
    <div className="App">
      <h1>m3u8 Player</h1>
      <VideoPlayer />  {/* VideoPlayer コンポーネントを使う */}
    </div>
  );
}

export default App;
