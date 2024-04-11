import { IoMdSettings } from "react-icons/io";
import { FaUndoAlt } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
export default function App() {
  const initialWorkTime = 25 * 60;
  const initialSmallBreakTime = 5 * 60;
  const initialLongBreakTime = 15 * 60;

  const [workTime, setWorkTime] = useState(initialWorkTime);
  const [smallBreakTime, setSmallBreakTime] = useState(initialSmallBreakTime);
  const [longBreakTime, setLongBreakTime] = useState(initialLongBreakTime);
  const [time, setTime] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            handleSessionCompletion();
            return prevTime;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prevState) => !prevState);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSessionCompletion = () => {
    setIsRunning(false); 
    setSessionsCompleted((prevSessions) => prevSessions + 1);
    setUsageHistory((prevHistory) => [...prevHistory, `Session ${prevSessions + 1}: ${formatTime(25 * 60 - time)}`]);
  };

  const handleDurationChange = (duration) => {
    switch (duration) {
      case 'work':
        setTime(workTime);
        break;
      case 'smallBreak':
        setTime(smallBreakTime);
        break;
      case 'longBreak':
        setTime(longBreakTime);
        break;
      default:
        break;
    }
    setIsRunning(false);
    setSelectedOption(duration);
  };

  const handleReset = () => {
    setWorkTime(initialWorkTime);
    setSmallBreakTime(initialSmallBreakTime);
    setLongBreakTime(initialLongBreakTime);
    setTime(initialWorkTime);
    setIsRunning(false);
    setCompletedSessions(0);
  };

  return (
    <div className="text-white">
    <h1 className="text-6xl font-bold text-center mt-10 ">
      Pomodoro
    </h1>
    <div className="flex ml-[660px] mt-8 text-xl border-slate-950 rounded-xl bg-slate-950 w-[395px] h-8">
        <button className="px-6 hover:bg-violet-700 focus:ring-2 rounded-3xl hover:cursor-pointer"onClick={() => handleDurationChange('work')}>Work</button>
        <button  className="px-6 hover:bg-violet-700 focus:ring-2 rounded-3xl hover:cursor-pointer" onClick={() => handleDurationChange('smallBreak')}>Small Break</button>
        <button   className="px-6 hover:bg-violet-700 focus:ring-2 rounded-3xl hover:cursor-pointer" onClick={() => handleDurationChange('longBreak')}>Long Break</button>
    </div>
    <div className="w-[500px] h-[500px] rounded-full border-slate-950 bg-slate-950 mt-8 ml-[600px] border-transparent">
      <div id="Timer" className="text-[90px] absolute ml-[145px] mt-[120px]">
      {formatTime(time)}
      </div>
      <div className="absolute mt-[260px] ml-[130px] text-2xl">Sessions Completed: {sessionsCompleted}</div>
      <button onClick={handleStartPause} id="Button" className="text-5xl pt-[310px] pl-[165px] tracking-wider ">{isRunning ? 'PAUSE' : 'START'}</button>
      <FaUndoAlt size={30} onClick={handleReset} className="cursor-pointer absolute ml-[220px] mt-7" />
    </div>
    </div>
  )
}