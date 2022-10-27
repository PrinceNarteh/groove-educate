import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import {
  Home,
  HomeworkHelp,
  LearningAnalysis,
  LearningPlan,
  LiveLessons,
  MockExams,
  Notifications,
  PracticeExams,
  VideoLibrary,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/homework-help" element={<HomeworkHelp />} />
          <Route path="/learning-analysis" element={<LearningAnalysis />} />
          <Route path="/learning-plan" element={<LearningPlan />} />
          <Route path="/live-lessons" element={<LiveLessons />} />
          <Route path="/mock-exams" element={<MockExams />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/practice-exams" element={<PracticeExams />} />
          <Route path="/video-library" element={<VideoLibrary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
